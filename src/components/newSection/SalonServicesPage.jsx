"use client";
import { useState, useEffect, useRef } from "react";

// ── COLORS ────────────────────────────────────────────────────────────────
const ACCENT = "#173e3d"; // dark green (kept as main accent)
const BG = "#fff9ed";    // very soft cream (instead of yellow)
const DARK = "#1a1614";   // deep brown / near‑black
const LIGHT = "#f0f0f0"; // soft light gray for backgrounds

// ── OPTIONS ───────────────────────────────────────────────────────────────
const HOTELS = [
  "Hotel Lungarno",
  "Portrait Firenze",
  "The St. Regis Florence",
  "The Excelsior, Florence",
  "Palazzo Ottaviani Apartments",
  "Other",
];

const DATES = [
  "17th September, 2026",
  "18th September, 2026",
  "19th September, 2026",
];

const SERVICES = ["Hair Style", "Make-Up", "Saree Draping"];

// Steps: 0=personal+stay, 1=services, 2=details, 3=review
const TOTAL_STEPS = 4;

export default function SalonServicesPage() {
  const headerRef = useRef(null);
  const formRef = useRef(null);

  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    contact: "",
    hotel: "",
    dates: [],
    services: [],
    hairLength: "",
    hairExtensions: "",
    makeupBrief: "",
    makeupRefs: [],
    lashes: "",
    readyTime: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [dragOver, setDragOver] = useState(false);

  // GSAP intro animations
  useEffect(() => {
    import("gsap").then(({ gsap }) => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.querySelectorAll(".hdr-anim"),
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.12, duration: 1.1, ease: "power3.out", delay: 0.2 }
        );
      }
      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.5 }
        );
      }
    });
  }, []);

  // GSAP slide‑in for each step body
  useEffect(() => {
    if (formRef.current) {
      import("gsap").then(({ gsap }) => {
        gsap.fromTo(
          formRef.current.querySelector(".step-body"),
          { x: 30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
        );
      });
    }
  }, [step]);

  const set = (key, val) => setForm((f) => ({ ...f, [key]: val }));
  const toggleArr = (key, val) => {
    setForm((f) => {
      const arr = f[key];
      return { ...f, [key]: arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val] };
    });
  };

  const needsHair = form.services.includes("Hair Style");
  const needsMakeup = form.services.includes("Make-Up");

  const validate = () => {
    const e = {};
    if (step === 0) {
      if (!form.fullName.trim()) e.fullName = "Required";
      if (!form.contact.trim()) e.contact = "Required";
      if (!form.hotel) e.hotel = "Please select a hotel";
      if (!form.dates.length) e.dates = "Select at least one date";
    }
    if (step === 1) {
      if (!form.services.length) e.services = "Select at least one service";
    }
    if (step === 2) {
      if (needsHair && !form.hairLength) e.hairLength = "Required";
      if (needsHair && !form.hairExtensions) e.hairExtensions = "Required";
      if (needsMakeup && !form.makeupBrief.trim()) e.makeupBrief = "Required";
      if (needsMakeup && !form.lashes) e.lashes = "Required";
      if (!form.readyTime.trim()) e.readyTime = "Required";
    }
    setErrors(e);
    return !Object.keys(e).length;
  };

  const next = () => {
    if (validate()) setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  };
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const handleFileChange = (files) => {
    set("makeupRefs", Array.from(files).slice(0, 5));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const progress = ((step + 1) / TOTAL_STEPS) * 100;

  const stepLabels = ["1. Personal & Stay", "2. Services", "3. Details", "4. Review"];

  return (
    <div
      className="pt-[15vh]"
      style={{
        backgroundColor: BG,
        minHeight: "100vh",
        fontFamily: "'Jost', sans-serif",
        color: ACCENT,
        overflowX: "hidden",
      }}
    >
      {/* ── DECORATIVE BACKGROUND PATTERN ── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage: `
            radial-gradient(circle at 15% 50%, rgba(23,62,61,0.02) 0%, transparent 50%),
            radial-gradient(circle at 85% 20%, rgba(23,62,61,0.02) 0%, transparent 40%)
          `,
        }}
      />

      {/* ── HEADER ── */}
      <header
        ref={headerRef}
        style={{
          position: "relative",
          zIndex: 1,
          padding: "60px 20px 50px",
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          className="hdr-anim Font_Q"
          style={{
            fontSize: "clamp(36px, 8vw, 100px)",
            fontWeight: 300,
            lineHeight: 0.92,
            margin: 0,
            color: ACCENT,
          }}
        >
          Salon Services
        </h1>
        <p
          className="hdr-anim Font_YV"
          style={{
            marginTop: 10,
            fontSize: "clamp(14px, 1.5vw, 18px)",
            fontWeight: 300,
            color: ACCENT,
            opacity: 0.6,
            lineHeight: 1.6,
            maxWidth: 600,
            margin: "20px auto 0",
            padding: "0 10px",
          }}
        >
          Reserve your hair, make-up, and styling appointments for the celebration. Please complete the form
          below and our team will be in touch.
        </p>
      </header>

      {/* ── FORM CONTAINER ── */}
      {!submitted ? (
        <div
          ref={formRef}
          style={{
            maxWidth: 720,
            margin: "0 auto 80px",
            padding: "0 16px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* ── STEP INDICATORS ── */}
          <div style={{ marginBottom: 36, overflowX: "auto", paddingBottom: 10 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 12,
                position: "relative",
                minWidth: "max-content",
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  right: 0,
                  height: 1,
                  backgroundColor: `rgba(23,62,61,0.15)`,
                  transform: "translateY(-50%)",
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  width: `${progress}%`,
                  height: 1,
                  backgroundColor: ACCENT,
                  transform: "translateY(-50%)",
                  zIndex: 0,
                  transition: "width 0.5s ease",
                }}
              />
              {stepLabels.map((label, i) => (
                <div
                  className="mb-4"
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6,
                    zIndex: 1,
                    minWidth: "80px",
                    flexShrink: 0,
                  }}
                >
                  <span
                    className="Font_Q mt-0 mb-2 font-medium"
                    style={{
                      fontSize: "clamp(10px, 2vw, 16px)",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      opacity: i === step ? 1 : 0.35,
                      transition: "opacity 0.3s",
                      whiteSpace: "nowrap",
                      textAlign: "center",
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── FORM CARD ── */}
          <div style={{ padding: "clamp(24px, 5vw, 56px)" }}>
            <div className="step-body">
              {/* ── STEP 0: Personal + Stay ── */}
              {step === 0 && (
                <div>
                  <StepHeading title="Personal & Stay" subtitle="Tell us about you and your visit" />

                  {/* Name + Contact */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                      gap: 20,
                      marginBottom: 28,
                    }}
                  >
                    <Field label="Full Name" error={errors.fullName}>
                      <Input
                        placeholder="Your full name"
                        value={form.fullName}
                        onChange={(v) => set("fullName", v)}
                      />
                    </Field>
                    <Field
                      label="Email ID or Contact"
                      error={errors.contact}
                      // note="e.g. email or phone"
                    >
                      <Input placeholder="email or phone" value={form.contact} onChange={(v) => set("contact", v)} />
                    </Field>
                  </div>

                  {/* Hotel */}
                  <div style={{ marginBottom: 24 }}>
                    <Field label="Which hotel will you be staying at?" error={errors.hotel}>
                      <Select
                        value={form.hotel}
                        onChange={(v) => set("hotel", v)}
                        options={HOTELS}
                        placeholder="Select your hotel"
                      />
                    </Field>
                  </div>

                  {/* Dates */}
                  <Field
                    label="Date of Service"
                    note={
                      <span
                        style={{
                          fontSize: "clamp(12px, 2vw, 13px)",
                          fontWeight: 400,
                          letterSpacing: "0.05em",
                          color: ACCENT,
                        }}
                      >
                        Multiple dates allowed
                      </span>
                    }
                    error={errors.dates}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
                        gap: 12,
                        marginTop: 8,
                      }}
                    >
                      {DATES.map((d) => {
                        const parts = d.split(" ");
                        const day = parts[0];
                        const month = parts[1]?.replace(",", "");
                        const selected = form.dates.includes(d);
                        return (
                          <button
                            key={d}
                            onClick={() => toggleArr("dates", d)}
                            style={{
                              padding: "18px 8px",
                              border: `1px solid ${ACCENT}`,
                              borderRadius: 8,
                              backgroundColor: selected ? ACCENT : "transparent",
                              color: selected ? BG : ACCENT,
                              cursor: "pointer",
                              transition: "all 0.25s ease",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: 4,
                              minHeight: "80px",
                              boxShadow: selected
                                ? `0 2px 6px rgba(23,62,61,0.2)`
                                : "0 1px 3px rgba(23,62,61,0.05)",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = "translateY(-2px)";
                              e.currentTarget.style.boxShadow = `0 4px 10px rgba(23,62,61,0.15)`;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = "translateY(0)";
                              e.currentTarget.style.boxShadow = selected
                                ? `0 2px 6px rgba(23,62,61,0.2)`
                                : "0 1px 3px rgba(23,62,61,0.05)";
                            }}
                          >
                            <span
                              className="Font_Q"
                              style={{
                                fontSize: "clamp(22px, 4vw, 30px)",
                                fontWeight: 300,
                                // fontStyle: "italic",
                                // lineHeight: 1,
                              }}
                            >
                              {day}
                            </span>
                            {/* <span
                              className="Font_YV"
                              style={{
                                fontSize: "clamp(8px, 1.5vw, 10px)",
                                letterSpacing: "0.35em",
                                textTransform: "uppercase",
                                opacity: selected ? 0.75 : 0.4,
                              }}
                            >
                              {month}
                            </span> */}
                          </button>
                        );
                      })}
                    </div>
                  </Field>
                </div>
              )}

              {/* ── STEP 1: Services ── */}
              {step === 1 && (
                <div>
                  <StepHeading num="02" title="Services" subtitle="Select all that apply" />
                  <Field
                    label="Nature of Service"
                    note={
                      <span
                        style={{
                          fontSize: "clamp(12px, 2vw, 13px)",
                          fontWeight: 400,
                          letterSpacing: "0.05em",
                          color: ACCENT,
                        }}
                      >
                        Multiple selections allowed
                      </span>
                    }
                    error={errors.services}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                        gap: 14,
                        marginTop: 8,
                      }}
                    >
                      {SERVICES.map((s) => (
                        <ServiceCard
                          key={s}
                          label={s}
                          selected={form.services.includes(s)}
                          onToggle={() => toggleArr("services", s)}
                        />
                      ))}
                    </div>
                  </Field>
                </div>
              )}

              {/* ── STEP 2: Details ── */}
              {step === 2 && (
                <div>
                  <StepHeading num="03" title="Details" subtitle="Help us prepare the perfect look" />

                  {needsHair && (
                    <div style={{ marginBottom: 32 }}>
                      {/* <SectionRule label="Hair Style" /> */}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                          gap: 20,
                          marginTop: 20,
                        }}
                      >
                        <Field
                          label="Hair Length"
                          error={errors.hairLength}
                          note={
                            <span
                              style={{
                                fontSize: "clamp(12px, 2vw, 13px)",
                                fontWeight: 400,
                                color: ACCENT,
                              }}
                            >
                              Required
                            </span>
                          }
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 8,
                            }}
                          >
                            {["Short", "Medium", "Long"].map((l) => (
                              <RadioPill
                                key={l}
                                label={l}
                                selected={form.hairLength === l}
                                onSelect={() => set("hairLength", l)}
                                block
                              />
                            ))}
                          </div>
                        </Field>
                        <Field
                          label="Hair Extensions?"
                          error={errors.hairExtensions}
                          note={
                            <span
                              style={{
                                fontSize: "clamp(12px, 2vw, 13px)",
                                fontWeight: 400,
                                color: ACCENT,
                              }}
                            >
                              Required
                            </span>
                          }
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 8,
                            }}
                          >
                            {["Yes", "No"].map((v) => (
                              <RadioPill
                                key={v}
                                label={v}
                                selected={form.hairExtensions === v}
                                onSelect={() => set("hairExtensions", v)}
                                block
                              />
                            ))}
                          </div>
                        </Field>
                      </div>
                    </div>
                  )}

                  {needsMakeup && (
                    <div style={{ marginBottom: 32 }}>
                      {/* <SectionRule label="Make-Up" /> */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 20,
                          marginTop: 20,
                        }}
                      >
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                            gap: 20,
                            alignItems: "start",
                          }}
                        >
                          <Field
                            label="Makeup Brief"
                            
                            error={errors.makeupBrief}
                          >
                            <Textarea
                              placeholder="Describe your desired look..."
                              value={form.makeupBrief}
                              onChange={(v) => set("makeupBrief", v)}
                              rows={3}
                            />
                          </Field>
                          <Field
                            label="Add Lashes?"
                            error={errors.lashes}
                            note={
                              <span
                                style={{
                                  fontSize: "clamp(12px, 2vw, 13px)",
                                  fontWeight: 400,
                                  color: ACCENT,
                                }}
                              >
                                Required
                              </span>
                            }
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 8,
                              }}
                            >
                              {["Yes", "No"].map((v) => (
                                <RadioPill
                                  key={v}
                                  label={v}
                                  selected={form.lashes === v}
                                  onSelect={() => set("lashes", v)}
                                  block
                                />
                              ))}
                            </div>
                          </Field>
                        </div>

                        <Field
                          label="Upload Makeup References"
                          note={
                            <span
                              style={{
                                fontSize: "clamp(12px, 2vw, 13px)",
                                fontWeight: 400,
                                color: ACCENT,
                              }}
                            >
                              Up to 5 images – drag & drop or click
                            </span>
                          }
                        >
                          <div
                            onDragOver={(e) => {
                              e.preventDefault();
                              setDragOver(true);
                            }}
                            onDragLeave={() => setDragOver(false)}
                            onDrop={(e) => {
                              e.preventDefault();
                              setDragOver(false);
                              handleFileChange(e.dataTransfer.files);
                            }}
                            onClick={() => document.getElementById("makeup-upload").click()}
                            style={{
                              border: `1px dashed ${ACCENT}`,
                              borderRadius: 8,
                              padding: "24px 16px",
                              textAlign: "center",
                              cursor: "pointer",
                              backgroundColor: dragOver ? `rgba(23,62,61,0.05)` : "transparent",
                              transition: "all 0.3s",
                              boxShadow: dragOver
                                ? `0 2px 8px rgba(23,62,61,0.12)`
                                : "0 1px 3px rgba(23,62,61,0.05)",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = "translateY(-1px)";
                              e.currentTarget.style.boxShadow = "0 3px 12px rgba(23,62,61,0.16)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = "translateY(0)";
                              e.currentTarget.style.boxShadow = dragOver
                                ? "0 2px 8px rgba(23,62,61,0.12)"
                                : "0 1px 3px rgba(23,62,61,0.05)";
                            }}
                          >
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke={ACCENT}
                              strokeWidth="1.2"
                              style={{ opacity: 0.4, margin: "0 auto 10px", display: "block" }}
                            >
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                              <polyline points="17 8 12 3 7 8" />
                              <line x1="12" y1="3" x2="12" y2="15" />
                            </svg>
                            <p
                              className="Font_YV"
                              style={{
                                fontSize: "clamp(12px, 1.5vw, 14px)",
                                opacity: 0.6,
                                margin: 0,
                              }}
                            >
                              {form.makeupRefs.length > 0
                                ? `${form.makeupRefs.length} file(s) selected`
                                : "Drag & drop or click to upload"}
                            </p>
                            <input
                              id="makeup-upload"
                              type="file"
                              multiple
                              accept="image/*"
                              style={{ display: "none" }}
                              onChange={(e) => handleFileChange(e.target.files)}
                            />
                          </div>
                          {form.makeupRefs.length > 0 && (
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 8,
                                marginTop: 10,
                              }}
                            >
                              {form.makeupRefs.map((f, i) => (
                                <span
                                  key={i}
                                  style={{
                                    fontSize: "clamp(12px, 2vw, 14px)",
                                    padding: "4px 10px",
                                    border: `1px solid ${ACCENT}`,
                                    borderRadius: 6,
                                    color: ACCENT,
                                    opacity: 0.7,
                                  }}
                                >
                                  {f.name}
                                </span>
                              ))}
                            </div>
                          )}
                        </Field>
                      </div>
                    </div>
                  )}

                  {/* Ready time + Notes */}
                  <div>
                    {/* <SectionRule label="Timing & Notes" /> */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                        gap: 20,
                        marginTop: 20,
                      }}
                    >
                      <Field
                        label="What is your ready time?"
                        error={errors.readyTime}
                        // note={
                        //   <span
                        //     style={{
                        //       fontSize: "clamp(12px, 2vw, 13px)",
                        //       fontWeight: 400,
                        //       color: ACCENT,
                        //     }}
                        //   >
                        //     e.g. 4:00 PM
                        //   </span>
                        // }
                      >
                        <Input
                          placeholder="e.g. 4:00 PM"
                          value={form.readyTime}
                          onChange={(v) => set("readyTime", v)}
                        />
                      </Field>
                      <Field
                        label="Further Notes"
                        // note={
                        //   <span
                        //     style={{
                        //       fontSize: "clamp(12px, 2vw, 13px)",
                        //       fontWeight: 400,
                        //       color: ACCENT,
                        //     }}
                        //   >
                        //     e.g. "Sensitive Skin"
                        //   </span>
                        // }
                      >
                        <Textarea
                          placeholder="Any additional notes..."
                          value={form.notes}
                          onChange={(v) => set("notes", v)}
                          rows={3}
                        />
                      </Field>
                    </div>
                  </div>
                </div>
              )}

              {/* ── STEP 3: Review ── */}
              {step === 3 && (
                <div>
                  <StepHeading num="04" title="Review" subtitle="Confirm your booking details" />
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                      border: `1px solid ${ACCENT}`,
                      borderRadius: 8,
                      overflow: "hidden",
                    }}
                  >
                    {[
                      ["Full Name", form.fullName],
                      ["Contact", form.contact],
                      ["Hotel", form.hotel],
                      ["Dates", form.dates.join(", ")],
                      ["Services", form.services.join(", ")],
                      ["Ready Time", form.readyTime],
                      ...(needsHair ? [["Hair Length", form.hairLength], ["Hair Extensions", form.hairExtensions]] : []),
                      ...(needsMakeup ? [["Makeup Brief", form.makeupBrief], ["Add Lashes", form.lashes]] : []),
                      ...(form.notes ? [["Notes", form.notes], ["", ""]] : []),
                    ].map(([k, v], i) => (
                      <div
                        key={i}
                        style={{
                          padding: "14px 16px",
                          borderBottom: i < 9 ? `1px solid rgba(23,62,61,0.12)` : "none",
                          borderRight: i % 2 === 0 ? `1px solid rgba(23,62,61,0.12)` : "none",
                          backgroundColor: i % 2 === 0 ? "rgba(23,62,61,0.015)" : "transparent",
                        }}
                      >
                        {k && (
                          <>
                            <p
                              className="Font_YV"
                              style={{
                                margin: "0 0 5px",
                                fontSize: "clamp(10px, 1.5vw, 14px)",
                                letterSpacing: "0.35em",
                                textTransform: "uppercase",
                                // opacity: 0.35,
                              }}
                            >
                              {k}
                            </p>
                            <p
                              className="Font_Q"
                              style={{
                                margin: 0,
                                fontSize: "clamp(16px, 3vw, 20px)",
                                fontWeight: 300,
                                fontStyle: "italic",
                                color: ACCENT,
                                lineHeight: 1.3,
                              }}
                            >
                              {v || "—"}
                            </p>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                  <p
                    className="Font_YV"
                    style={{
                      fontSize: "clamp(13px, 2vw, 18px)",
                      // opacity: 0.4,
                      marginTop: 24,
                      lineHeight: 1.7,
                      padding: "0 10px",
                    }}
                  >
                    Our salon team will confirm your appointments and reach out with any questions.
                  </p>
                </div>
              )}
            </div>

            {/* ── NAVIGATION BUTTONS ── */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 36,
                paddingTop: 24,
                borderTop: `1px solid rgba(23,62,61,0.15)`,
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              {step > 0 ? (
                <button
                  onClick={prev}
                  style={{
                    ...ghostBtnStyle,
                    flex: "1 1 auto",
                    minWidth: "120px",
                    maxWidth: "200px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-1px)";
                    e.currentTarget.style.boxShadow = "0 2px 6px rgba(23,62,61,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  ← Back
                </button>
              ) : (
                <div />
              )}
              {step < TOTAL_STEPS - 1 ? (
                <button
                  onClick={next}
                  style={{
                    ...solidBtnStyle,
                    flex: "1 1 auto",
                    minWidth: "140px",
                    maxWidth: "220px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-1px)";
                    e.currentTarget.style.boxShadow = "0 3px 10px rgba(23,62,61,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Continue →
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  style={{
                    ...solidBtnStyle,
                    flex: "1 1 auto",
                    minWidth: "160px",
                    maxWidth: "240px",
                    paddingLeft: 24,
                    paddingRight: 24,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-1px)";
                    e.currentTarget.style.boxShadow = "0 3px 10px rgba(23,62,61,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Submit Booking
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <SuccessScreen name={form.fullName} />
      )}

      <style jsx>{`
        * {
          box-sizing: border-box;
        }
        input::placeholder,
        textarea::placeholder {
          opacity: 0.9;
        }
        input:focus,
        textarea:focus,
        select:focus {
          outline: none;
          border-color: ${ACCENT} !important;
          box-shadow: 0 2px 6px rgba(23, 62, 61, 0.15);
        }
        button {
          outline: none;
        }
        @media (max-width: 600px) {
          .step-dots span {
            display: none;
          }
          body {
            overflow-x: hidden;
          }
          .step-indicator-scroll {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .step-indicator-scroll::-webkit-scrollbar {
            display: none;
          }
        }
        @media (max-width: 480px) {
          header {
            padding: 40px 16px 40px !important;
          }
        }
      `}</style>
    </div>
  );
}

// ── SMALL COMPONENTS ──────────────────────────────────────────────────────

function SectionRule({ label }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 0,
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          flex: 1,
          minHeight: "20px",
          height: 1,
          backgroundColor: ACCENT,
          opacity: 0.1,
        }}
      />
      <span
        className="Font_YV"
        style={{
          fontSize: "clamp(9px, 1.5vw, 10px)",
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          opacity: 0.3,
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
      <div
        style={{
          flex: 1,
          minHeight: "20px",
          height: 1,
          backgroundColor: ACCENT,
          opacity: 0.1,
        }}
      />
    </div>
  );
}

function StepHeading({ num, title, subtitle }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h2
        className="Font_Q"
        style={{
          fontSize: "clamp(24px, 5vw, 42px)",
          fontWeight: 300,
          margin: "0 0 6px",
          color: ACCENT,
        }}
      >
        {num && (
          <span
            style={{
              fontSize: "clamp(16px, 3vw, 24px)",
              opacity: 0.4,
              marginRight: 8,
            }}
          >
            {num}.
          </span>
        )}
        {title}
      </h2>
      <p
        className="Font_YV"
        style={{
          fontSize: "clamp(13px, 2vw, 18px)",
          margin: 0,
          fontWeight: 300,
        }}
      >
        {subtitle}
      </p>
    </div>
  );
}

function Field({ label, children, note, error }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 8,
          marginBottom: 8,
          flexWrap: "wrap",
        }}
      >
        <label
          className="Font_YV"
          style={{
            fontSize: "clamp(12px, 2vw, 14px)",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: ACCENT,
            fontWeight: 700,
          }}
        >
          {label}
        </label>
        {note && (
          <span
            style={{
              fontSize: "clamp(12px, 2vw, 13px)",
              color: ACCENT,
              opacity: 0.65,
              fontWeight: 300,
              fontStyle: "normal",
              letterSpacing: "0.05em",
            }}
          >
            {note}
          </span>
        )}
      </div>
      {children}
      {error && (
        <p
          style={{
            fontSize: "clamp(12px, 2vw, 14px)",
            color: ACCENT,
            opacity: 0.7,
            marginTop: 6,
            fontStyle: "italic",
          }}
        >
          ↑ {error}
        </p>
      )}
    </div>
  );
}

function Input({ placeholder, value, onChange }) {
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="Font_YV"
      style={{
        width: "100%",
        padding: "14px 14px",
        borderBottom: `2px solid rgba(23,62,61,0.3)`,
        color: ACCENT,
        fontSize: "clamp(14px, 3vw, 16px)",
        fontFamily: "'Jost', sans-serif",
        fontWeight: 300,
        transition: "all 0.3s",
        borderRadius: 0,
        backgroundColor: "transparent",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = ACCENT;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(23,62,61,0.3)";
      }}
    />
  );
}

function Textarea({ placeholder, value, onChange, rows = 4 }) {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      rows={rows}
      onChange={(e) => onChange(e.target.value)}
      className="Font_YV"
      style={{
        width: "100%",
        padding: "12px 0",
        resize: "vertical",
        backgroundColor: "transparent",
        borderBottom: `2px solid rgba(23,62,61,0.3)`,
        color: ACCENT,
        fontSize: "clamp(14px, 3vw, 16px)",
        fontFamily: "'Jost', sans-serif",
        fontWeight: 300,
        transition: "all 0.3s",
        borderRadius: 0,
        minHeight: "80px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = ACCENT;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(23,62,61,0.3)";
      }}
    />
  );
}

