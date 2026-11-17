export default function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand-mark ${compact ? 'brand-mark-compact' : ''}`}>
      <svg
        width={compact ? 30 : 34}
        height={compact ? 30 : 34}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="1" y="1" width="32" height="32" fill="#1a1208" />
        <rect x="3" y="3" width="28" height="28" fill="#f5f0e8" stroke="#1a1208" strokeWidth="1.5" />
        <rect x="6" y="6" width="6" height="6" fill="#e8611a" />
        <text
          x="17"
          y="25"
          textAnchor="middle"
          fontFamily="Playfair Display, Georgia, serif"
          fontWeight="700"
          fontSize="14"
          fill="#1a1208"
        >
          SM
        </text>
        <rect x="6" y="27.5" width="22" height="2.2" fill="#1d4d2e" />
      </svg>
      <span className="brand-wordmark">
        <strong>SillyMedia</strong>
        <span>Solutions</span>
      </span>
    </span>
  );
}
