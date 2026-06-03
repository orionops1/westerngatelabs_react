interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  company: string;
}

export default function TestimonialCard({ quote, author, title, company }: TestimonialCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-7 flex flex-col shadow-sm">
      <span className="text-blue-400 text-3xl font-serif leading-none mb-4 select-none">&ldquo;</span>
      <p className="text-sm text-slate-600 leading-relaxed flex-grow mb-6">{quote}</p>
      <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
          <span className="text-blue-600 text-xs font-bold">{author[0]}</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">{author}</p>
          <p className="text-xs text-slate-400">{title}, {company}</p>
        </div>
      </div>
    </div>
  );
}
