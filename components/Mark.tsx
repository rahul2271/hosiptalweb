export default function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      aria-hidden
    >
      <path d="M20 34c-7-3-11-9-11-16 0-3 1-6 3-8 2 5 5 8 8 9 3-1 6-4 8-9 2 2 3 5 3 8 0 7-4 13-11 16z" />
      <path d="M20 34V14" strokeLinecap="round" />
      <path d="M20 20c-3-2-5-5-5-8" strokeLinecap="round" />
      <path d="M20 24c3-2 5-5 5-8" strokeLinecap="round" />
    </svg>
  );
}
