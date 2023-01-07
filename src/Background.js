import React from "react";
function Background() {
  return (
    <div>
      <section className="section-bg" />
      <svg className="section-svg">
        <filter id="noise">
          <feTurbulence id="turbulence">
            <animate
              attributeName="baseFrequency"
              dur="300s"
              values="0.9 0.9;0.8 0.8;0.9 0.9"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="60" />
        </filter>
      </svg>
    </div>
  );
}
export default Background;
