"use client";
import { useEffect, useRef, useState } from "react";

// ─── REQUIRED SETUP ──────────────────────────────────────────────────────────
// npm install gsap
// Add to layout.js <head>:
// <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
// ─────────────────────────────────────────────────────────────────────────────

const ACCENT = "#C53D2E";
const BG = "#F6F5F1";

// Curated Unsplash images for Florence / wedding travel
const HERO_IMG = `/all_new_images/travelaccommodation/IMG1.jpg`; // Florence panorama
const VISA_IMG = "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?w=900&q=80"; // passport/travel docs
const TRANSPORT_IMG = "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=900&q=80"; // train/travel
const HOTEL_IMG = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80"; // luxury hotel room
const BAGGAGE_IMG = "https://images.unsplash.com/photo-1553531889-56cc480ac5cb?w=900&q=80"; // luggage

const sections = [
  { id: "visa", label: "Visa" },
  { id: "arrival", label: "Arrival" },
  { id: "meetgreet", label: "Meet & Greet" },
  { id: "baggage", label: "Baggage" },
  { id: "accommodation", label: "Stay" },
];

const hotels = [
  { name: "Hotel Lungarno", url: "#" },
  { name: "Portrait Firenze", url: "#" },
  { name: "The St. Regis Florence", url: "#" },
  { name: "The Excelsior, a Luxury Collection Hotel", url: "#" },
  { name: "Palazzo Ottaviani Apartments", url: "#" },
];

