// src/components/CRTFilter.tsx
"use client";

const CRTFilter = () => (
  <div className="crt-effect" style={{ zIndex: 1 }}>
    <style jsx>{`
      .crt-effect {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
        background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.15) 50%),
          linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03));
        animation: flicker 0.2s infinite;
      }

      @keyframes flicker {
        0% { opacity: 0.4; }
        20% { opacity: 0.2; }
        40% { opacity: 0.4; }
        60% { opacity: 0.5; }
        80% { opacity: 0.3; }
        100% { opacity: 0.4; }
      }
    `}</style>
  </div>
);

export default CRTFilter;