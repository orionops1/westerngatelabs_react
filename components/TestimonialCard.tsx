import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  company: string;
  rating: number;
}

export default function TestimonialCard({
  quote,
  author,
  title,
  company,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="glass p-8 rounded-xl">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-electric-blue text-electric-blue" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-300 mb-6 italic">"{quote}"</p>

      {/* Author Info */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-electric-blue to-electric-purple rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">{author[0]}</span>
        </div>
        <div>
          <p className="font-semibold text-white text-sm">{author}</p>
          <p className="text-gray-400 text-xs">
            {title} at {company}
          </p>
        </div>
      </div>
    </div>
  );
}
