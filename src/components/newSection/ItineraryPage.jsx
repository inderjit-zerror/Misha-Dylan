"use client";
import { useEffect, useRef, useState } from "react";

// NOTE: This component requires the following dependencies:
// npm install gsap @gsap/react
// And add these Google Fonts to your layout.js or _document.js:
// <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet" />

const events = [
  {
    date: "17 September",
    day: "Friday",
    label: "I",
    title: "White Wedding",
    time: "5:30 PM",
    venue: "Villa Corti",
    transfer: "Transfers to Villa Corti will begin at 4:30 PM.",
    accent: "White",
    index: "01",
  },
  {
    date: "18 September",
    day: "Saturday",
    label: "II",
    title: "Cocktails & Canapés",
    time: "7:00 PM",
    venue: "Villa Palmieri",
    transfer: "Transfers to Villa Palmieri will begin at 6:00 PM.",
    accent: "Evening",
    index: "02",
  },
  {
    date: "19 September",
    day: "Sunday",
    label: "III",
    title: "Indian Wedding",
    time: "3:00 PM – 5:00 PM",
    venue: "Villa Collazzi",
    transfer: "Transfers to Villa Collazzi will begin at 2:00 PM.",
    accent: "Indian",
    index: "03",
    subEvents: [
      { time: "3:00 PM", name: "Baraat Assembly" },
      { time: "5:00 PM", name: "Wedding Ceremony" },
    ],
  },
];

export default function ItineraryPage() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef([]);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [gsapLoaded, setGsapLoaded] = useState(false);

  useEffect(() => {
    // Dynamically load GSAP
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        setGsapLoaded(true);

        // Header animation
        if (headerRef.current) {
          gsap.fromTo(
            headerRef.current.querySelectorAll(".anim-header"),
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              stagger: 0.15,
              ease: "power3.out",
              delay: 0.2,
            }
          );
        }

        // Decorative line draw
        if (lineRef.current) {
          gsap.fromTo(
            lineRef.current,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: 1.4,
              ease: "power3.inOut",
              delay: 0.8,
              transformOrigin: "left center",
            }
          );
        }

        // Card scroll reveals
        cardsRef.current.forEach((card, i) => {
          if (!card) return;
          gsap.fromTo(
            card,
            { y: 80, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
              },
              delay: i * 0.08,
            }
          );

          // Number counter animation
          const numEl = card.querySelector(".event-index");
          if (numEl) {
            gsap.fromTo(
              numEl,
              { opacity: 0, x: -20 },
              {
                opacity: 0.07,
                x: 0,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 85%",
                },
              }
            );
          }
        });
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="Font_Q pt-[10vh]  "
      style={{
        backgroundColor: "#F6F5F1",
        minHeight: "100vh",
        // fontFamily: "'Montserrat', sans-serif",
        color: "#C53D2E",
        overflow: "hidden",
      }}
    >
      {/* Grain texture overlay */}
      <div
      className="w-full "
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.4,
        }}
      />

      {/* ─── HEADER ─────────────────────────────────────── */}
      <header
        ref={headerRef}
        className="w-full"
        style={{
          position: "relative",
          zIndex: 1,
          padding: "80px 60px 40px",
        //   maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* <div className="anim-header" style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}> */}
          {/* Decorative ornament */}
          {/* <svg width="32" height="2" viewBox="0 0 32 2">
            <line x1="0" y1="1" x2="32" y2="1" stroke="#C53D2E" strokeWidth="1" />
          </svg>
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 11,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#C53D2E",
              fontWeight: 500,
            }}
          >
            September 2026
          </span>
          <svg width="32" height="2" viewBox="0 0 32 2">
            <line x1="0" y1="1" x2="32" y2="1" stroke="#C53D2E" strokeWidth="1" />
          </svg>
        </div> */}

        <h1
          className="anim-header Font_Q"
          style={{
            // fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(56px, 9vw, 110px)",
            fontWeight: 300,
            letterSpacing: "-0.01em",
            lineHeight: 0.9,
            margin: 0,
            color: "#C53D2E",
          }}
        >
          The Itinerary
        
          {/* <div className="Font_Q" ></div> */}
        </h1>

        <div
          className="anim-header"
          style={{
            marginTop: 32,
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C53D2E",
              opacity: 0.6,
              margin: 0,
              fontWeight: 300,
            }}
          >
            Three Days of Celebration
          </p>
          <svg width="80" height="1" viewBox="0 0 80 1">
            <line x1="0" y1="0.5" x2="80" y2="0.5" stroke="#C53D2E" strokeWidth="0.5" strokeOpacity="0.4" />
          </svg>
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C53D2E",
              opacity: 0.6,
              margin: 0,
              fontWeight: 300,
            }}
          >
            Tuscany, Italy
          </p>
        </div>
      </header>

      {/* Decorative full-width line */}
      <div  className="w-full" style={{ padding: "0 60px", margin: "0 auto" }}>
        <div
          ref={lineRef}
          style={{
            height: 1,
            backgroundColor: "#C53D2E",
            opacity: 0.2,
            transformOrigin: "left center",
          }}
        />
      </div>

      {/* ─── EVENTS ──────────────────────────────────────── */}
      <main
       className="w-full"
        style={{
          position: "relative",
          zIndex: 1,
          
          margin: "0 auto",
          padding: "60px 60px 120px",
        }}
      >
        {events.map((event, idx) => (
          <EventCard
            key={idx}
            event={event}
            idx={idx}
            isHovered={hoveredIdx === idx}
            onHover={() => setHoveredIdx(idx)}
            onLeave={() => setHoveredIdx(null)}
            ref={(el) => (cardsRef.current[idx] = el)}
          />
        ))}
      </main>

      {/* ─── FOOTER ────────────────────────────────────────
      <footer
        style={{
          position: "relative",
          zIndex: 1,
          borderTop: "1px solid rgba(197,61,46,0.15)",
          padding: "40px 60px",
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 22,
            fontStyle: "italic",
            color: "#C53D2E",
            opacity: 0.5,
          }}
        >
          With Love
        </span>
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 10,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#C53D2E",
            opacity: 0.4,
          }}
        >
          17 – 19 September
        </span>
      </footer> */}
    </div>
  );
}

