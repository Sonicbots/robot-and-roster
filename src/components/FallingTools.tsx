import { Wrench, Cog, Hammer, Ruler, Nut, Bolt } from "lucide-react";

type Tool = {
  Icon: typeof Wrench;
  left: number;
  size: number;
  dur: number;
  delay: number;
  opacity: number;
  spin: number;
  tint: string;
};

const tools: Tool[] = [
  { Icon: Wrench, left: 4, size: 40, dur: 22, delay: 0, opacity: 0.16, spin: 380, tint: "text-primary" },
  { Icon: Cog, left: 12, size: 52, dur: 30, delay: -8, opacity: 0.12, spin: -320, tint: "text-accent" },
  { Icon: Hammer, left: 21, size: 36, dur: 18, delay: -14, opacity: 0.15, spin: 420, tint: "text-primary" },
  { Icon: Bolt, left: 28, size: 26, dur: 14, delay: -5, opacity: 0.2, spin: 540, tint: "text-primary" },
  { Icon: Ruler, left: 35, size: 44, dur: 26, delay: -19, opacity: 0.12, spin: -260, tint: "text-accent" },
  { Icon: Nut, left: 43, size: 24, dur: 16, delay: -11, opacity: 0.18, spin: 600, tint: "text-primary" },
  { Icon: Wrench, left: 50, size: 56, dur: 34, delay: -24, opacity: 0.1, spin: -300, tint: "text-primary" },
  { Icon: Cog, left: 58, size: 34, dur: 20, delay: -3, opacity: 0.16, spin: 400, tint: "text-accent" },
  { Icon: Hammer, left: 64, size: 30, dur: 15, delay: -9, opacity: 0.18, spin: -520, tint: "text-primary" },
  { Icon: Bolt, left: 71, size: 22, dur: 13, delay: -16, opacity: 0.2, spin: 640, tint: "text-accent" },
  { Icon: Ruler, left: 77, size: 48, dur: 28, delay: -22, opacity: 0.11, spin: 280, tint: "text-primary" },
  { Icon: Nut, left: 84, size: 26, dur: 17, delay: -7, opacity: 0.17, spin: -560, tint: "text-primary" },
  { Icon: Wrench, left: 91, size: 38, dur: 24, delay: -13, opacity: 0.14, spin: 340, tint: "text-accent" },
  { Icon: Cog, left: 97, size: 46, dur: 32, delay: -27, opacity: 0.11, spin: -360, tint: "text-primary" },
  { Icon: Bolt, left: 8, size: 20, dur: 12, delay: -2, opacity: 0.2, spin: 700, tint: "text-accent" },
  { Icon: Nut, left: 67, size: 20, dur: 12, delay: -18, opacity: 0.2, spin: -680, tint: "text-accent" },
  { Icon: Hammer, left: 88, size: 34, dur: 19, delay: -10, opacity: 0.15, spin: 480, tint: "text-primary" },
  { Icon: Ruler, left: 17, size: 34, dur: 23, delay: -25, opacity: 0.13, spin: -240, tint: "text-primary" },
];

export function FallingTools() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {tools.map((t, i) => (
        <t.Icon
          key={i}
          className={`falling-tool absolute ${t.tint}`}
          style={{
            left: `${t.left}%`,
            top: 0,
            width: t.size,
            height: t.size,
            opacity: t.opacity,
            animationDuration: `${t.dur}s`,
            animationDelay: `${t.delay}s`,
            ["--spin" as string]: `${t.spin}deg`,
          }}
        />
      ))}
    </div>
  );
}