function Select({ value, onChange, options, placeholder }) {
  return (
    <div style={{ position: "relative" }}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="Font_YV"
        style={{
          width: "100%",
          padding: "12px 40px 12px 0",
          backgroundColor: "transparent",
          borderBottom: `2px solid rgba(23,62,61,0.3)`,
          color: value ? ACCENT : "rgba(23,62,61,0.35)",
          fontSize: "clamp(14px, 3vw, 16px)",
          fontFamily: "'Jost', sans-serif",
          fontWeight: 300,
          appearance: "none",
          cursor: "pointer",
          transition: "all 0.3s",
          borderRadius: 0,
          minHeight: "46px",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = ACCENT;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(23,62,61,0.3)";
        }}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <svg
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
          opacity: 0.4,
        }}
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
      >
        <path
          d="M2 4l4 4 4-4"
          stroke={ACCENT}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function RadioPill({ label, selected, onSelect, block }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="Font_YV"
      style={{
        padding: "10px 16px",
        width: block ? "100%" : "auto",
        textAlign: block ? "left" : "center",
        border: `1px solid ${ACCENT}`,
        borderRadius: 8,
        backgroundColor: selected ? ACCENT : hovered ? "rgba(23,62,61,0.04)" : "transparent",
        color: selected ? BG : ACCENT,
        fontSize: "clamp(13px, 2.5vw, 14px)",
        fontFamily: "'Jost', sans-serif",
        cursor: "pointer",
        fontWeight: selected ? 400 : 300,
        transition: "all 0.25s ease",
        minHeight: "42px",
        boxShadow: hovered
          ? "0 2px 6px rgba(23,62,61,0.12)"
          : "0 1px 3px rgba(23,62,61,0.05)",
      }}
    >
      {label}
    </button>
  );
}

