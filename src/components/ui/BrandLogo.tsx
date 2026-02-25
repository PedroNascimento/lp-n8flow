import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showIcon?: boolean;
  className?: string;
}

const sizeMap = {
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl",
  xl: "text-4xl",
};

const iconSizeMap = {
  sm: { w: 24, h: 24 },
  md: { w: 32, h: 32 },
  lg: { w: 40, h: 40 },
  xl: { w: 48, h: 48 },
};

export function BrandLogo({
  size = "md",
  showIcon = true,
  className = "",
}: BrandLogoProps) {
  const textSize = sizeMap[size];
  const iconSize = iconSizeMap[size];

  return (
    <Link href="/" className={`inline-flex items-center gap-2 ${className}`}>
      {showIcon && (
        <Image
          src="/img-logos/3.svg"
          alt="n8flow icon"
          width={iconSize.w}
          height={iconSize.h}
          priority
        />
      )}
      <span className={`${textSize} font-[family-name:var(--font-poppins)] leading-none`}>
        <span className="font-bold text-[#6e44ff]">n8</span>
        <span className="font-normal text-[#00f5a0]">flow</span>
      </span>
    </Link>
  );
}

/** Inline brand text for use inside paragraphs */
export function BrandText({ className = "" }: { className?: string }) {
  return (
    <span className={`font-[family-name:var(--font-poppins)] ${className}`}>
      <span className="font-bold text-[#6e44ff]">n8</span>
      <span className="font-normal text-[#00f5a0]">flow</span>
    </span>
  );
}
