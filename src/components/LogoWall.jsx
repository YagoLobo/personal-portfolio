import { useState } from "react";
import "../styles/LogoWall.css";

function LogoWall({
  ItemComponent, // Accept a React component as a prop
  direction = "horizontal",
  pauseOnHover = false,
  size = "clamp(8rem, 1rem + 30vmin, 25rem)",
  duration = "60s",
  textColor = "#ffffff",
  bgColor = "#060606",
  bgAccentColor = "#111111",
  itemCount = 3 // Number of times the component will repeat
}) {
  const [isPaused, setIsPaused] = useState(false);

  const wrapperClass = [
    "wrapper",
    direction === "vertical" && "wrapper--vertical"
  ]
    .filter(Boolean)
    .join(" ");

  const marqueeClass = [
    "marquee",
    direction === "vertical" && "marquee--vertical",
    isPaused && "paused"
  ]
    .filter(Boolean)
    .join(" ");

  return (
    
    <article
      className={wrapperClass}
      style={{
        "--size": size,
        "--duration": duration,
        "--color-text": textColor,
        "--color-bg": bgColor,
        "--color-bg-accent": bgAccentColor
      }}
    >
        
      <div
        className={marqueeClass}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div className="marquee__group">
          {Array.from({ length: itemCount }, (_, idx) => (
            <ItemComponent key={idx} index={idx} />
          ))}
          </div>
          </div>
    </article>
  );
}

export default LogoWall;
