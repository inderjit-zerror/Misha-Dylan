"use client";
import { useEffect, useRef, useState } from "react";

// ─── REQUIRED SETUP ──────────────────────────────────────────────────────────
// npm install gsap
// Add to layout.js <head>:
// <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
// ─────────────────────────────────────────────────────────────────────────────

const ACCENT = "#016342";
const BG = "#F9DE85";

const HERO_IMG = `/FinalImage/9.webp`;
const TRANSPORT_IMG = "/FinalImage/41.webp";
const HOTEL_IMG = "/FinalImage/30.webp";

const hotels = [
  { name: "Hotel Lungarno", url: "#" },
  { name: "Portrait Firenze", url: "#" },
  { name: "The St. Regis Florence", url: "#" },
  { name: "The Excelsior, a Luxury Collection Hotel", url: "#" },
  { name: "Palazzo Ottaviani Apartments", url: "#" },
];

export default function Travelaccommodation() {
  const [activeSection, setActiveSection] = useState("arrival");
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        if (heroRef.current) {
          gsap.to(heroRef.current.querySelector(".hero-img"), {
            yPercent: 25,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
          gsap.fromTo(
            heroRef.current.querySelector(".hero-content"),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.4, ease: "power3.out", delay: 0.3 },
          );
        }

        document.querySelectorAll(".section-reveal").forEach((el) => {
          gsap.fromTo(
            el,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 82%",
                toggleActions: "play none none none",
              },
            },
          );
        });

        document.querySelectorAll(".parallax-img-inner").forEach((el) => {
          gsap.to(el, {
            yPercent: -10,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });

        document.querySelectorAll(".stagger-list").forEach((list) => {
          const items = list.querySelectorAll("li, p");
          gsap.fromTo(
            items,
            { x: -20, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              stagger: 0.1,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: list,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            },
          );
        });
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" },
    );
    Object.values(sectionRefs.current).forEach(
      (el) => el && observer.observe(el),
    );

    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className="Font_Q border-b border-[#016342]"
      style={{
        backgroundColor: BG,
        minHeight: "100vh",
        color: ACCENT,
        overflowX: "hidden",
      }}
    >
      {/* ── HERO ── */}
      <div
        ref={heroRef}
        style={{
          position: "relative",
          width: "99.5%",
          height: "100svh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          className="hero-img"
          src={HERO_IMG}
          alt="Florence"
          style={{
            position: "absolute",
            inset: 2,
            width: "100%",
            height: "115%",
            objectFit: "cover",
            objectPosition: "40% 45%",
            filter: "brightness(0.6)",
          }}
        />
        <div
          className="hero-content"
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "0 24px",
          }}
        >
          <h2 className="Font_Q text-white uppercase">Travel &amp;</h2>
          <h2 className="Font_Q text-white uppercase mt-4">Accommodation</h2>
          <p className="Font_YV text-white mt-5 max-w-[500px]">
            We are delighted to welcome you to Florence to celebrate with us.
            Below you will find useful information to help plan your travel and
            stay.
          </p>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* ── ARRIVAL ── */}
        <section
          id="arrival"
          ref={(el) => (sectionRefs.current["arrival"] = el)}
          style={{ padding: "120px 0 80px" }}
        >
          <div
            className="section-reveal two-col two-col-reverse"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px 80px",
              alignItems: "center",
            }}
          >
            <div className="col-content">
              <h2 style={h2Style} className="Font_Q uppercase">
                Getting to
                <br />
                Florence
              </h2>
              <ul className="stagger-list" style={listStyle}>
                <p className="Font_YV">
                  Florence is accessible via{" "}
                  <strong>Florence Airport (FLR)</strong> or{" "}
                  <strong>Pisa International Airport (PSA)</strong>, both well
                  connected to major European cities.
                </p>
                <p className="Font_YV">
                  From the airport, reach Florence city centre by taxi, private
                  transfer, or train.
                </p>
              </ul>
              <div
                style={{
                  marginTop: 32,
                  // padding: "24px 28px",
                  // border: `1px solid rgba(197,61,46,0.2)`,
                  // backgroundColor: "rgba(197,61,46,0.03)",
                }}
              >
                {/* <p className="Font_YV font-semibold mb-5">
                  Local Logistics Partner
                </p> */}
                {/* <div
                  className="logistics-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "8px 24px",
                  }}
                >
                  {[
                    ["Name", "[Insert Name]"],
                    ["Phone", "[Insert Number]"],
                    ["Email", "[Insert Email]"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <p className="Font_Q">{k}</p>
                      <p className="Font_YV mt-2">{v}</p>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
            <div
              className="col-image max-sm:border-[0.5vw] sm:border-[0.5vw] border-[#F89A8E]"
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 2,
                aspectRatio: "4/5",
              }}
            >
              <img
                className="parallax-img-inner"
                src={TRANSPORT_IMG}
                alt="Florence Train Station"
                style={{
                  width: "100%",
                  height: "115%",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                }}
              />
            </div>
          </div>
        </section>

        {/* ── MEET & GREET ── */}
        <section
          id="meetgreet"
          ref={(el) => (sectionRefs.current["meetgreet"] = el)}
          style={{ padding: "80px 0" }}
        >
          <div
            className="section-reveal"
            style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}
          >
            <h2 className="Font_Q" style={{ ...h2Style, textAlign: "center" }}>
              Meet &amp; Greet
              <br />
              Airport Service
            </h2>
            <p className="Font_YV">
              Arrange Meet &amp; Greet airport assistance — support with
              immigration, baggage collection, and onward transfer coordination.
              Personal greeters can meet you at the aircraft or arrival gate and
              escort you through the airport.
            </p>
            <div
              className="airport-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 24,
                marginTop: 16,
              }}
            >
              {[
                {
                  code: "FLR",
                  name: "Florence Airport",
                  url: "https://meetandassistitaly.com/florence-airport-assistance",
                },
                {
                  code: "PSA",
                  name: "Pisa Airport",
                  url: "https://fastrackvip.com/airports/psa-airport-concierge-services",
                },
              ].map((ap) => (
                <AirportCard key={ap.code} ap={ap} />
              ))}
            </div>
          </div>
        </section>

        {/* ── ACCOMMODATION ── */}
        <section
          id="accommodation"
          ref={(el) => (sectionRefs.current["accommodation"] = el)}
          style={{ padding: "80px 0 140px" }}
        >
          <div
            className="section-reveal two-col"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px 80px",
              alignItems: "start",
              marginBottom: 72,
            }}
          >
            <div className="col-content">
              <h2 className="Font_Q" style={h2Style}>
                Your Stay in
                <br />
                Florence
              </h2>
              <p className="Font_YV" style={{ ...bodyStyle, maxWidth: 420 }}>
               We have secured special room rates at select luxury hotels in Florence for Dylan & Misha’s wedding celebrations.
              </p>
              <p className="Font_YV" style={{ ...bodyStyle, marginTop: 16 }}>
                A curated selection of rooms and suites is available across beautiful properties in the heart of the city, with easy access to Florence’s historic landmarks and the wedding venues.
              </p>
              <p className="Font_YV" style={{ ...bodyStyle, marginTop: 16 }}>
                Rates vary by room category and property. Most rates include breakfast and hotel service; VAT and city tax will be additional as applicable.
              </p>
              {/* <div
                style={{
                  marginTop: 36,
                  // padding: "28px 32px",
                  // backgroundColor: "#F89A8E",
                  color: ACCENT,
                }}
              >
                <p className="Font_Q mb-2">Book Your Room</p>
                <p className="Font_YV">
                  Contact our RSVP team for the dedicated reservation link.
                </p>
                <div
                  className="Font_YV"
                  style={{ display: "flex", flexDirection: "column", gap: 6 }}
                >
                  <a href="tel:+919910158374" style={{ color: ACCENT }}>
                    +91 99101 58374
                  </a>
                  <a
                    href="mailto:dylanwedsmisha@gmail.com"
                    style={{ color: ACCENT }}
                  >
                    dylanwedsmisha@gmail.com
                  </a>
                </div>
              </div> */}

              <div
  style={{
    marginTop: 36,
    color: ACCENT,
  }}
