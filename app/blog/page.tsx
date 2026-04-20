import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogContent from '@/components/BlogContent';
import blogPostsData from '@/src/data/blog-posts.json';
import { BlogPost } from '@/src/types/blog';

export const metadata: Metadata = {
  title: "Cinematic Logs | Decryption Active",
  description: "Browse the complete classified archive of Operation Red & Black. Pre-production intelligence, BTS surveillance, and technical script logs.",
};

export default function BlogPage() {
  const posts = blogPostsData as BlogPost[];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black-primary pt-24 pb-16">
        <BlogContent posts={posts} />
      </main>
      <Footer />
    </>
  );
}