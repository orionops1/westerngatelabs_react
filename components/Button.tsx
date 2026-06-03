import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  onClick,
  disabled,
  ariaLabel,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "font-semibold rounded-lg transition inline-flex items-center justify-center";

  const variants = {
    primary: "bg-electric-blue text-navy-900 hover:bg-cyan-400 disabled:opacity-50",
    secondary:
      "bg-navy-700 text-electric-blue hover:bg-navy-600 disabled:opacity-50",
    outline:
      "border border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-navy-900 disabled:opacity-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const buttonClasses = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