export default function Travelaccommodation() {
  const [activeSection, setActiveSection] = useState("visa");
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    // GSAP animations
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        // Hero parallax
        if (heroRef.current) {
          gsap.to(heroRef.current.querySelector(".hero-img"), {
            yPercent: 25,
            ease: "none",
            scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
          });
          gsap.fromTo(
            heroRef.current.querySelector(".hero-content"),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.4, ease: "power3.out", delay: 0.3 }
          );
        }

        // Section reveals
        document.querySelectorAll(".section-reveal").forEach((el) => {
          gsap.fromTo(
            el,
            { y: 60, opacity: 0 },
            {
              y: 0, opacity: 1, duration: 1, ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 82%", toggleActions: "play none none none" },
            }
          );
        });

        // Image parallax
        document.querySelectorAll(".parallax-img-inner").forEach((el) => {
          gsap.to(el, {
            yPercent: -10,
            ease: "none",
            scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
          });
        });

        // Stagger lists
        document.querySelectorAll(".stagger-list").forEach((list) => {
          const items = list.querySelectorAll("li");
          gsap.fromTo(
            items,
            { x: -20, opacity: 0 },
            {
              x: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: "power2.out",
              scrollTrigger: { trigger: list, start: "top 85%", toggleActions: "play none none none" },
            }
          );
        });
      });
    });

    // Active section tracker
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));

    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  const scrollTo = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div  className="Font_Q" style={{ backgroundColor: BG, minHeight: "100vh", color: ACCENT, overflowX: "hidden" }}>

      

      {/* ── HERO ── */}
      <div ref={heroRef} style={{ position: "relative", height: "100svh", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img className="hero-img"
          src={HERO_IMG} alt="Florence"
          style={{ position: "absolute", inset: 0, width: "100%", height: "115%", objectFit: "cover", objectPosition: "center",  }}
        />
        <div className="hero-content " style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 24px" }}>
          <p  className="Font_Q text-white"  style={{  fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 20 }}>
            Florence, Italy · September 2026
          </p>
          <h1  className="Font_Q COLOR_TEXT_RED" style={{  fontSize: "clamp(44px, 9vw, 112px)", fontWeight: 700, lineHeight: 0.95, margin: 0 }}>
            Travel & <br />Accommodation
          </h1>
          <p  className="Font_YV text-white" style={{ marginTop: 28, fontSize: "clamp(13px, 2vw, 16px)", maxWidth: 520, margin: "24px auto 0", lineHeight: 1.7, fontWeight: 300 }}>
            We are delighted to welcome you to Florence to celebrate with us. Below you will find useful information to help plan your travel and stay.
          </p>
          {/* Scroll cue */}
          <div style={{ marginTop: 56, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <span  className="Font_Q text-white" style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase" }}>Scroll</span>
            <div style={{ width: 1, height: 40, backgroundColor: "white", animation: "pulse 2s infinite" }} />
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* ── VISA ── */}
        <section id="visa" ref={(el) => (sectionRefs.current["visa"] = el)} style={{ padding: "120px 0 80px" }}>
          <div className="section-reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px 80px", alignItems: "center" }}>
            {/* Image */}
            <div style={{ position: "relative", overflow: "hidden", borderRadius: 2, aspectRatio: "4/5" }}>
              <img className="parallax-img-inner" src={VISA_IMG} alt="Visa & Travel Documents"
                style={{ width: "100%", height: "115%", objectFit: "cover", objectPosition: "center", display: "block" }} />
              {/* Floating label */}
              <div style={{ position: "absolute", top: 24, left: 24, padding: "8px 16px", backgroundColor: "rgba(246,245,241,0.9)", backdropFilter: "blur(8px)" }}>
                <span style={{ fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: ACCENT, fontWeight: 500 }}>01 / Visa</span>
              </div>
            </div>
            {/* Content */}
            <div>
              <SectionTag>Visa for Italy</SectionTag>
              <h2 style={h2Style }  className="Font_Q">Schengen<br />Requirements</h2>
              <ul className="stagger-list" style={listStyle}>
                <li style={liStyle} className="Font_YV">Italy is part of the Schengen Area — guests from certain countries may require a Schengen Visa prior to arrival.</li>
                <li style={liStyle} className="Font_YV">You may apply up to 6 months before travel. We recommend submitting at least <strong>6–8 weeks in advance</strong> for sufficient processing time.</li>
              </ul>
              <a href="https://vistoperitalia.esteri.it/" target="_blank" rel="noopener noreferrer">
                <Button>Schengen Visa Portal →</Button>
              </a>
            </div>
          </div>
        </section>

        {/* Divider */}
        <Divider />

        {/* ── ARRIVAL ── */}
        <section id="arrival" ref={(el) => (sectionRefs.current["arrival"] = el)} style={{ padding: "80px 0" }}>
          <div className="section-reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px 80px", alignItems: "center" }}>
            {/* Content first */}
            <div>
              <SectionTag>Arrival in Italy</SectionTag>
              <h2 style={h2Style}  className="Font_Q">Getting to<br />Florence</h2>
              <ul className="stagger-list" style={listStyle}>
                <li style={liStyle}  className="Font_YV">Florence is accessible via <strong>Florence Airport (FLR)</strong> or <strong>Pisa International Airport (PSA)</strong>, both well connected to major European cities.</li>
                <li style={liStyle}  className="Font_YV">From the airport, reach Florence city centre by taxi, private transfer, or train.</li>
              </ul>
              {/* Logistics card */}
              <div style={{
                marginTop: 32, padding: "24px 28px",
                border: `1px solid rgba(197,61,46,0.2)`,
                backgroundColor: "rgba(197,61,46,0.03)",
              }}>
                <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: ACCENT, margin: "0 0 12px" }}  className="Font_YV">Local Logistics Partner</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 24px" }}>
                  {[["Name", "[Insert Name]"], ["Phone", "[Insert Number]"], ["Email", "[Insert Email]"]].map(([k, v]) => (
                    <div key={k}>
                      <p  className="Font_Q" style={{ fontSize: 18, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 2px" }}>{k}</p>
                      <p  className="Font_YV" style={{ fontSize: 14, fontWeight: 500, margin: 0 }}>{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Image */}
            <div style={{ position: "relative", overflow: "hidden", borderRadius: 2, aspectRatio: "4/5" }}>
              <img className="parallax-img-inner" src={TRANSPORT_IMG} alt="Florence Train Station"
                style={{ width: "100%", height: "115%", objectFit: "cover", objectPosition: "center", display: "block" }} />
              <div style={{ position: "absolute", top: 24, right: 24, padding: "8px 16px", backgroundColor: "rgba(246,245,241,0.9)", backdropFilter: "blur(8px)" }}>
                <span style={{ fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: ACCENT, fontWeight: 500 }}>02 / Arrival</span>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <Divider />

        {/* ── MEET & GREET ── */}
        <section id="meetgreet" ref={(el) => (sectionRefs.current["meetgreet"] = el)} style={{ padding: "80px 0" }}>
          <div className="section-reveal" style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
            <SectionTag center>Travel Assistance</SectionTag>
            <h2 className="Font_Q" style={{ ...h2Style, textAlign: "center" }}>Meet &amp; Greet<br />Airport Service</h2>
            <p  className="Font_YV" style={{ ...bodyStyle, maxWidth: 560, margin: "0 auto 40px", textAlign: "center" }}>
              Arrange Meet &amp; Greet airport assistance — support with immigration, baggage collection, and onward transfer coordination. Personal greeters can meet you at the aircraft or arrival gate and escort you through the airport.
            </p>
            {/* Two airport cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 16 }}>
              {[
                { code: "FLR", name: "Florence Airport", url: "https://meetandassistitaly.com/florence-airport-assistance" },
                { code: "PSA", name: "Pisa Airport", url: "https://fastrackvip.com/airports/psa-airport-concierge-services" },
              ].map((ap) => (
                <AirportCard key={ap.code} ap={ap} />
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <Divider />

        {/* ── BAGGAGE ── */}
        <section id="baggage" ref={(el) => (sectionRefs.current["baggage"] = el)} style={{ padding: "80px 0" }}>
          <div className="section-reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px 80px", alignItems: "center" }}>
            {/* Image */}
            <div style={{ position: "relative", overflow: "hidden", borderRadius: 2, aspectRatio: "4/5" }}>
              <img className="parallax-img-inner" src={BAGGAGE_IMG} alt="Luggage"
                style={{ width: "100%", height: "115%", objectFit: "cover", objectPosition: "center", display: "block" }} />
              <div style={{ position: "absolute", bottom: 24, left: 24, padding: "8px 16px", backgroundColor: "rgba(246,245,241,0.9)", backdropFilter: "blur(8px)" }}>
                <span style={{ fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: ACCENT, fontWeight: 500 }}>04 / Baggage</span>
              </div>
            </div>
            {/* Content */}
            <div>
              <SectionTag>Baggage Guide</SectionTag>
              <h2  className="Font_Q" style={h2Style}>Weight<br />Allowances</h2>
              <div  className="Font_YV" style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 8 }}>
                {[
                  { route: "USA → Europe", note: "2 checked bags · 23 kg (50 lb) each" },
                  { route: "UK → Europe", note: "1–2 checked bags · 23 kg each" },
                  { route: "UAE → Europe", note: "20–30 kg total depending on fare" },
                  { route: "India → Europe", note: "23 kg per bag · 1–2 bags" },
                ].map((r) => (
                  <BaggageRow key={r.route} route={r.route} note={r.note} />
                ))}
              </div>
              <p  className="Font_YV" style={{ ...bodyStyle, marginTop: 24, fontSize: 14 }}>
                Most airlines allow 1 cabin bag of approx. 7–10 kg carry-on. Confirm exact allowance directly with your airline prior to travel.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <Divider />

        {/* ── ACCOMMODATION ── */}
        <section id="accommodation" ref={(el) => (sectionRefs.current["accommodation"] = el)} style={{ padding: "80px 0 140px" }}>
          {/* Header + Image */}
          <div className="section-reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px 80px", alignItems: "start", marginBottom: 72 }}>
            <div>
              <SectionTag>Florence · 17–20 September 2026</SectionTag>
              <h2  className="Font_Q" style={h2Style}>Your Stay in<br />Florence</h2>
              <p  className="Font_YV" style={{ ...bodyStyle, maxWidth: 420 }}>
                We've secured special room rates at luxury hotels in Florence. A selection of rooms and suites across beautiful properties in the heart of the city — with easy access to Florence's historic landmarks and wedding venues.
              </p>
              <p  className="Font_YV" style={{ ...bodyStyle, marginTop: 16, fontSize: 14 }}>
                Rates vary by category and property. Most rates include breakfast and hotel service; VAT and city tax are additional.
              </p>
              {/* CTA box */}
              <div style={{
                marginTop: 36, padding: "28px 32px",
                backgroundColor: ACCENT, color: BG,
              }}>
                <p  className="Font_Q" style={{  fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase",  margin: "0 0 10px" }}>Book your room</p>
                <p  className="Font_YV" style={{  fontSize: 15, margin: "0 0 16px", lineHeight: 1.5 }}>
                  Contact our RSVP team for the dedicated reservation link.
                </p>
                <div  className="Font_YV" style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <a href="tel:+919910158374" style={{ color: BG, fontSize: 13, textDecoration: "none"}}>+91 99101 58374</a>
                  <a href="mailto:dylanwedsmisha@gmail.com" style={{ color: BG, fontSize: 13, textDecoration: "none" }}>dylanwedsmisha@gmail.com</a>
                </div>
              </div>
            </div>
            {/* Hotel image */}
            <div style={{ position: "relative", overflow: "hidden", borderRadius: 2, aspectRatio: "4/5" }}>
              <img className="parallax-img-inner" src={HOTEL_IMG} alt="Luxury Hotel Florence"
                style={{ width: "100%", height: "115%", objectFit: "cover", objectPosition: "center", display: "block" }} />
              <div style={{ position: "absolute", top: 24, left: 24, padding: "8px 16px", backgroundColor: "rgba(246,245,241,0.9)", backdropFilter: "blur(8px)" }}>
                <span style={{ fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: ACCENT, fontWeight: 500 }}>05 / Stay</span>
              </div>
            </div>
          </div>

          {/* Hotels grid */}
          <div className="section-reveal">
            <p  className="Font_YV font-semibold"  style={{  fontSize: 16, letterSpacing: "0.35em", textTransform: "uppercase", color: ACCENT, marginBottom: 24 }}>
              Participating Properties
            </p>
            <div  style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 2 }}>
              {hotels.map((h, i) => (
                <HotelCard key={i} hotel={h} index={i + 1} />
              ))}
            </div>
            {/* <p style={{ marginTop: 24, fontSize: 12, opacity: 0.5, fontStyle: "italic" }}>
              Subject to final closures. We recommend booking early as availability is limited.
            </p> */}
          </div>
        </section>
      </main>

      

      <style>{`
        @keyframes pulse { 0%,100%{opacity:0.3} 50%{opacity:1} }
        * { box-sizing: border-box; }
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; }
          .two-col > *:first-child { order: 2; }
          .two-col > *:last-child { order: 1; }
          nav .nav-links { display: none !important; }
        }
      `}</style>
    </div>
  );
}

