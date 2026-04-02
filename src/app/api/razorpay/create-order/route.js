import Razorpay from "razorpay";
import { NextResponse } from "next/server";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  key_secret: process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET,
});

export async function POST(request) {
  try {
    const body = await request.json();
    const { amount, bookingDetails } = body;

    // Validate amount
    if (!amount || typeof amount !== "number" || amount <= 0) {
      return NextResponse.json(
        { success: false, error: "Invalid amount" },
        { status: 400 }
      );
    }

    // Validate booking details
    const { checkIn, checkOut, rooms, nights, name, email, phone } = bookingDetails || {};
    if (!checkIn || !checkOut || !rooms || !nights || !name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: "Missing booking details" },
        { status: 400 }
      );
    }

    // Create Razorpay order
    const order = await razorpay.orders.create({
      amount: amount, // already in paise
      currency: "INR",
      receipt: `booking_${Date.now()}`,
      notes: {
        checkIn,
        checkOut,
        rooms: String(rooms),
        nights: String(nights),
        guestName: name,
        guestEmail: email,
        guestPhone: phone,
      },
    });

    return NextResponse.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      receipt: order.receipt,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to create order. Please try again." },
      { status: 500 }
    );
  }
}