>
  <p className="Font_Q mb-2">Book Your Room</p>

  <p className="Font_YV" style={{ marginBottom: 20 }}>
    Please use the dedicated booking options below to reserve your stay.
  </p>

  <div
    className="Font_YV"
    style={{
      display: "flex",
      flexDirection: "column",
      gap: 16,
    }}
  >
    <div>
      <strong>The St. Regis Florence</strong>
      <br />
      <a
        href="https://tinyurl.com/mishadylanstregisflorence"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: ACCENT,
          textDecoration: "underline",
          display: "inline-block",
          marginTop: 4,
        }}
      >
        Reserve Your Room
      </a>
    </div>

    <div>
      <strong>The Westin Excelsior Florence</strong>
      <br />
      <a
        href="https://tinyurl.com/mishaanddylanexcelsiorflorence"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: ACCENT,
          textDecoration: "underline",
          display: "inline-block",
          marginTop: 4,
        }}
      >
        Reserve Your Room
      </a>
    </div>

    <div style={{ marginTop: 8 }}>
      <p style={{ marginBottom: 8 }}>
        For any assistance with bookings, please contact our RSVP team:
      </p>

      <a
        href="tel:+919910158374"
        style={{ color: ACCENT, display: "block" }}
      >
        +91 99101 58374
      </a>

      <a
        href="mailto:dylanwedsmisha@gmail.com"
        style={{ color: ACCENT, display: "block" }}
      >
        dylanwedsmisha@gmail.com
      </a>
    </div>
  </div>
