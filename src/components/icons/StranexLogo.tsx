interface StranexLogoProps {
  className?: string;
  size?: number;
}

export default function StranexLogo({ className = "", size = 32 }: StranexLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      {/* Hexagonal base */}
      <polygon
        points="16,2 28,9 28,23 16,30 4,23 4,9"
        fill="url(#logo-grad)"
        opacity="0.15"
      />
      <polygon
        points="16,2 28,9 28,23 16,30 4,23 4,9"
        fill="none"
        stroke="url(#logo-grad)"
        strokeWidth="1.5"
      />
      {/* S letter stylized */}
      <path
        d="M11 12 C11 10.5 12.5 10 14 10 L19 10 C20.5 10 21 10.8 21 12 C21 13.2 20 14 18.5 14 L13.5 14 C12 14 11 14.8 11 16 C11 17.2 12 18 13.5 18 L19 18 C20.5 18 21 19 21 20 C21 21 20.5 22 19 22 L13 22 C11.5 22 11 21.2 11 20"
        stroke="url(#logo-grad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
