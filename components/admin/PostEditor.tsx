"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { Save, Eye } from "lucide-react";

interface PostEditorProps {
  post?: {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category: string;
    image: string;
    published: boolean;
  };
}

const categories = ["AI", "Cybersecurity", "Web Development", "WordPress", "Trends", "Company"];

export default function PostEditor({ post }: PostEditorProps) {
  const router = useRouter();
  const isEdit  = !!post;

  const [title,     setTitle]     = useState(post?.title     ?? "");
  const [slug,      setSlug]      = useState(post?.slug      ?? "");
  const [excerpt,   setExcerpt]   = useState(post?.excerpt   ?? "");
  const [content,   setContent]   = useState(post?.content   ?? "");
  const [category,  setCategory]  = useState(post?.category  ?? "AI");
  const [image,     setImage]     = useState(post?.image     ?? "🤖");
  const [published, setPublished] = useState(post?.published ?? false);
  const [loading,   setLoading]   = useState(false);
  const [error,     setError]     = useState("");

  const generateSlug = (val: string) =>
    val.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!isEdit) setSlug(generateSlug(val));
  };

  const handleSubmit = async (e: FormEvent, publishNow?: boolean) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const body = {
      title, slug, excerpt, content, category, image,
      published: publishNow ?? published,
    };

    try {
      const url = isEdit ? `/api/admin/posts/${post!.id}` : "/api/admin/posts";
      const res = await fetch(url, {
        method:  isEdit ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Save failed");
      }

      router.push("/admin/posts");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
          {error}
        </div>
      )}

      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">Title *</label>
        <input
          type="text"
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          required
          className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-slate-600 text-base font-medium"
          placeholder="Post title"
        />
      </div>

      {/* Slug */}
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">Slug *</label>
        <div className="flex items-center gap-2">
          <span className="text-slate-600 text-sm">/blog/</span>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
            className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-slate-600 text-sm"
            placeholder="post-slug"
          />
        </div>
      </div>

      {/* Category + Image */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white"
          >
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Cover icon / emoji</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-slate-600"
            placeholder="🤖"
          />
        </div>
      </div>

      {/* Excerpt */}
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">Excerpt *</label>
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          required
          rows={2}
          className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-slate-600 resize-none text-sm"
          placeholder="Short description shown on the blog listing page..."
        />
      </div>

      {/* Content */}
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">Content *</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={18}
          className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-slate-600 resize-y text-sm leading-relaxed font-mono"
          placeholder="Write your post content here..."
        />
        <p className="text-xs text-slate-600 mt-1">Plain text. Use blank lines to separate paragraphs.</p>
      </div>

      {/* Status + actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
        <label className="flex items-center gap-3 cursor-pointer">
          <div
            onClick={() => setPublished(!published)}
            className={`relative w-10 h-5 rounded-full transition ${published ? "bg-blue-600" : "bg-white/10"}`}
          >
            <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${published ? "translate-x-5" : "translate-x-0.5"}`} />
          </div>
          <span className="text-sm text-slate-400">{published ? "Published" : "Draft"}</span>
        </label>

        <div className="flex gap-3">
          <Button
            type="submit"
            variant="secondary"
            size="md"
            disabled={loading}
            onClick={(e) => { (e as unknown as MouseEvent); }}
          >
            <Save className="w-4 h-4" />
            {published ? "Save" : "Save draft"}
          </Button>
          {!published && (
            <Button
              type="button"
              variant="primary"
              size="md"
              disabled={loading}
              onClick={(e) => handleSubmit(e as unknown as FormEvent, true)}
            >
              <Eye className="w-4 h-4" />
              Publish
            </Button>
          )}
        </div>
      </div>
    </form>
  );
}