// ─── EVENT CARD ───────────────────────────────────────
import { forwardRef } from "react";

const EventCard = forwardRef(function EventCard({ event, idx, isHovered, onHover, onLeave }, ref) {
  const isEven = idx % 2 === 0;

  return (
    <div
      ref={ref}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: isEven ? "1fr 2fr" : "2fr 1fr",
        gap: "0 60px",
        padding: "60px 0",
        borderBottom: "1px solid rgba(197,61,46,0.12)",
        transition: "background 0.5s ease",
        cursor: "default",
      }}
    >
      {/* Large ghost index number */}
      <div
        className="event-index Font_Q"
        style={{
          position: "absolute",
          top: "50%",
          [isEven ? "right" : "left"]: -20,
          transform: "translateY(-50%)",
        //   fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(120px, 18vw, 220px)",
          fontWeight: 300,
          color: "#C53D2E",
          opacity: 0.07,
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {event.index}
      </div>

      {/* ── Left / Right column based on even/odd ── */}
      {isEven ? (
        <>
          <DateBlock event={event} isHovered={isHovered} />
          <ContentBlock event={event} isHovered={isHovered} />
        </>
      ) : (
        <>
          <ContentBlock event={event} isHovered={isHovered} alignRight />
          <DateBlock event={event} isHovered={isHovered} alignRight />
        </>
      )}
    </div>
  );
});

function DateBlock({ event, isHovered, alignRight }) {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: alignRight ? "flex-end" : "flex-start",
        padding: "20px 0",
      }}
    >
      {/* Roman numeral */}
      <span
      className="Font_Q"
        style={{
        //   fontFamily: "'Cormorant Garamond', serif",
          fontSize: 13,
          fontStyle: "italic",
          letterSpacing: "0.15em",
          color: "#C53D2E",
          opacity: 0.5,
          marginBottom: 12,
          transition: "opacity 0.3s",
          ...(isHovered ? { opacity: 0.9 } : {}),
        }}
      >
        {event.label}
      </span>

      {/* Date */}
      <div
      className="Font_Q"
        style={{
        //   fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(38px, 5vw, 58px)",
          fontWeight: 300,
          lineHeight: 1,
          color: "#C53D2E",
          textAlign: alignRight ? "right" : "left",
        }}
      >
        {event.date.split(" ").map((part, i) => (
          <span key={i} style={{ display: "block" }}>
            {part}
          </span>
        ))}
      </div>

      {/* Day of week */}
      <span
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 10,
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "#C53D2E",
          opacity: 0.4,
          marginTop: 10,
          fontWeight: 400,
        }}
      >
        {event.day}
      </span>

      {/* Hover underline */}
      <div
        style={{
          marginTop: 16,
          height: 1,
          width: isHovered ? "100%" : "30%",
          backgroundColor: "#C53D2E",
          opacity: 0.3,
          transition: "width 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          alignSelf: alignRight ? "flex-end" : "flex-start",
        }}
      />
    </div>
  );
}

