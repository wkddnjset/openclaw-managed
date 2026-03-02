import { MetadataRoute } from "next";
import { db } from "@/lib/db";

const siteUrl = "https://openclaw.kr";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const publishedPosts = await db.blogPost.findMany({
    where: { published: true },
    select: { slug: true, updatedAt: true },
    orderBy: { updatedAt: "desc" },
  });

  const blogRoutes = publishedPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...blogRoutes,
  ];
}