// ── SMALL COMPONENTS ──────────────────────────────────────────────────────────

function SectionTag({ children, center }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, justifyContent: center ? "center" : "flex-start" }}>
      <div style={{ width: 28, height: 1, backgroundColor: ACCENT, opacity: 0.4 }} />
      <span  className="Font_YV " style={{ fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: ACCENT,  fontWeight: 500 }}>
        {children}
      </span>
    </div>
  );
}

function Button({ children, href }) {
  const [hovered, setHovered] = useState(false);
  const el = (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="Font_YV"
      style={{
        display: "inline-block", marginTop: 28,
        padding: "12px 28px",
        border: `1px solid ${ACCENT}`,
        // fontFamily: "'DM Sans', sans-serif",
        fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase",
        color: hovered ? BG : ACCENT,
        backgroundColor: hovered ? ACCENT : "transparent",
        cursor: "pointer",
        transition: "all 0.3s ease",
        textDecoration: "none",
      }}>
      {children}
    </span>
  );
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>{el}</a>;
  return el;
}

function Divider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <div style={{ flex: 1, height: 1, backgroundColor: ACCENT, opacity: 0.1 }} />
      <svg width="8" height="8" viewBox="0 0 8 8">
        <rect x="2" y="2" width="4" height="4" fill={ACCENT} fillOpacity="0.25" transform="rotate(45 4 4)" />
      </svg>
      <div style={{ flex: 1, height: 1, backgroundColor: ACCENT, opacity: 0.1 }} />
    </div>
  );
}

