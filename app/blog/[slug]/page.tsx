import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, User, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return { title: "Post Not Found | Western Gate Labs" };
  }

  return {
    title: `${post.title} | Western Gate Labs`,
    description: post.excerpt,
    keywords: [post.category, "Western Gate Labs"],
    openGraph: {
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) notFound();

  return (
    <div className="bg-navy-900 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">

        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-white transition mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Blog
        </Link>

        {/* Category */}
        <span className="tag mb-5 inline-block">{post.category}</span>

        {/* Cover */}
        <div className="text-5xl h-48 bg-navy-800 rounded-xl flex items-center justify-center mb-8">
          {post.image}
        </div>

        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
          {post.title}
        </h1>
        <p className="text-slate-400 text-base leading-relaxed mb-6">{post.excerpt}</p>

        <div className="flex flex-wrap gap-4 text-xs text-slate-500 border-t border-white/[0.06] border-b border-white/[0.06] py-4 mb-10">
          <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {post.author}</span>
          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>

        {/* Content */}
        <article className="text-sm text-slate-300 leading-7 whitespace-pre-line">
          {post.content.trim()}
        </article>

      </div>
    </div>
  );
}
