import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
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
  const base =
    "font-semibold rounded-lg transition-all inline-flex items-center justify-center gap-2 whitespace-nowrap relative overflow-hidden";

  const variants = {
    primary: [
      "text-white disabled:opacity-50",
      "bg-gradient-to-r from-blue-600 to-violet-600",
      "hover:from-blue-500 hover:to-violet-500",
      "shadow-lg shadow-blue-900/30",
    ].join(" "),
    secondary:
      "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 hover:border-slate-300 disabled:opacity-50",
    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-50 disabled:opacity-50",
    ghost:
      "text-slate-400 hover:text-white hover:bg-white/5 disabled:opacity-50",
  };

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3 text-sm",
  };

  const cls = clsx(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={cls}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
