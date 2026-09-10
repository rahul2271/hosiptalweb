export default function Watermark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.75"
      aria-hidden
    >
      <circle cx="300" cy="300" r="280" />
      <circle cx="300" cy="300" r="220" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x1 = 300 + 220 * Math.cos(angle);
        const y1 = 300 + 220 * Math.sin(angle);
        const x2 = 300 + 280 * Math.cos(angle);
        const y2 = 300 + 280 * Math.sin(angle);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
      <path d="M300 80c-40 60-60 100-60 140s25 65 60 80c35-15 60-40 60-80s-20-80-60-140z" />
      <path d="M300 220V520" />
    </svg>
  );
}