function ContentBlock({ event, isHovered, alignRight }) {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: alignRight ? "flex-end" : "flex-start",
        padding: "20px 0",
        textAlign: alignRight ? "right" : "left",
      }}
    >
      {/* Event title */}
      <h2
      className="Font_Q"
        style={{
        //   fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(32px, 5vw, 60px)",
          fontWeight: 300,
        //   fontStyle: "italic",
          letterSpacing: "-0.01em",
          lineHeight: 1.05,
          margin: "0 0 20px",
          color: "#C53D2E",
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: isHovered ? "translateX(8px)" : "translateX(0)",
        }}
      >
        {event.title}
      </h2>

      {/* Sub-events for Indian Wedding */}
      {event.subEvents ? (
        <div style={{ marginBottom: 20, display: "flex", flexDirection: "column", gap: 8 }}>
          {event.subEvents.map((sub, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                flexDirection: alignRight ? "row-reverse" : "row",
              }}
            >
              <span
              className="Font_Q"
                style={{
                //   fontFamily: "'Montserrat', sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  color: "#C53D2E",
                  opacity: 0.5,
                  fontWeight: 500,
                }}
              >
                {sub.time}
              </span>
              <div
                style={{
                  width: 3,
                  height: 3,
                  borderRadius: "50%",
                  backgroundColor: "#C53D2E",
                  opacity: 0.4,
                }}
              />
              <span
              className="Font_Q"
                style={{
                //   fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 18,
                  fontStyle: "italic",
                  color: "#C53D2E",
                  opacity: 0.85,
                }}
              >
                {sub.name}
              </span>
            </div>
          ))}
        </div>
      ) : (
        /* Time */
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 20,
            flexDirection: alignRight ? "row-reverse" : "row",
          }}
        >
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 12,
              letterSpacing: "0.25em",
              color: "#C53D2E",
              opacity: 0.6,
              fontWeight: 400,
            }}
          >
            {event.time}
          </span>
          <svg width="20" height="1" viewBox="0 0 20 1">
            <line x1="0" y1="0.5" x2="20" y2="0.5" stroke="#C53D2E" strokeWidth="0.8" strokeOpacity="0.4" />
          </svg>
        </div>
      )}

      {/* Venue */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 16,
          padding: "8px 16px",
          border: "1px solid rgba(197,61,46,0.2)",
          backgroundColor: isHovered ? "rgba(197,61,46,0.05)" : "transparent",
          transition: "background 0.4s ease, border-color 0.4s ease",
          borderColor: isHovered ? "rgba(197,61,46,0.4)" : "rgba(197,61,46,0.2)",
        }}
      >
        {/* Location pin */}
        <svg width="10" height="13" viewBox="0 0 10 13" fill="none">
          <path
            d="M5 0C2.24 0 0 2.24 0 5c0 3.75 5 8 5 8s5-4.25 5-8c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 1 1 5 3.5 1.5 1.5 0 0 1 5 6.5z"
            fill="#C53D2E"
            fillOpacity="0.6"
          />
        </svg>
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 11,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#C53D2E",
            fontWeight: 500,
          }}
        >
          {event.venue}
        </span>
      </div>

      {/* Transfer note */}
      <p
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 11,
          letterSpacing: "0.05em",
          color: "#C53D2E",
          opacity: 0.45,
          margin: 0,
          fontWeight: 300,
          lineHeight: 1.7,
          maxWidth: 360,
          transition: "opacity 0.4s",
          ...(isHovered ? { opacity: 0.7 } : {}),
        }}
      >
        {event.transfer}
      </p>
    </div>
  );
}