function AirportCard({ ap }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={ap.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          padding: "32px 28px",
          border: `1px solid rgba(197,61,46,${hovered ? "0.4" : "0.15"})`,
          backgroundColor: hovered ? "rgba(197,61,46,0.04)" : "transparent",
          transition: "all 0.35s ease",
          cursor: "pointer",
          textAlign: "left",
        }}>
        <p className="Font_Q" style={{ fontSize: 36,  fontWeight: 700, margin: "0 0 8px", color: ACCENT, lineHeight: 1 }}>
          {ap.code}
        </p>
        <p  className="Font_YV" style={{ fontSize: 16, color: ACCENT, margin: "0 0 20px", fontWeight: 300 }}>{ap.name}</p>
        <span  className="Font_YV" style={{ fontSize: 16, letterSpacing: "0.3em", textTransform: "uppercase", color: ACCENT,  transition: "opacity 0.3s" }}>
          Book Assistance →
        </span>
      </div>
    </a>
  );
}

function BaggageRow({ route, note }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "14px 0",
        borderBottom: `1px solid rgba(197,61,46,${hovered ? "0.25" : "0.1"})`,
        transition: "border-color 0.3s",
        gap: 12,
      }}>
      <span  className="Font_YV" style={{   fontSize: 16, color: ACCENT, flexShrink: 0 }}>{route}</span>
      <span  className="Font_YV" style={{ fontSize: 14, color: ACCENT,  textAlign: "right", fontWeight: 300 }}>{note}</span>
    </div>
  );
}

