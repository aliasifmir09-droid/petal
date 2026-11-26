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
  light: ["#1F7FE8", "#005CBC", "#2B8AF0", "#004F9A", "#0071DC"],
  bright: ["#8EC5FF", "#E8F3FF", "#9FCEFF", "#D7EBFF", "#B8DBFF"],
} as const;

function LogoMark({
  className = "",
  tone,
}: {
  className?: string;
  tone: "light" | "bright";
}) {
  const fills = PETAL_FILLS[tone];
  const angles = [-18, 54, 126, 198, 270];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className={className}
      aria-hidden
      focusable="false"
    >
      <g transform="translate(32 32)">
        {angles.map((angle, i) => (
          <path
            key={angle}
            transform={`rotate(${angle})`}
            fill={fills[i]}
            d="M0-2.5c7.5-6.5 14.2-16.8 11.8-24.2C9.2-32.4 2.8-33.8 0-31.2c-2.8-2.6-9.2-1.2-11.8 4.5C-14.2-19.3-7.5-9 0-2.5Z"
          />
        ))}
        <circle r="6" fill="#FFC220" />
        <circle cx="-1.4" cy="-1.6" r="1.8" fill="#FFF1B8" opacity=".92" />
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
        className={`${MARK_SIZE[size]} transition-transform duration-500 ease-out group-hover:rotate-[18deg]`}
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
