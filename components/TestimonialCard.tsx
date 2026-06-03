interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  company: string;
}

export default function TestimonialCard({
  quote,
  author,
  title,
  company,
}: TestimonialCardProps) {
  return (
    <div className="glass rounded-xl p-7 flex flex-col">
      {/* Quote mark */}
      <span className="text-electric-blue text-3xl font-serif leading-none mb-4 select-none">&ldquo;</span>

      <p className="text-sm text-slate-300 leading-relaxed flex-grow mb-6">
        {quote}
      </p>

      <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
        <div className="w-8 h-8 rounded-full bg-electric-dim flex items-center justify-center flex-shrink-0">
          <span className="text-electric-blue text-xs font-bold">{author[0]}</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{author}</p>
          <p className="text-xs text-slate-500">
            {title}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}
