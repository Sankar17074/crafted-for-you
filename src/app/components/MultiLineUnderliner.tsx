import { useEffect, useRef, useState } from "react";
import Underlinesvg from "../../../public/svg/HandUnderline";

export default function MultiLineUnderline({
  children,
  animate = false,
}: {
  children: string;
   animate?: boolean;
}) {
  const textRef = useRef<HTMLSpanElement>(null);
  const [lines, setLines] = useState<
    { top: number; left: number; width: number }[]
  >([]);

  const measureLines = () => {
    const el = textRef.current;
    if (!el) return;

    const range = document.createRange();
    const rects: DOMRect[] = [];

    const textNode = el.firstChild;
    if (!textNode) return;

    for (let i = 0; i < textNode.textContent!.length; i++) {
      range.setStart(textNode, i);
      range.setEnd(textNode, i + 1);
      const rect = range.getBoundingClientRect();
      if (rect.width > 0) rects.push(rect);
    }

    const lineMap: Record<number, DOMRect[]> = {};
    rects.forEach((r) => {
      const key = Math.round(r.top);
      lineMap[key] = lineMap[key] || [];
      lineMap[key].push(r);
    });

    const parentRect = el.getBoundingClientRect();

    const calculatedLines = Object.values(lineMap).map((line) => {
      const first = line[0];
      const last = line[line.length - 1];
      return {
        top: first.bottom - parentRect.top,
        left: first.left - parentRect.left,
        width: last.right - first.left,
      };
    });

    setLines(calculatedLines);
  };

  useEffect(() => {
    measureLines(); // initial

    window.addEventListener("resize", measureLines);
    return () => window.removeEventListener("resize", measureLines);
  }, []);

  return (
    <span className="relative inline-block">
      <span ref={textRef}>{children}</span>

      {lines.map((line, i) => (
        <span
          key={i}
          className="absolute"
          style={{
            top: line.top + 4,
            left: line.left,
            width: line.width,
          }}
        >
          <Underlinesvg animate={animate} delay={i * 120} />
        </span>
      ))}
    </span>
  );
}
