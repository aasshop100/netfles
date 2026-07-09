import { useRef, useState, useCallback, useEffect } from "react";
import MediaCard from "./MediaCard";
import { ChevronLeftIcon, ChevronRightIcon } from "./Icons";

// ── Netflix-style horizontal swipe row ─────────────────────────────────────
// Reuses the existing MediaCard + .scroll-row pattern. Cards scroll/swipe
// horizontally (native touch on mobile) with arrow buttons on desktop.
export default function ScrollRow({
  items,
  title,
  titleHighlight,
  onSelect,
  ratingsMap = {},
  watched,
  onMarkWatched,
  onMarkUnwatched,
}) {
  const trackRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows, items]);

  const scrollByDir = useCallback((dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  }, []);

  if (!items || items.length === 0) return null;

  return (
    <div className="section srow">
      <div className="section-title">
        {titleHighlight ? (
          <>
            {title}&nbsp;
            <span style={{ color: "var(--red)" }}>{titleHighlight}</span>
          </>
        ) : (
          title
        )}
      </div>
      <div className="srow-viewport">
        <button
          type="button"
          className={`srow-arrow srow-arrow--left${canLeft ? "" : " srow-arrow--hidden"}`}
          onClick={() => scrollByDir(-1)}
          aria-label="Scroll left"
          tabIndex={canLeft ? 0 : -1}
        >
          <ChevronLeftIcon />
        </button>
        <div className="scroll-row srow-track" ref={trackRef}>
          {items.map((item) => {
            const type = item.media_type === "tv" ? "tv" : "movie";
            const rd = ratingsMap[`${type}_${item.id}`] || {};
            return (
              <MediaCard
                key={`${item.media_type}_${item.id}`}
                item={item}
                onClick={() => onSelect(item)}
                progress={0}
                watched={watched}
                onMarkWatched={onMarkWatched}
                onMarkUnwatched={onMarkUnwatched}
                ageRating={rd.cert}
                restricted={rd.restricted}
              />
            );
          })}
        </div>
        <button
          type="button"
          className={`srow-arrow srow-arrow--right${canRight ? "" : " srow-arrow--hidden"}`}
          onClick={() => scrollByDir(1)}
          aria-label="Scroll right"
          tabIndex={canRight ? 0 : -1}
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}
