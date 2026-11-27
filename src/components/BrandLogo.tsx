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
  light: ["#1F7FE8", "#005CBC", "#2B8AF0", "#004F9A"],
  bright: ["#E8F3FF", "#8EC5FF", "#FFFFFF", "#B8DBFF"],
} as const;

/** Wide lotus petal. The large seed pod is what makes the mark a lotus. */
const LOTUS_PETAL =
  "M0 2.2C7.4-0.4 13.6-8 11.4-15.6C9.6-21.6 4.2-23.6 0-24.4C-4.2-23.6-9.6-21.6-11.4-15.6C-13.6-8-7.4-0.4 0 2.2Z";

const OUTER_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];
const INNER_ANGLES = OUTER_ANGLES.map((angle) => angle + 22.5);
const SEED_ANGLES = [0, 60, 120, 180, 240, 300];

function LogoMark({
  className = "",
  tone,
}: {
  className?: string;
  tone: "light" | "bright";
}) {
  const fills = PETAL_FILLS[tone];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className={className}
      aria-hidden
      focusable="false"
    >
      <g transform="translate(32 32) scale(1.18)">
        {OUTER_ANGLES.map((angle, i) => (
          <path
            key={`outer-${angle}`}
            transform={`rotate(${angle})`}
            fill={fills[i % fills.length]}
            d={LOTUS_PETAL}
          />
        ))}
        {INNER_ANGLES.map((angle, i) => (
          <path
            key={`inner-${angle}`}
            transform={`rotate(${angle}) scale(0.72)`}
            fill={fills[(i + 2) % fills.length]}
            d={LOTUS_PETAL}
          />
        ))}
        <circle r="8.2" fill="#FFC220" />
        {SEED_ANGLES.map((angle) => (
          <circle
            key={angle}
            cx={Math.cos((angle * Math.PI) / 180) * 4.15}
            cy={Math.sin((angle * Math.PI) / 180) * 4.15}
            r="1.15"
            fill="#C4841D"
          />
        ))}
        <circle r="1.35" fill="#E09A1A" />
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
