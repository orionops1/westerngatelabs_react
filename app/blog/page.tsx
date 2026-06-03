import { Metadata } from "next";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import { Clock, User } from "lucide-react";
import { blogPostsList } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog | Westerngate Labs",
  description:
    "Insights on AI, cybersecurity, and digital transformation for modern organizations.",
  keywords: ["AI blog", "cybersecurity articles", "technology insights"],
  openGraph: {
    title: "Blog | Westerngate Labs",
    description: "Practical insights on AI and security.",
  },
};

export default function BlogPage() {
  const [featured, ...rest] = blogPostsList;

  return (
    <div className="bg-navy-900">

      {/* Hero */}
      <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-25" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="tag mb-4 inline-block">Blog</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-4 max-w-2xl">
            Insights on AI and security
          </h1>
          <p className="text-slate-400 max-w-lg">
            Practical articles from practitioners — not marketing copy.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 section-alt">
        <div className="max-w-7xl mx-auto">
          <Link href={`/blog/${featured.id}`}>
            <div className="glass card-hover rounded-xl p-8 cursor-pointer group">
              <div className="grid lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-2 h-52 bg-navy-800 rounded-xl flex items-center justify-center text-5xl">
                  {featured.image}
                </div>
                <div className="lg:col-span-3 space-y-3">
                  <div className="flex gap-2">
                    <span className="tag">Featured</span>
                    <span className="px-2.5 py-0.5 bg-white/5 text-slate-400 rounded-full text-xs">{featured.category}</span>
                  </div>
                  <h2 className="text-xl font-bold text-white group-hover:text-electric-blue transition leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-sm text-slate-400 leading-relaxed">{featured.excerpt}</p>
                  <div className="flex gap-4 text-xs text-slate-500 pt-2">
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {featured.author}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {featured.readTime}</span>
                    <span>{new Date(featured.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">All articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <div className="glass card-hover rounded-xl p-6 flex flex-col cursor-pointer group h-full">
                  <div className="text-3xl h-20 bg-navy-800 rounded-lg flex items-center justify-center mb-4">
                    {post.image}
                  </div>
                  <span className="px-2.5 py-0.5 bg-white/5 text-slate-400 rounded-full text-xs self-start mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-electric-blue transition flex-grow leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex gap-3 text-xs text-slate-600 border-t border-white/[0.05] pt-4">
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-alt">
        <div className="max-w-lg mx-auto text-center">
          <span className="tag mb-4 inline-block">Newsletter</span>
          <h2 className="text-2xl font-bold text-white mb-3">Stay in the loop</h2>
          <p className="text-slate-400 text-sm mb-8">
            Weekly insights on AI and cybersecurity — no spam, unsubscribe anytime.
          </p>
          <NewsletterForm />
        </div>
      </section>

    </div>
  );
}
