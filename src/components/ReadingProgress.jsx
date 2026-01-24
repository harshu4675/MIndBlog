import { useEffect, useRef } from "react";
import "./styles/ReadingProgress.css";

export default function ReadingProgress() {
  const barRef = useRef(null);
  const target = useRef(0);
  const current = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      target.current = (window.scrollY / totalHeight) * 100;
    };

    const smooth = () => {
      current.current += (target.current - current.current) * 0.08;
      if (barRef.current) {
        barRef.current.style.width = `${current.current}%`;
      }
      requestAnimationFrame(smooth);
    };

    window.addEventListener("scroll", onScroll);
    smooth();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="reading-progress-bar">
      <div ref={barRef} className="reading-progress-fill" />
    </div>
  );
}
