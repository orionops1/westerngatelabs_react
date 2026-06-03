import { Metadata } from "next";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import { Clock, User, ArrowRight } from "lucide-react";
import { blogPostsList } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog | Western Gate Labs",
  description:
    "Insights on AI, cybersecurity, and digital transformation for modern businesses.",
  keywords: ["AI blog", "cybersecurity articles", "technology insights"],
  openGraph: {
    title: "Blog | Western Gate Labs",
    description: "Read our latest insights on AI, security, and innovation.",
  },
};

const blogPosts = blogPostsList;

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Insights & <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-xl text-gray-300">
            Stay updated with the latest trends in AI, cybersecurity, and digital
            transformation.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Featured Post */}
          <div className="mb-16">
            <Link href={`/blog/${blogPosts[0].id}`}>
              <div className="glass p-8 rounded-xl hover:border-electric-blue transition group cursor-pointer">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="text-5xl h-64 bg-navy-700 rounded-lg flex items-center justify-center group-hover:scale-105 transition">
                    {blogPosts[0].image}
                  </div>
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-electric-blue/20 text-electric-blue rounded-full text-xs font-semibold">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-navy-700 text-gray-300 rounded-full text-xs font-semibold">
                        {blogPosts[0].category}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold group-hover:text-electric-blue transition">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-gray-400">{blogPosts[0].excerpt}</p>
                    <div className="flex gap-4 text-sm text-gray-400 pt-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {blogPosts[0].author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {blogPosts[0].readTime}
                      </div>
                      <div>{new Date(blogPosts[0].date).toLocaleDateString()}</div>
                    </div>
                    <div className="text-electric-blue font-semibold group-hover:translate-x-1 transition inline-flex gap-2 pt-2">
                      Read More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* All Posts */}
          <div>
            <h2 className="text-2xl font-bold mb-8">All Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <div className="glass p-6 rounded-xl hover:border-electric-blue transition group h-full flex flex-col cursor-pointer">
                    <div className="text-4xl h-24 bg-navy-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition">
                      {post.image}
                    </div>
                    <div className="flex gap-2 mb-3">
                      <span className="px-2 py-1 bg-navy-700 text-gray-300 rounded text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-electric-blue transition flex-grow">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4">{post.excerpt}</p>
                    <div className="flex gap-3 text-xs text-gray-500 border-t border-navy-700 pt-4">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-800/50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Stay Updated</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly insights on AI, cybersecurity, and
            digital transformation.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
