import { useState } from "react";
import "../styles/LogoWall.css";

function LogoWall({
  ItemComponent, 
  direction = "horizontal",
  pauseOnHover = false,
  size = "clamp(8rem, 1rem + 40vmin, 30rem)",
  duration = "15s",
  textColor = "#ffffff",
  bgColor = "#060606",
  bgAccentColor = "#111111",
  itemCount = 1, 
}) {
  const [isPaused, setIsPaused] = useState(false);

  const items = Array.from({ length: itemCount }, (_, idx) => (
    <ItemComponent key={idx} index={idx} />
  ));

  return (
    <article
      className="wrapper"
      style={{
        "--size": size,
        "--duration": duration,
        "--color-text": textColor,
        "--color-bg": bgColor,
        "--color-bg-accent": bgAccentColor,
      }}
    >
      <div
        className={`marquee ${isPaused ? "paused" : ""}`}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div className="marquee__group">{items}</div>
        <div className="marquee__group" aria-hidden="true">
          {items} 
        </div>
      </div>
    </article>
  );
}

export default LogoWall;