function ServiceCard({ label, selected, onToggle }) {
  const [hovered, setHovered] = useState(false);
  const icons = {
    "Hair Style": (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M12 2C8 2 5 5 5 9c0 3 1.5 5.5 4 7l1 6h4l1-6c2.5-1.5 4-4 4-7 0-4-3-7-7-7z" />
      </svg>
    ),
    "Make-Up": (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="9" />
        <line x1="12" y1="3" x2="12" y2="1" />
        <line x1="12" y1="23" x2="12" y2="21" />
      </svg>
    ),
    "Saree Draping": (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M6 3c0 0 2 2 2 6s-2 6-2 9M18 3c0 0-2 2-2 6s2 6 2 9M9 3c0 3 3 5 3 9s-3 6-3 9M15 3c0 3-3 5-3 9s3 6 3 9" />
      </svg>
    ),
  };
  return (
    <button
      onClick={onToggle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "20px 12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
        border: `1px solid ${ACCENT}`,
        borderRadius: 10,
        backgroundColor: selected ? ACCENT : hovered ? "rgba(23,62,61,0.04)" : "transparent",
        color: selected ? BG : ACCENT,
        cursor: "pointer",
        transition: "all 0.3s ease",
        minHeight: "120px",
        boxShadow: hovered
          ? "0 3px 10px rgba(23,62,61,0.16)"
          : "0 1px 3px rgba(23,62,61,0.08)",
      }}
    >
      <div
        style={{
          opacity: selected ? 0.9 : 0.5,
          transition: "opacity 0.3s",
        }}
      >
        {icons[label]}
      </div>
      <span
        className="Font_YV"
        style={{
          fontSize: "clamp(11px, 2vw, 14px)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          fontWeight: 400,
          textAlign: "center",
          lineHeight: 1.3,
        }}
      >
        {label}
      </span>
    </button>
  );
}

