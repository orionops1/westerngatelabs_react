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
  const accentMap = {
    blue:   { bg: "bg-blue-50",   icon: "text-blue-600",   dot: "bg-blue-500"   },
    cyan:   { bg: "bg-cyan-50",   icon: "text-cyan-600",   dot: "bg-cyan-500"   },
    purple: { bg: "bg-violet-50", icon: "text-violet-600", dot: "bg-violet-500" },
  };
  const a = accentMap[accent];

  return (
    <Link href={href}>
      <div className="bg-white border border-slate-200 card-hover rounded-xl p-6 sm:p-7 h-full flex flex-col cursor-pointer group">
        <div className={`w-10 h-10 rounded-xl ${a.bg} flex items-center justify-center mb-5 flex-shrink-0`}>
          <Icon className={`w-5 h-5 ${a.icon}`} />
        </div>

        <h3 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition leading-snug">
          {title}
        </h3>

        <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-grow">
          {description}
        </p>

        {features && (
          <ul className="space-y-1.5 mb-5">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-slate-500">
                <span className={`w-1 h-1 rounded-full flex-shrink-0 ${a.dot}`} />
                {f}
              </li>
            ))}
          </ul>
        )}

        <span className="text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition inline-flex items-center gap-1">
          Learn more →
        </span>
      </div>
    </Link>
  );
}
