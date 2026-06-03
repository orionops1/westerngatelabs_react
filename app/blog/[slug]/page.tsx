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
    keywords: [post.category, "Western Gate Labs", "blog"],
    openGraph: {
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-electric-blue transition mb-10 text-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Blog
      </Link>

      {/* Header */}
      <div className="space-y-6 mb-12">
        <div className="flex gap-2 flex-wrap">
          <span className="px-3 py-1 bg-electric-blue/20 text-electric-blue rounded-full text-xs font-semibold">
            {post.category}
          </span>
        </div>

        <div className="text-6xl h-48 bg-navy-700 rounded-xl flex items-center justify-center">
          {post.image}
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold">{post.title}</h1>

        <p className="text-lg text-gray-300">{post.excerpt}</p>

        <div className="flex flex-wrap gap-4 text-sm text-gray-400 border-t border-navy-700 pt-6">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {post.author}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </div>
          <div>{new Date(post.date).toLocaleDateString()}</div>
        </div>
      </div>

      {/* Content */}
      <article className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed whitespace-pre-line">
        {post.content.trim()}
      </article>
    </div>
  );
}
