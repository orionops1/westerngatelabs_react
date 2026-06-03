import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  features?: string[];
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  features,
}: ServiceCardProps) {
  return (
    <Link href={href}>
      <div className="glass card-hover rounded-xl p-7 h-full flex flex-col cursor-pointer group">
        <div className="w-10 h-10 rounded-lg bg-electric-dim flex items-center justify-center mb-5">
          <Icon className="w-5 h-5 text-electric-blue" />
        </div>

        <h3 className="text-base font-semibold text-white mb-2 group-hover:text-electric-blue transition">
          {title}
        </h3>

        <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-grow">
          {description}
        </p>

        {features && (
          <ul className="space-y-1.5 mb-5">
            {features.map((feature, idx) => (
              <li key={idx} className="text-xs text-slate-500 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-electric-blue flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <span className="text-xs font-semibold text-electric-blue group-hover:translate-x-1 transition inline-flex items-center gap-1">
          Learn more <span>→</span>
        </span>
      </div>
    </Link>
  );
}