function HotelCard({ hotel, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={hotel.url} style={{ textDecoration: "none" }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          padding: "28px 24px",
          backgroundColor: hovered ? ACCENT : "rgba(197,61,46,0.04)",
          border: `1px solid rgba(197,61,46,${hovered ? "1" : "0.12"})`,
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          cursor: "pointer",
        }}>
        <p  className="Font_YV" style={{ fontSize: 10, letterSpacing: "0.3em", color: hovered ? "rgba(246,245,241,0.5)" : "rgba(197,61,46,0.35)", margin: "0 0 10px" }}>
          {String(index).padStart(2, "0")}
        </p>
        <p  className="Font_YV" style={{ fontSize: 16,  color: hovered ? BG : ACCENT, margin: 0, lineHeight: 1.4 }}>
          {hotel.name}
        </p>
      </div>
    </a>
  );
}

// ── STYLES ────────────────────────────────────────────────────────────────────
const h2Style = {
//   fontFamily: "'Playfair Display', serif",
  fontSize: "clamp(32px, 4.5vw, 52px)",
  fontWeight: 400,
  lineHeight: 1.1,
  margin: "0 0 24px",
  color: ACCENT,
};

const listStyle = {
  listStyle: "none",
  padding: 0,
  margin: "0 0 28px",
  display: "flex",
  flexDirection: "column",
  gap: 14,
};

const liStyle = {
//   fontFamily: "'DM Sans', sans-serif",
  fontSize: "clamp(13px, 1.5vw, 15px)",
  color: ACCENT,
  opacity: 0.7,
  lineHeight: 1.75,
  fontWeight: 300,
  paddingLeft: 20,
  borderLeft: `2px solid rgba(197,61,46,0.2)`,
};

const bodyStyle = {
//   fontFamily: "'DM Sans', sans-serif",
  fontSize: "clamp(13px, 1.5vw, 15px)",
  color: ACCENT,
//   opacity: 0.65,
  lineHeight: 1.8,
  fontWeight: 300,
};