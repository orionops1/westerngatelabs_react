import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  features?: string[];
  accent?: "blue" | "cyan" | "purple";
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  features,
  accent = "blue",
}: ServiceCardProps) {
  const accentColors = {
    blue:   { bg: "rgba(37,99,235,0.12)",  text: "text-blue-400",   border: "rgba(37,99,235,0.4)"  },
    cyan:   { bg: "rgba(6,182,212,0.12)",  text: "text-cyan-400",   border: "rgba(6,182,212,0.4)"  },
    purple: { bg: "rgba(124,58,237,0.12)", text: "text-purple-400", border: "rgba(124,58,237,0.4)" },
  };
  const a = accentColors[accent];

  return (
    <Link href={href}>
      <div className="glass card-hover rounded-xl p-6 sm:p-7 h-full flex flex-col cursor-pointer group">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
          style={{ background: a.bg }}
        >
          <Icon className={`w-5 h-5 ${a.text}`} />
        </div>

        <h3 className="text-base font-semibold text-white mb-2 group-hover:text-blue-400 transition leading-snug">
          {title}
        </h3>

        <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-grow">
          {description}
        </p>

        {features && (
          <ul className="space-y-1.5 mb-5">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-slate-500">
                <span className={`w-1 h-1 rounded-full flex-shrink-0 ${a.text}`}
                  style={{ background: "currentColor" }} />
                {f}
              </li>
            ))}
          </ul>
        )}

        <span className="text-xs font-semibold text-blue-400 group-hover:translate-x-1 transition inline-flex items-center gap-1">
          Learn more <span>→</span>
        </span>
      </div>
    </Link>
  );
}
