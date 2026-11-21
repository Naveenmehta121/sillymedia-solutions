interface BrandMarkProps {
  compact?: boolean;
  variant?: 'horizontal' | 'stacked' | 'mark';
}

export default function BrandMark({
  compact = false,
  variant = 'horizontal',
}: BrandMarkProps) {
  if (variant === 'stacked') {
    return (
      <span className={`brand-mark brand-mark-stacked ${compact ? 'brand-mark-compact' : ''}`}>
        <picture>
          <source srcSet="/images/logo.webp" type="image/webp" />
          <img
            src="/images/logo.png"
            alt="SillyMedia Solutions — Digital Marketing Agency"
            width={compact ? 120 : 155}
            height={compact ? 92 : 118}
            className="brand-logo-img brand-logo-stacked"
          />
        </picture>
      </span>
    );
  }

  if (variant === 'mark') {
    return (
      <span className={`brand-mark brand-mark-icon ${compact ? 'brand-mark-compact' : ''}`}>
        <picture>
          <source srcSet="/images/logo-mark.webp" type="image/webp" />
          <img
            src="/images/logo-mark.png"
            alt="SillyMedia Solutions Mark"
            width={compact ? 48 : 60}
            height={compact ? 24 : 30}
            className="brand-logo-img brand-logo-mark"
          />
        </picture>
      </span>
    );
  }

  return (
    <span className={`brand-mark brand-mark-horizontal ${compact ? 'brand-mark-compact' : ''}`}>
      <picture>
        <source srcSet="/images/logo-horizontal.webp" type="image/webp" />
        <img
          src="/images/logo-horizontal.png"
          alt="SillyMedia Solutions — Digital Marketing Agency"
          width={compact ? 175 : 210}
          height={compact ? 40 : 48}
          className="brand-logo-img brand-logo-horizontal"
        />
      </picture>
    </span>
  );
}
