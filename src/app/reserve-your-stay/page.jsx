"use client";

import { useState, useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

/* ─── Constants ───────────────────────────────────────────────── */
const DATE_MIN = "2026-09-21"; // earliest check-in
const DATE_MAX = "2026-09-24"; // latest check-out

const PRICE_PER_ROOM_PER_NIGHT = 100; //62100


const rateRows = [
    { label: "Room Rate:", value: "₹50,847 / night" },
    { label: "Taxes:", value: "₹9,153" },
    { label: "Subtotal:", value: "₹60,000" },
    { label: "Service Fee (3.5%):", value: "₹2,100" },
];

/* ─── Helpers ─────────────────────────────────────────────────── */
const fmtDisplay = (s) => {
    if (!s) return "—";
    const [y, m, d] = s.split("-");
    return `${d}/${m}/${y}`;
};

const diffNights = (a, b) => {
    if (!a || !b) return 0;
    const da = new Date(a + "T00:00:00");
    const db = new Date(b + "T00:00:00");
    return Math.max(0, Math.round((db.getTime() - da.getTime()) / 86_400_000));
};

const formatINR = (n) =>
    "₹" + n.toLocaleString("en-IN", { maximumFractionDigits: 0 });

/* ─── Zod Schema ──────────────────────────────────────────────── */
const bookingSchema = z
    .object({
        checkIn: z
            .string()
            .refine((v) => v >= DATE_MIN && v < DATE_MAX, {
                message: "Check-in must be between 21–23 September 2026",
            }),
        checkOut: z
            .string()
            .refine((v) => v > DATE_MIN && v <= DATE_MAX, {
                message: "Check-out must be between 22–24 September 2026",
            }),
        rooms: z
            .number()
            .min(1, "At least 1 room required")
            .max(20, "Maximum 20 rooms"),
        email: z
            .string()
            .min(1, "Email is required")
            .email("Please enter a valid email"),
        phone: z
            .string()
            .min(10, "Phone must be 10 digits")
            .max(10, "Phone must be 10 digits")
            .regex(/^\d{10}$/, "Phone must contain only digits"),
        name: z.string().min(2, "Name must be at least 2 characters"),
    })
    .refine((data) => data.checkOut > data.checkIn, {
        message: "Check-out must be after check-in",
        path: ["checkOut"],
    });

/* ─── DateField — interactive, locked to 21–24 Sep 2026 ─────── */
function DateField({ label, value, min, max, onChange, error }) {
    const inputRef = useRef(null);

    return (
        <div className="flex items-start justify-between gap-4">
            <label className="text-xs tracking-widests text-[#7a6a55] uppercase w-36 shrink-0 pt-2">
                {label}
            </label>
            <div className="relative flex-1">
                <div
                    className="flex items-center justify-between border border-[#d8cdb8] bg-white px-3 py-2 rounded-sm cursor-pointer hover:border-[#b5924c] transition-colors group"
                    onClick={() => inputRef.current?.showPicker?.()}
                >
                    <span className="text-sm COLOR_TEXT_RED select-none">
                        {fmtDisplay(value)}
                    </span>
                    <svg
                        className="w-4 h-4 COLOR_TEXT_RED group-hover:scale-110 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="1.5" />
                        <path d="M16 2v4M8 2v4M3 10h18" strokeWidth="1.5" />
                    </svg>
                    {/* Invisible native input — only dates within min/max are selectable */}
                    <input
                        ref={inputRef}
                        type="date"
                        value={value}
                        min={min}
                        max={max}
                        onChange={(e) => e.target.value && onChange(e.target.value)}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                </div>
                {error && (
                    <p className="text-[10px] text-red-500 mt-0.5 Font_YV">{error}</p>
                )}
            </div>
        </div>
    );
}

/* ─── Main Component ──────────────────────────────────────────── */
export default function ReserveYourStay() {
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        control,
        setValue,
        formState: { errors, isValid },
    } = useForm({
        resolver: zodResolver(bookingSchema),
        defaultValues: {
            checkIn: DATE_MIN,
            checkOut: DATE_MAX,
            rooms: 1,
            email: "",
            phone: "",
            name: "",
        },
        mode: "onChange",
    });

    const rooms = watch("rooms");
    const checkIn = watch("checkIn");
    const checkOut = watch("checkOut");
    const nights = diffNights(checkIn, checkOut);
    const subtotal = rooms * nights * PRICE_PER_ROOM_PER_NIGHT;
    const total = subtotal;

    /* ─── Load Razorpay script ─────────────────────────────────── */
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    /* ─── Handle Payment (Industry Standard) ───────────────────── */
    const onSubmit = async (data) => {
        setIsProcessing(true);
        try {
            // ── Step 1: Create Razorpay order on the server ──────
            const orderRes = await fetch("/api/razorpay/create-order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    amount: total * 100, // paise
                    bookingDetails: {
                        checkIn: data.checkIn,
                        checkOut: data.checkOut,
                        rooms: data.rooms,
                        nights,
                        name: data.name,
                        email: data.email,
                        phone: "+91" + data.phone,
                    },
                }),
            });

            const orderData = await orderRes.json();
            if (!orderData.success) {
                throw new Error(orderData.error || "Order creation failed");
            }

            // ── Step 2: Open Razorpay Checkout ─────────────────
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: orderData.amount,
                currency: orderData.currency,
                name: "Sonal's Kushie",
                description: `${data.rooms} Room(s) × ${nights} Night(s) | ${fmtDisplay(data.checkIn)} – ${fmtDisplay(data.checkOut)}`,
                order_id: orderData.orderId, // critical — links payment to server order
                prefill: {
                    name: data.name,
                    email: data.email,
                    contact: "+91" + data.phone,
                },
                theme: { color: "#b5924c" },

                // ── Step 3: Verify payment on the server ─────────
                handler: async function (response) {
                    try {
                        const verifyRes = await fetch("/api/razorpay/verify-payment", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_signature: response.razorpay_signature,
                                bookingDetails: {
                                    checkIn: data.checkIn,
                                    checkOut: data.checkOut,
                                    rooms: data.rooms,
                                    nights,
                                    name: data.name,
                                    email: data.email,
                                    phone: "+91" + data.phone,
                                    totalAmount: formatINR(total),
                                },
                            }),
                        });

                        const verifyData = await verifyRes.json();
                        if (verifyData.success) {
                            setPaymentSuccess(true);
                        } else {
                            throw new Error(verifyData.error || "Verification failed");
                        }
                    } catch (err) {
                        console.error("[Razorpay] Verify error:", err);
                        alert("Payment was received but verification failed. Contact support.");
                    } finally {
                        setIsProcessing(false);
                    }
                },

                modal: {
                    ondismiss: () => setIsProcessing(false),
                },
            };

            const rzp = new window.Razorpay(options);
            rzp.on("payment.failed", function (response) {
                console.error("[Razorpay] Payment failed:", response.error);
                setIsProcessing(false);
                alert(`Payment failed: ${response.error.description}`);
            });
            rzp.open();

        } catch (err) {
            console.error("[Razorpay] Checkout error:", err);
            alert(err.message || "Something went wrong. Please try again.");
            setIsProcessing(false);
        }
    };

    /* ─── Success Screen ─────────────────────────────────────── */
    if (paymentSuccess) {
        return (
            <div className="min-h-screen COLOR_BG_RED flex items-center justify-center p-8">
                <div className="COLOR_BG_CREAM border border-[#e2d9c8] rounded-sm px-10 py-12 max-w-md w-full text-center shadow-[0_8px_48px_rgba(120,90,40,0.10)]">
                    <div className="w-16 h-16 rounded-full bg-[#f5ede0] flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-[#b5924c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className=" Font_Q COLOR_TEXT_RED mb-7 max-sm:mb-2">Booking </h2>
                    <h2 className=" Font_Q COLOR_TEXT_RED mb-10 max-sm:mb-6">Confirmed!</h2>
                    <p className="text-sm Font_YV text-[#7a6a55] mb-6">
                        Thank you for your booking at Sonal's Kushie. A confirmation will be sent to your email.
                    </p>
                    <div className="bg-[#f9f6f1] rounded-sm p-4 text-left space-y-1.5 mb-6">
                        <p className="text-xs Font_YV text-[#7a6a55]">
                            📅 {fmtDisplay(checkIn)} – {fmtDisplay(checkOut)} ({nights} nights)
                        </p>
                        <p className="text-xs Font_YV text-[#7a6a55]">🏨 {rooms} Room{rooms > 1 ? "s" : ""}</p>
                        <p className="text-xs Font_YV COLOR_TEXT_RED font-semibold">💰 {formatINR(total)}</p>
                    </div>
                    <p className="text-[10px] Font_YV text-[#7a6a55]">
                        For assistance: sonalskushie@gmail.com,
                        <br />
                        +91 93588 00614
                    </p>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Hero */}
            <div className="w-full h-fit flex flex-col justify-center gap-5 max-lg:gap-2 items-center COLOR_BG_RED pt-[100px] pb-[50px]">
                <h2 className="COLOR_TEXT_CREAM uppercase Font_Q">Reserve Your Stay</h2>
                <p className="COLOR_TEXT_CREAM mt-2 capitalize Font_YV">
                    Experience elegance craft for your celebration
                </p>
            </div>

            <div className="min-h-screen COLOR_BG_RED w-full flex items-center justify-center p-4 max-lg:flex-col font-serif gap-20 max-lg:gap-10 py-[50px]">

                {/* Left – Rate Bifurcation */}
                <div className="h-fit max-lg:w-full mb-auto COLOR_TEXT_CREAM flex items-start sm:items-center justify-center p-4 sm:p-8">
                    <div className="relative w-full max-w-sm sm:max-w-md COLOR_TEXT_CREAM">

                        <h1 className="text-2xl sm:text-3xl COLOR_TEXT_CREAM tracking-wide mb-1 Font_Q">
                            Rate Bifurcation
                        </h1>
                        <div className="w-10 h-px bg-[#b5924c] mb-6" />

                        {/* Meta info */}
                        <div className="space-y-1.5 mb-6 COLOR_TEXT_CREAM Font_Q">
                            {/* <MetaRow label="Venue" value="Sonal's Kushie" /> */}
                            <MetaRow label="Location" value="Raffles Udaipur" />
                            <MetaRow label="Dates Available" value="21 – 24 September 2026" />
                        </div>

                        {/* Rate card */}
                        <div className="COLOR_BG_RED rounded-sm shadow-[0_4px_32px_rgba(120,90,40,0.08)] COLOR_TEXT_CREAM">
                            <div className="flex items-center justify-between px-5 sm:px-6 py-4">
                                <span className="text-base sm:text-lg COLOR_TEXT_CREAM tracking-wide Font_Q">
                                    Rate Bifurcation
                                </span>
                                <span className="text-base sm:text-lg COLOR_TEXT_CREAM font-semibold tabular-nums Font_YV">
                                    ₹62,100
                                </span>
                            </div>
                            <div className="px-5 sm:px-6 py-4 space-y-3">
                                {rateRows.map(({ label, value }) => (
                                    <div key={label} className="flex items-center justify-between gap-4 Font_YV">
                                        <span className="text-xs sm:text-sm COLOR_TEXT_CREAM tracking-wide">{label}</span>
                                        <span className="text-xs sm:text-sm COLOR_TEXT_CREAM tabular-nums font-medium">{value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-t COLOR_TEXT_CREAM">
                                <span className="text-base sm:text-lg COLOR_TEXT_CREAM tracking-wide Font_Q">Total:</span>
                                <span
                                    className="text-xl sm:text-2xl COLOR_TEXT_CREAM tabular-nums"
                                    style={{ fontFamily: "'Cormorant Garamond','Georgia',serif", fontWeight: 600 }}
                                >
                                    ₹62,100
                                </span>
                            </div>
                        </div>

                        {/* Contact info */}
                        <div className="mt-6 space-y-2.5">
                            <ContactRow icon="email" text="sonalskushie@gmail.com" />
                            <ContactRow icon="phone" text="+91 93588 00614" />
                            <ContactRow icon="phone" text="+91 93100 69102" />
                        </div>

                        {/* Legal */}
                        <div className="mt-5 space-y-3">
                            <p className="text-[11px] sm:text-xs Font_YV leading-relaxed COLOR_TEXT_CREAM">
                                The amount transferred is non refundable and non transferrable.
                            </p>
                            <p className="text-[11px] sm:text-xs Font_YV leading-relaxed COLOR_TEXT_CREAM">
                                You agree to share information entered on this page with Sonal & Kush and Razorpay, adhering to their terms and conditions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="flex flex-col items-center gap-3 mt-8 h-[50vh] max-lg:h-fit max-lg:hidden">
                    <div className="flex-1 w-px bg-gradient-to-b from-transparent via-[#EFDFCB] to-transparent opacity-50" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#b5924c] opacity-60" />
                    <div className="flex-1 w-px bg-gradient-to-b from-transparent via-[#EFDFCB] to-transparent opacity-50" />
                </div>

                {/* Right – Booking Form */}
                <div className="relative w-full max-w-md">
                    <div className="COLOR_BG_CREAM border border-[#e2d9c8] shadow-[0_8px_48px_rgba(120,90,40,0.10)] rounded-sm px-8 pt-10 pb-8">

                        <h1 className="text-2xl COLOR_TEXT_RED tracking-wide mb-1 Font_Q">
                            Complete Your Booking
                        </h1>
                        <div className="w-10 h-px bg-[#b5924c] mb-8" />

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 Font_YV" noValidate>

                            {/* Check-in — selectable within 21–23 Sep 2026 */}
                            <Controller
                                name="checkIn"
                                control={control}
                                render={({ field }) => (
                                    <DateField
                                        label="Check-in Date"
                                        value={field.value}
                                        min={DATE_MIN}
                                        max="2026-09-23"
                                        onChange={(val) => {
                                            field.onChange(val);
                                            // auto-push checkout if it's no longer after check-in
                                            const co = watch("checkOut");
                                            if (co <= val) {
                                                const next = new Date(val + "T00:00:00");
                                                next.setDate(next.getDate() + 1);
                                                setValue("checkOut", next.toISOString().split("T")[0]);
                                            }
                                        }}
                                        error={errors.checkIn?.message}
                                    />
                                )}
                            />

                            {/* Check-out — selectable 22–24 Sep (Sep 21 disabled) */}
                            <Controller
                                name="checkOut"
                                control={control}
                                render={({ field }) => (
                                    <DateField
                                        label="Check-out Date"
                                        value={field.value}
                                        min={(() => {
                                            const ci = watch("checkIn");
                                            const next = new Date(ci + "T00:00:00");
                                            next.setDate(next.getDate() + 1);
                                            const minDate = next.toISOString().split("T")[0];
                                            // Hard floor: checkout can never be earlier than Sep 22
                                            return minDate < "2026-09-22" ? "2026-09-22" : minDate;
                                        })()}
                                        max={DATE_MAX}
                                        onChange={field.onChange}
                                        error={errors.checkOut?.message}
                                    />
                                )}
                            />

                            {/* Nights badge */}
                            {nights > 0 && (
                                <div className="flex justify-end -mt-1">
                                    <span className="text-[10px] tracking-widest uppercase COLOR_TEXT_RED border border-[#e2d9c8] COLOR_BG_CREAM px-2.5 py-0.5 rounded-full">
                                        {nights} night{nights !== 1 ? "s" : ""}
                                    </span>
                                </div>
                            )}

                            {/* Number of Rooms */}
                            <div className="flex items-start justify-between gap-4">
                                <label className="text-xs tracking-widest text-[#7a6a55] uppercase w-36 shrink-0 pt-2">
                                    Number of Rooms
                                </label>
                                <div className="flex-1">
                                    <Controller
                                        name="rooms"
                                        control={control}
                                        render={({ field }) => (
                                            <div className="flex items-center justify-between border border-[#d8cdb8] bg-white px-3 py-2 rounded-sm">
                                                <button
                                                    type="button"
                                                    onClick={() => field.onChange(Math.max(1, field.value - 1))}
                                                    className="w-6 h-6 flex items-center justify-center COLOR_TEXT_RED hover:bg-[#f5ede0] rounded-sm transition-colors text-lg leading-none"
                                                >−</button>
                                                <span className="text-sm COLOR_TEXT_RED font-medium">{field.value}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => field.onChange(Math.min(20, field.value + 1))}
                                                    className="w-6 h-6 flex items-center justify-center COLOR_TEXT_RED hover:bg-[#f5ede0] rounded-sm transition-colors text-lg leading-none"
                                                >+</button>
                                            </div>
                                        )}
                                    />
                                    {errors.rooms && (
                                        <p className="text-[10px] text-red-500 mt-0.5">{errors.rooms.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Full Name */}
                            <div className="flex items-start justify-between gap-4">
                                <label className="text-xs tracking-widest text-[#7a6a55] uppercase w-36 shrink-0 pt-2">
                                    Full Name
                                </label>
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        placeholder="Your full name"
                                        {...register("name")}
                                        className="w-full border border-[#d8cdb8] bg-white px-3 py-2 rounded-sm text-sm COLOR_TEXT_RED placeholder-[#c0b49a] outline-none focus:border-[#b5924c] transition-colors"
                                    />
                                    {errors.name && (
                                        <p className="text-[10px] text-red-500 mt-0.5">{errors.name.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start justify-between gap-4">
                                <label className="text-xs tracking-widests text-[#7a6a55] uppercase w-36 shrink-0 pt-2">
                                    Email
                                </label>
                                <div className="flex-1">
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        {...register("email")}
                                        className="w-full border border-[#d8cdb8] bg-white px-3 py-2 rounded-sm text-sm COLOR_TEXT_RED placeholder-[#c0b49a] outline-none focus:border-[#b5924c] transition-colors"
                                    />
                                    {errors.email && (
                                        <p className="text-[10px] text-red-500 mt-0.5">{errors.email.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start justify-between gap-4">
                                <label className="text-xs tracking-widests text-[#7a6a55] uppercase w-36 shrink-0 pt-2">
                                    Phone
                                </label>
                                <div className="flex-1">
                                    <div className="flex border border-[#d8cdb8] bg-white rounded-sm overflow-hidden focus-within:border-[#b5924c] transition-colors">
                                        <span className="px-3 py-2 text-sm text-[#7a6a55] border-r border-[#d8cdb8] bg-[#f9f6f1]">+91</span>
                                        <input
                                            type="tel"
                                            placeholder="10-digit number"
                                            maxLength={10}
                                            {...register("phone")}
                                            className="flex-1 px-3 py-2 text-sm COLOR_TEXT_RED placeholder-[#c0b49a] outline-none bg-transparent"
                                        />
                                    </div>
                                    {errors.phone && (
                                        <p className="text-[10px] text-red-500 mt-0.5">{errors.phone.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Summary */}
                            <div className="mt-2 border border-[#e2d9c8] bg-[#f5f0e8] rounded-sm px-5 py-4">
                                <p className="text-sm COLOR_TEXT_RED font-medium tracking-wide">
                                    {rooms} Room{rooms > 1 ? "s" : ""} × {nights} Night{nights !== 1 ? "s" : ""}
                                </p>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-sm tracking-widest text-[#7a6a55] uppercase">Total:</span>
                                    <span
                                        className="text-2xl COLOR_TEXT_RED tabular-nums"
                                        style={{ fontFamily: "'Cormorant Garamond','Georgia',serif", fontWeight: 600 }}
                                    >
                                        {nights > 0 ? formatINR(total) : "—"}
                                    </span>
                                </div>
                            </div>

                            {/* CTA */}
                            <button
                                type="submit"
                                disabled={isProcessing || !isValid || nights === 0}
                                className="mt-5 w-full py-3.5 bg-gradient-to-r from-[#b5924c] via-[#c9a55a] to-[#b5924c] text-white text-sm tracking-[0.2em] uppercase font-medium hover:from-[#a07d3a] hover:via-[#b5924c] hover:to-[#a07d3a] transition-all duration-300 shadow-[0_2px_16px_rgba(181,146,76,0.30)] rounded-sm disabled:opacity-40 disabled:cursor-not-allowed"
                            >
                                {isProcessing
                                    ? "Processing…"
                                    : nights > 0
                                        ? `Pay ${formatINR(total)}`
                                        : "Select dates to continue"}
                            </button>

                            {/* Payment icons */}
                            <div className="mt-4 flex items-center justify-center gap-3">
                                <span className="text-[10px] font-bold tracking-widest text-[#7a6a55] border border-[#d8cdb8] px-2 py-0.5 rounded-sm">UPI</span>
                                <span className="text-[11px] font-black italic text-[#1a1f6e] tracking-wider">VISA</span>
                                <div className="flex -space-x-1.5">
                                    <div className="w-5 h-5 rounded-full bg-[#eb001b] opacity-90" />
                                    <div className="w-5 h-5 rounded-full bg-[#f79e1b] opacity-90" />
                                </div>
                                <span className="text-[10px] font-bold tracking-wider COLOR_TEXT_RED border border-[#d8cdb8] px-2 py-0.5 rounded-sm">RuPay</span>
                            </div>

                            {/* Footer links */}
                            <div className="mt-6 flex items-center justify-center gap-4">
                                <div className="flex-1 h-px bg-[#e2d9c8]" />
                                <div className="flex gap-4">
                                    <a href="#" className="text-xs text-[#7a6a55] hover:COLOR_TEXT_RED transition-colors tracking-wide underline underline-offset-2 decoration-[#d8cdb8]">
                                        Cancellation Policy
                                    </a>
                                    <span className="text-[#d8cdb8]">·</span>
                                    <a href="#" className="text-xs text-[#7a6a55] hover:COLOR_TEXT_RED transition-colors tracking-wide underline underline-offset-2 decoration-[#d8cdb8]">
                                        Terms & Conditions
                                    </a>
                                </div>
                                <div className="flex-1 h-px bg-[#e2d9c8]" />
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </>
    );
}

/* ── Sub-components ───────────────────────────────────────────── */
function MetaRow({ label, value }) {
    return (
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 COLOR_TEXT_CREAM">
            <span className="text-xs sm:text-sm COLOR_TEXT_CREAM tracking-widest uppercase shrink-0 Font_Q">
                {label}:
            </span>
            <span className="text-sm sm:text-base COLOR_TEXT_CREAM Font_YV">{value}</span>
        </div>
    );
}

function ContactRow({ icon, text }) {
    return (
        <div className="flex items-center gap-3 Font_YV">
            <div className="w-7 h-7 rounded-full border border-[#e2d9c8] bg-[#faf7f2] COLOR_TEXT_CREAM flex items-center justify-center shrink-0">
                {icon === "email" ? (
                    <svg className="w-3.5 h-3.5 COLOR_TEXT_RED" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth="1.5" />
                        <path d="M2 7l10 7 10-7" strokeWidth="1.5" />
                    </svg>
                ) : (
                    <svg className="w-3.5 h-3.5 COLOR_TEXT_RED" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.08 1.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeWidth="1.5" />
                    </svg>
                )}
            </div>
            <span className="text-xs sm:text-sm tracking-wide COLOR_TEXT_CREAM">{text}</span>
        </div>
    );
}