</div>
            </div>
            <div
              className="col-image max-sm:border-[0.5vw] sm:border-[0.5vw] border-[#F89A8E]"
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 2,
                aspectRatio: "4/5",
              }}
            >
              <img
                className="parallax-img-inner"
                src={HOTEL_IMG}
                alt="Luxury Hotel Florence"
                style={{
                  width: "100%",
                  height: "115%",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* Hotel */}

          {/* <div className="section-reveal">
            <p
              className="Font_YV font-semibold"
              style={{
                fontSize: 16,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: ACCENT,
                marginBottom: 24,
              }}
            >
              Participating Properties
            </p>
            <div
              className="hotels-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 2,
              }}
            >
              {hotels.map((h, i) => (
                <HotelCard key={i} hotel={h} index={i + 1} />
              ))}
            </div>
          </div> */}
        </section>
      </main>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:0.3} 50%{opacity:1} }
        * { box-sizing: border-box; }

        /* ── MOBILE RESPONSIVE ── */
        @media (max-width: 768px) {

          /* Two-column → single column */
          .two-col {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          /* Image always comes first on mobile */
          .two-col .col-image {
            order: -1 !important;
            aspect-ratio: 3/2 !important; /* wider, shorter images on mobile */
          }

          .two-col .col-content {
            order: 1 !important;
          }

          /* For arrival section which has reversed columns on desktop — 
             image is second col, content is first. On mobile image still goes first. */
          .two-col-reverse .col-content {
            order: 1 !important;
          }
          .two-col-reverse .col-image {
            order: -1 !important;
          }

          /* Section padding */
          section {
            padding: 60px 0 !important;
          }
          section:first-of-type {
            padding-top: 80px !important;
          }

          /* Airport cards — stack on very small screens */
          .airport-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }

          /* Logistics grid — stack */
          .logistics-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }

          /* Hotels grid — 1 or 2 cols */
          .hotels-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        @media (max-width: 480px) {
          /* Hotels grid — single col on very small */
          .hotels-grid {
            grid-template-columns: 1fr !important;
          }

          /* Reduce main padding */
          main {
            padding: 0 16px !important;
          }
        }
      `}</style>
    </div>
  );
}

// ── SMALL COMPONENTS ──────────────────────────────────────────────────────────

function AirportCard({ ap }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={ap.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          padding: "32px 28px",
          border: `1px solid rgba(197,61,46,${hovered ? "0.4" : "0.15"})`,
          backgroundColor: hovered ? "#016342" : "",
          transition: "all 0.35s ease",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <p
          className="Font_Q"
          style={{
            fontSize: 36,
            fontWeight: 700,
            margin: "0 0 8px",
            color: hovered ? BG : "",
            lineHeight: 1,
          }}
        >
          {ap.code}
        </p>
        <p
          className="Font_YV"
          style={{
            fontSize: 16,
           color: hovered ? BG : "",
            margin: "0 0 20px",
            fontWeight: 300,
          }}
        >
          {ap.name}
        </p>
        <span
          className="Font_YV"
          style={{
            fontSize: 16,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: hovered ? BG : "",
            transition: "opacity 0.3s",
          }}
        >
          Book Assistance →
        </span>
      </div>
    </a>
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
          // border: `1px solid rgba(197,61,46,${hovered ? "1" : "0.12"})`,
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          cursor: "pointer",
        }}
      >
        <p
          className="Font_Q"
          style={{
            fontSize: 16,
            color: hovered ? BG : ACCENT,
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          {hotel.name}
        </p>
      </div>
    </a>
  );
}

// ── STYLES ────────────────────────────────────────────────────────────────────
const h2Style = {
  fontSize: "clamp(28px, 4.5vw, 52px)",
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

const bodyStyle = {
  color: ACCENT,
  fontWeight: 300,
};
