"use client";
import { useState, useEffect, useRef } from "react";

// ─── REQUIRED SETUP ──────────────────────────────────────────────────────────
// npm install gsap
// In your globals.css or tailwind config, register these font classes:
//   .Font_Q  → your heading font (e.g. Cormorant Garamond or similar)
//   .Font_YV → your body/paragraph font
// Add to layout.js <head>:
// <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap" rel="stylesheet" />
// ─────────────────────────────────────────────────────────────────────────────

const ACCENT = "#C53D2E";
const BG = "#F6F5F1";
const DARK = "#1a1614";

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

// Steps: 0=personal, 1=stay, 2=services, 3=details, 4=confirm
const TOTAL_STEPS = 5;

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

  useEffect(() => {
    import("gsap").then(({ gsap }) => {
      // Header entrance
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.querySelectorAll(".hdr-anim"),
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.12, duration: 1.1, ease: "power3.out", delay: 0.2 }
        );
      }
      // Form card entrance
      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.5 }
        );
      }
    });
  }, []);

  // Animate step transition
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

  // Validation per step
  const validate = () => {
    const e = {};
    if (step === 0) {
      if (!form.fullName.trim()) e.fullName = "Required";
      if (!form.contact.trim()) e.contact = "Required";
    }
    if (step === 1) {
      if (!form.hotel) e.hotel = "Please select a hotel";
      if (!form.dates.length) e.dates = "Select at least one date";
    }
    if (step === 2) {
      if (!form.services.length) e.services = "Select at least one service";
    }
    if (step === 3) {
      if (needsHair && !form.hairLength) e.hairLength = "Required";
      if (needsHair && !form.hairExtensions) e.hairExtensions = "Required";
      if (needsMakeup && !form.makeupBrief.trim()) e.makeupBrief = "Required";
      if (needsMakeup && !form.lashes) e.lashes = "Required";
      if (!form.readyTime.trim()) e.readyTime = "Required";
    }
    setErrors(e);
    return !Object.keys(e).length;
  };

  const next = () => { if (validate()) setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1)); };
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const handleFileChange = (files) => {
    const arr = Array.from(files).slice(0, 5);
    set("makeupRefs", arr);
  };

  const handleSubmit = () => { setSubmitted(true); };

  const progress = ((step + 1) / TOTAL_STEPS) * 100;

  const stepLabels = ["Personal", "Stay & Dates", "Services", "Details", "Review"];

  return (
    <div className="pt-[15vh]" style={{ backgroundColor: BG, minHeight: "100vh", fontFamily: "'Jost', sans-serif", color: ACCENT, overflowX: "hidden" }}>

      {/* ── DECORATIVE BACKGROUND PATTERN ── */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `radial-gradient(circle at 15% 50%, rgba(197,61,46,0.04) 0%, transparent 50%),
          radial-gradient(circle at 85% 20%, rgba(197,61,46,0.04) 0%, transparent 40%)`,
      }} />

      {/* ── HEADER ── */}
      <header ref={headerRef} style={{
        position: "relative", zIndex: 1,
        padding: "80px 32px 60px",
        maxWidth: 900, margin: "0 auto",
        textAlign: "center",
      }}>
        <div className="hdr-anim" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 24 }}>
          <div style={{ width: 40, height: 1, backgroundColor: ACCENT, opacity: 0.3 }} />
          <span className="Font_YV" style={{ fontSize: 10, letterSpacing: "0.45em", textTransform: "uppercase", color: ACCENT, opacity: 0.5 }}>
            Dylan &amp; Misha · September 2026
          </span>
          <div style={{ width: 40, height: 1, backgroundColor: ACCENT, opacity: 0.3 }} />
        </div>

        <h1 className="hdr-anim Font_Q" style={{
          fontSize: "clamp(48px, 9vw, 100px)", fontWeight: 300,
          lineHeight: 0.92, margin: 0, color: ACCENT,
        }}>
          Salon
          <br />
          Services
        </h1>

        <p className="hdr-anim Font_YV" style={{
          marginTop: 28, fontSize: "clamp(13px, 1.6vw, 15px)", fontWeight: 300,
          color: ACCENT, opacity: 0.6, lineHeight: 1.8, maxWidth: 480, margin: "24px auto 0",
        }}>
          Reserve your hair, make-up, and styling appointments for the celebration. Please complete the form below and our team will be in touch.
        </p>
      </header>

      {/* ── FORM CONTAINER ── */}
      {!submitted ? (
        <div ref={formRef} style={{ maxWidth: 720, margin: "0 auto 120px", padding: "0 24px", position: "relative", zIndex: 1 }}>

          {/* Progress Bar */}
          <div style={{ marginBottom: 48 }}>
            {/* Step dots */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, position: "relative" }}>
              {/* Line behind dots */}
              <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 1, backgroundColor: `rgba(197,61,46,0.15)`, transform: "translateY(-50%)", zIndex: 0 }} />
              <div style={{ position: "absolute", top: "50%", left: 0, width: `${progress}%`, height: 1, backgroundColor: ACCENT,  transform: "translateY(-50%)", zIndex: 0, transition: "width 0.5s ease" }} />
              {stepLabels.map((label, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, zIndex: 1 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: "50%",
                    backgroundColor: i <= step ? ACCENT : BG,
                    border: `1px solid ${i <= step ? ACCENT : "rgba(197,61,46,0.25)"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.4s ease",
                    fontSize: 11, fontWeight: 500,
                    color: i <= step ? BG : ACCENT,
                    opacity: i <= step ? 1 : 0.5,
                  }}>
                    {i < step ? "✓" : i + 1}
                  </div>
                  <span className="Font_YV" style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", opacity: i === step ? 0.9 : 0.35, transition: "opacity 0.3s", whiteSpace: "nowrap" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <div style={{
            backgroundColor: "#fff",
            border: `1px solid rgba(197,61,46,0.12)`,
            padding: "clamp(32px, 6vw, 56px)",
            boxShadow: "0 20px 80px rgba(197,61,46,0.06)",
          }}>
            <div className="step-body">

              {/* ── STEP 0: Personal ── */}
              {step === 0 && (
                <div>
                  <StepHeading num="01" title="Personal" subtitle="Let us know who you are" />
                  <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                    <Field label="Full Name" error={errors.fullName}>
                      <Input placeholder="Your full name" value={form.fullName} onChange={(v) => set("fullName", v)} />
                    </Field>
                    <Field label="Email ID or Contact Number" error={errors.contact}>
                      <Input placeholder="email@example.com or +1 234 567 8900" value={form.contact} onChange={(v) => set("contact", v)} />
                    </Field>
                  </div>
                </div>
              )}

              {/* ── STEP 1: Stay & Dates ── */}
              {step === 1 && (
                <div>
                  <StepHeading num="02" title="Your Stay" subtitle="Hotel and preferred service dates" />
                  <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                    <Field label="Which hotel will you be staying at?" error={errors.hotel}>
                      <Select value={form.hotel} onChange={(v) => set("hotel", v)} options={HOTELS} placeholder="Select your hotel" />
                    </Field>
                    <Field label="Date of Service" note="Multiple dates allowed" error={errors.dates}>
                      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {DATES.map((d) => (
                          <CheckPill key={d} label={d} selected={form.dates.includes(d)} onToggle={() => toggleArr("dates", d)} />
                        ))}
                      </div>
                    </Field>
                  </div>
                </div>
              )}

              {/* ── STEP 2: Services ── */}
              {step === 2 && (
                <div>
                  <StepHeading num="03" title="Services" subtitle="Select all that apply" />
                  <Field label="Nature of Service" note="Multiple selections allowed" error={errors.services}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 14, marginTop: 8 }}>
                      {SERVICES.map((s) => (
                        <ServiceCard key={s} label={s} selected={form.services.includes(s)} onToggle={() => toggleArr("services", s)} />
                      ))}
                    </div>
                  </Field>
                </div>
              )}

              {/* ── STEP 3: Details ── */}
              {step === 3 && (
                <div>
                  <StepHeading num="04" title="Details" subtitle="Help us prepare the perfect look" />
                  <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>

                    {/* Hair fields */}
                    {needsHair && (
                      <>
                        <div style={{ padding: "20px 24px", backgroundColor: "rgba(197,61,46,0.03)", borderLeft: `3px solid ${ACCENT}` }}>
                          <p className="Font_YV" style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", opacity: 0.5, margin: "0 0 16px" }}>Hair Style</p>
                          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                            <Field label="Hair Length" error={errors.hairLength}>
                              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                                {["Short", "Medium", "Long"].map((l) => (
                                  <RadioPill key={l} label={l} selected={form.hairLength === l} onSelect={() => set("hairLength", l)} />
                                ))}
                              </div>
                            </Field>
                            <Field label="Hair Extensions?" error={errors.hairExtensions}>
                              <div style={{ display: "flex", gap: 10 }}>
                                {["Yes", "No"].map((v) => (
                                  <RadioPill key={v} label={v} selected={form.hairExtensions === v} onSelect={() => set("hairExtensions", v)} />
                                ))}
                              </div>
                            </Field>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Makeup fields */}
                    {needsMakeup && (
                      <div style={{ padding: "20px 24px", backgroundColor: "rgba(197,61,46,0.03)", borderLeft: `3px solid ${ACCENT}` }}>
                        <p className="Font_YV" style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", opacity: 0.5, margin: "0 0 16px" }}>Make-Up</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                          <Field label="Makeup Brief" note='e.g. "Soft Glam, Smokey Eyes"' error={errors.makeupBrief}>
                            <Textarea
                              placeholder="Describe your desired look..."
                              value={form.makeupBrief}
                              onChange={(v) => set("makeupBrief", v)}
                              rows={3}
                            />
                          </Field>
                          {/* File Upload */}
                          <Field label="Upload Makeup References" note="Up to 5 images">
                            <div
                              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                              onDragLeave={() => setDragOver(false)}
                              onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFileChange(e.dataTransfer.files); }}
                              onClick={() => document.getElementById("makeup-upload").click()}
                              style={{
                                border: `1px dashed rgba(197,61,46,${dragOver ? "0.6" : "0.3"})`,
                                padding: "28px 20px",
                                textAlign: "center",
                                cursor: "pointer",
                                backgroundColor: dragOver ? "rgba(197,61,46,0.05)" : "transparent",
                                transition: "all 0.3s",
                              }}>
                              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.2" style={{ opacity: 0.4, margin: "0 auto 10px", display: "block" }}>
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
                              </svg>
                              <p className="Font_YV" style={{ fontSize: 12, opacity: 0.5, margin: 0 }}>
                                {form.makeupRefs.length > 0 ? `${form.makeupRefs.length} file(s) selected` : "Drag & drop or click to upload"}
                              </p>
                              <input id="makeup-upload" type="file" multiple accept="image/*" style={{ display: "none" }} onChange={(e) => handleFileChange(e.target.files)} />
                            </div>
                            {form.makeupRefs.length > 0 && (
                              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 10 }}>
                                {form.makeupRefs.map((f, i) => (
                                  <span key={i} style={{ fontSize: 11, padding: "4px 10px", border: `1px solid rgba(197,61,46,0.2)`, color: ACCENT, opacity: 0.7 }}>{f.name}</span>
                                ))}
                              </div>
                            )}
                          </Field>
                          <Field label="Would you like to add lashes?" error={errors.lashes}>
                            <div style={{ display: "flex", gap: 10 }}>
                              {["Yes", "No"].map((v) => (
                                <RadioPill key={v} label={v} selected={form.lashes === v} onSelect={() => set("lashes", v)} />
                              ))}
                            </div>
                          </Field>
                        </div>
                      </div>
                    )}

                    <Field label="What is your ready time?" error={errors.readyTime}>
                      <Input placeholder="e.g. 4:00 PM" value={form.readyTime} onChange={(v) => set("readyTime", v)} />
                    </Field>

                    <Field label="Further Notes" note='e.g. "Sensitive Skin"'>
                      <Textarea placeholder="Any additional notes for our team..." value={form.notes} onChange={(v) => set("notes", v)} rows={3} />
                    </Field>
                  </div>
                </div>
              )}

              {/* ── STEP 4: Review ── */}
              {step === 4 && (
                <div>
                  <StepHeading num="05" title="Review" subtitle="Confirm your booking details" />
                  <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                    {[
                      ["Full Name", form.fullName],
                      ["Contact", form.contact],
                      ["Hotel", form.hotel],
                      ["Dates", form.dates.join(", ")],
                      ["Services", form.services.join(", ")],
                      ...(needsHair ? [["Hair Length", form.hairLength], ["Hair Extensions", form.hairExtensions]] : []),
                      ...(needsMakeup ? [["Makeup Brief", form.makeupBrief], ["Add Lashes", form.lashes]] : []),
                      ["Ready Time", form.readyTime],
                      ...(form.notes ? [["Notes", form.notes]] : []),
                    ].map(([k, v], i) => (
                      <div key={i} style={{
                        display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24,
                        padding: "14px 0",
                        borderBottom: `1px solid rgba(197,61,46,0.08)`,
                      }}>
                        <span className="Font_YV" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4, flexShrink: 0, paddingTop: 2 }}>{k}</span>
                        <span className="Font_YV" style={{ fontSize: 14, textAlign: "right", fontWeight: 400 }}>{v || "—"}</span>
                      </div>
                    ))}
                  </div>
                  <p className="Font_YV" style={{ fontSize: 12, opacity: 0.4, marginTop: 24, lineHeight: 1.7 }}>
                    Our salon team will confirm your appointments and reach out with any questions.
                  </p>
                </div>
              )}
            </div>

            {/* Navigation buttons */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 44, paddingTop: 32, borderTop: `1px solid rgba(197,61,46,0.1)` }}>
              {step > 0 ? (
                <button onClick={prev} style={ghostBtnStyle}>← Back</button>
              ) : <div />}

              {step < TOTAL_STEPS - 1 ? (
                <button onClick={next} style={solidBtnStyle}>Continue →</button>
              ) : (
                <button onClick={handleSubmit} style={{ ...solidBtnStyle, paddingLeft: 40, paddingRight: 40 }}>
                  Submit Booking
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* ── SUCCESS STATE ── */
        <SuccessScreen name={form.fullName} />
      )}

      <style>{`
        * { box-sizing: border-box; }
        input::placeholder, textarea::placeholder { opacity: 0.35; }
        input:focus, textarea:focus, select:focus { outline: none; border-color: ${ACCENT} !important; }
        @media (max-width: 600px) {
          .step-dots span { display: none; }
        }
      `}</style>
    </div>
  );
}

// ── SMALL COMPONENTS ──────────────────────────────────────────────────────────

function StepHeading({ num, title, subtitle }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
        <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: "0.4em", color: ACCENT, opacity: 0.35 }}>{num}</span>
        <div style={{ flex: 1, height: 1, backgroundColor: ACCENT, opacity: 0.12 }} />
      </div>
      <h2 className="Font_Q" style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 300, margin: "0 0 6px", fontStyle: "italic", color: ACCENT }}>
        {title}
      </h2>
      <p className="Font_YV" style={{ fontSize: 13, opacity: 0.45, margin: 0, fontWeight: 300 }}>{subtitle}</p>
    </div>
  );
}

function Field({ label, children, note, error }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 10 }}>
        <label className="Font_YV" style={{ fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", color: ACCENT, fontWeight: 700 }}>
          {label}
        </label>
        {note && <span style={{ fontSize: 10, opacity: 0.35, fontStyle: "italic" }}>{note}</span>}
      </div>
      {children}
      {error && <p style={{ fontSize: 11, color: ACCENT, opacity: 0.7, marginTop: 6, fontStyle: "italic" }}>↑ {error}</p>}
    </div>
  );
}

function Input({ placeholder, value, onChange, type = "text" }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onChange={(e) => onChange(e.target.value)}
      className="Font_YV"
      style={{
        width: "100%", padding: "14px 16px",
        backgroundColor: "transparent",
        border: `1px solid rgba(197,61,46,${focused ? "0.6" : "0.2"})`,
        color: ACCENT, fontSize: 14, fontFamily: "'Jost', sans-serif", fontWeight: 300,
        transition: "border-color 0.3s",
        borderRadius: 0,
      }}
    />
  );
}

function Textarea({ placeholder, value, onChange, rows = 4 }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      rows={rows}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onChange={(e) => onChange(e.target.value)}
      className="Font_YV"
      style={{
        width: "100%", padding: "14px 16px", resize: "vertical",
        backgroundColor: "transparent",
        border: `1px solid rgba(197,61,46,${focused ? "0.6" : "0.2"})`,
        color: ACCENT, fontSize: 14, fontFamily: "'Jost', sans-serif", fontWeight: 300,
        transition: "border-color 0.3s", borderRadius: 0,
      }}
    />
  );
}

function Select({ value, onChange, options, placeholder }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <select
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => onChange(e.target.value)}
        className="Font_YV"
        style={{
          width: "100%", padding: "14px 40px 14px 16px",
          backgroundColor: "transparent",
          border: `1px solid rgba(197,61,46,${focused ? "0.6" : "0.2"})`,
          color: value ? ACCENT : "rgba(197,61,46,0.35)",
          fontSize: 14, fontFamily: "'Jost', sans-serif", fontWeight: 300,
          appearance: "none", cursor: "pointer",
          transition: "border-color 0.3s", borderRadius: 0,
        }}>
        <option value="">{placeholder}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <svg style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", opacity: 0.4 }}
        width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2 4l4 4 4-4" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function CheckPill({ label, selected, onToggle }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onToggle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="Font_YV"
      style={{
        display: "flex", alignItems: "center", gap: 12,
        padding: "12px 16px",
        border: `1px solid rgba(197,61,46,${selected ? "1" : "0.2"})`,
        backgroundColor: selected ? "rgba(197,61,46,0.06)" : hovered ? "rgba(197,61,46,0.02)" : "transparent",
        cursor: "pointer", textAlign: "left", width: "100%",
        transition: "all 0.25s ease",
      }}>
      <div style={{
        width: 16, height: 16, flexShrink: 0,
        border: `1px solid rgba(197,61,46,${selected ? "1" : "0.3"})`,
        backgroundColor: selected ? ACCENT : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all 0.25s",
      }}>
        {selected && <svg width="8" height="6" viewBox="0 0 8 6"><path d="M1 3l2 2 4-4" stroke={BG} strokeWidth="1.5" fill="none" /></svg>}
      </div>
      <span style={{ fontSize: 14, color: ACCENT, fontWeight: selected ? 400 : 300 }}>{label}</span>
    </button>
  );
}

function RadioPill({ label, selected, onSelect }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="Font_YV"
      style={{
        padding: "10px 20px",
        border: `1px solid rgba(197,61,46,${selected ? "1" : "0.25"})`,
        backgroundColor: selected ? ACCENT : hovered ? "rgba(197,61,46,0.04)" : "transparent",
        color: selected ? BG : ACCENT,
        fontSize: 13, fontFamily: "'Jost', sans-serif",
        cursor: "pointer", fontWeight: selected ? 400 : 300,
        transition: "all 0.25s ease",
      }}>
      {label}
    </button>
  );
}

function ServiceCard({ label, selected, onToggle }) {
  const [hovered, setHovered] = useState(false);
  const icons = {
    "Hair Style": (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M12 2C8 2 5 5 5 9c0 3 1.5 5.5 4 7l1 6h4l1-6c2.5-1.5 4-4 4-7 0-4-3-7-7-7z" />
      </svg>
    ),
    "Make-Up": (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="9" />
        <line x1="12" y1="3" x2="12" y2="1" /><line x1="12" y1="23" x2="12" y2="21" />
      </svg>
    ),
    "Saree Draping": (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
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
        padding: "28px 20px", display: "flex", flexDirection: "column", alignItems: "center", gap: 14,
        border: `1px solid rgba(197,61,46,${selected ? "1" : "0.18"})`,
        backgroundColor: selected ? ACCENT : hovered ? "rgba(197,61,46,0.04)" : "transparent",
        color: selected ? BG : ACCENT,
        cursor: "pointer", transition: "all 0.3s ease",
        aspectRatio: "1",
      }}>
      <div style={{ opacity: selected ? 0.9 : 0.5, transition: "opacity 0.3s" }}>{icons[label]}</div>
      <span className="Font_YV" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 400 }}>{label}</span>
    </button>
  );
}

function SuccessScreen({ name }) {
  const ref = useRef(null);
  useEffect(() => {
    import("gsap").then(({ gsap }) => {
      gsap.fromTo(ref.current, { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" });
    });
  }, []);
  return (
    <div ref={ref} style={{ maxWidth: 560, margin: "40px auto 120px", padding: "0 24px", textAlign: "center", position: "relative", zIndex: 1 }}>
      <div style={{ width: 64, height: 64, border: `1px solid ${ACCENT}`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 32px" }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5 12l5 5L19 7" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h2 className="Font_Q" style={{ fontSize: "clamp(32px, 7vw, 56px)", fontWeight: 300, fontStyle: "italic", color: ACCENT, margin: "0 0 16px" }}>
        All set,<br />{name || "dear guest"}.
      </h2>
      <p className="Font_YV" style={{ fontSize: 14, color: ACCENT, opacity: 0.55, lineHeight: 1.8, fontWeight: 300 }}>
        Your salon booking request has been received. Our team will be in touch to confirm your appointments.
      </p>
      <div style={{ marginTop: 40, width: 1, height: 60, backgroundColor: ACCENT, opacity: 0.2, margin: "40px auto 0" }} />
    </div>
  );
}

const solidBtnStyle = {
  padding: "13px 32px",
  backgroundColor: ACCENT,
  color: BG,
  border: `1px solid ${ACCENT}`,
  fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase",
  cursor: "pointer", fontFamily: "'Jost', sans-serif", fontWeight: 400,
  transition: "all 0.3s ease",
};

const ghostBtnStyle = {
  padding: "13px 28px",
  backgroundColor: "transparent",
  color: ACCENT,
  border: `1px solid rgba(197,61,46,0.3)`,
  fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase",
  cursor: "pointer", fontFamily: "'Jost', sans-serif", fontWeight: 300,
  transition: "all 0.3s ease",
};