function SuccessScreen({ name }) {
  const ref = useRef(null);
  useEffect(() => {
    import("gsap").then(({ gsap }) => {
      gsap.fromTo(
        ref.current,
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    });
  }, []);

  return (
    <div
      ref={ref}
      style={{
        maxWidth: 560,
        margin: "40px auto 80px",
        padding: "0 20px",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          width: "clamp(50px, 10vw, 64px)",
          height: "clamp(50px, 10vw, 64px)",
          border: `1px solid ${ACCENT}`,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 28px",
        }}
      >
        <svg
          width="clamp(20px, 4vw, 24px)"
          height="clamp(20px, 4vw, 24px)"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5 12l5 5L19 7"
            stroke={ACCENT}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h2
        className="Font_Q"
        style={{
          fontSize: "clamp(26px, 7vw, 56px)",
          fontWeight: 300,
          fontStyle: "italic",
          color: ACCENT,
          margin: "0 0 14px",
          lineHeight: 1.2,
        }}
      >
        All set,<br />
        {name || "dear guest"}.
      </h2>
      <p
        className="Font_YV"
        style={{
          fontSize: "clamp(16px, 2.5vw, 18px)",
          color: ACCENT,
          // opacity: 0.55,
          lineHeight: 1.8,
          fontWeight: 300,
          padding: "0 10px",
        }}
      >
        Your salon booking request has been received. Our team will be in touch to confirm your appointments.
      </p>
      {/* <div
        style={{
          marginTop: 32,
          width: 1,
          height: "clamp(40px, 8vw, 60px)",
          backgroundColor: ACCENT,
          opacity: 0.2,
          margin: "32px auto 0",
        }}
      /> */}
    </div>
  );
}

const solidBtnStyle = {
  padding: "12px 24px",
  backgroundColor: ACCENT,
  color: BG,
  border: `1px solid ${ACCENT}`,
  borderRadius: 8,
  fontSize: "clamp(12px, 2vw, 14px)",
  letterSpacing: "0.3em",
  textTransform: "uppercase",
  cursor: "pointer",
  fontFamily: "'Jost', sans-serif",
  fontWeight: 400,
  transition: "all 0.3s ease",
  boxShadow: "0 2px 6px rgba(23,62,61,0.12)",
};

const ghostBtnStyle = {
  padding: "12px 20px",
  backgroundColor: "transparent",
  color: ACCENT,
  border: `1px solid ${ACCENT}`,
  borderRadius: 8,
  fontSize: "clamp(12px, 2vw, 14px)",
  letterSpacing: "0.3em",
  textTransform: "uppercase",
  cursor: "pointer",
  fontFamily: "'Jost', sans-serif",
  fontWeight: 300,
  transition: "all 0.3s ease",
  boxShadow: "0 1px 3px rgba(23,62,61,0.08)",
};