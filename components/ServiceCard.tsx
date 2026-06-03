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
      <div className="glass p-8 rounded-xl hover:border-electric-blue transition group cursor-pointer h-full flex flex-col">
        <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-electric-purple rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
          <Icon className="w-6 h-6 text-white" />
        </div>

        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-electric-blue transition">
          {title}
        </h3>

        <p className="text-gray-400 text-sm mb-4 flex-grow">{description}</p>

        {features && (
          <ul className="space-y-2 mb-4">
            {features.map((feature, idx) => (
              <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-electric-blue rounded-full" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="text-electric-blue font-semibold text-sm group-hover:translate-x-1 transition">
          Learn More →
        </div>
      </div>
    </Link>
  );
}
