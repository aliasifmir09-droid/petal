import Link from "next/link";

type BrandLogoProps = {
  variant?: "on-brand" | "on-light" | "on-dark";
  href?: string | null;
  showWordmark?: boolean;
  className?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
};

const MARK_SIZE = {
  sm: "h-8 w-8",
  md: "h-9 w-9 md:h-10 md:w-10",
  lg: "h-11 w-11 md:h-12 md:w-12",
} as const;

const WORD_SIZE = {
  sm: "text-[1.35rem]",
  md: "text-[1.65rem] md:text-[1.85rem]",
  lg: "text-[1.85rem] md:text-[2.15rem]",
} as const;

const PETAL_FILLS = {
  light: { outer: "#0071DC", inner: "#004F9A" },
  bright: { outer: "#FFFFFF", inner: "#D6EBFF" },
} as const;

/** Six open petals and a small gold heart. Gaps stay clear while it rolls. */
const BLOOM_PETAL =
  "M0-3.2C6.2-8.4 12.4-17.6 9.2-25.2C6.8-30.6 2.2-30.2 0-27.6C-2.2-30.2-6.8-30.6-9.2-25.2C-12.4-17.6-6.2-8.4 0-3.2Z";

const OUTER_ANGLES = [0, 60, 120, 180, 240, 300];
const INNER_ANGLES = OUTER_ANGLES.map((angle) => angle + 30);

function LogoMark({
  className = "",
  tone,
}: {
  className?: string;
  tone: "light" | "bright";
}) {
  const fills = PETAL_FILLS[tone];
  const outerFill = fills.outer;
  const innerFill = fills.inner;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className={className}
      aria-hidden
      focusable="false"
    >
      <g transform="translate(32 32)">
        {OUTER_ANGLES.map((angle) => (
          <path
            key={`outer-${angle}`}
            transform={`rotate(${angle})`}
            fill={outerFill}
            d={BLOOM_PETAL}
          />
        ))}
        {INNER_ANGLES.map((angle) => (
          <path
            key={`inner-${angle}`}
            transform={`rotate(${angle}) scale(0.56)`}
            fill={innerFill}
            d={BLOOM_PETAL}
          />
        ))}
        <circle r="5.2" fill="#FFC220" />
        <circle cx="-1.15" cy="-1.25" r="1.55" fill="#FFF6D0" />
      </g>
    </svg>
  );
}

export function BrandLogo({
  variant = "on-brand",
  href = "/",
  showWordmark = true,
  className = "",
  onClick,
  size = "md",
}: BrandLogoProps) {
  const markTone = variant === "on-light" ? "light" : "bright";
  const wordColor =
    variant === "on-light" ? "text-ink" : "text-porcelain";

  const content = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark
        tone={markTone}
        className={`${MARK_SIZE[size]} lotus-roll`}
      />
      {showWordmark ? (
        <span
          className={`font-display leading-none tracking-[-0.03em] ${WORD_SIZE[size]} ${wordColor}`}
        >
          Petalswift
        </span>
      ) : null}
    </span>
  );

  if (href == null) {
    return content;
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className="group inline-flex shrink-0 items-center"
      aria-label="Petalswift home"
    >
      {content}
    </Link>
  );
}

export default BrandLogo;
