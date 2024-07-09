'use client';
import useGet from '@/hooks/GET';
import { PostType } from '@/interface';
import Link from 'next/link';

export const Home = () => {
  const { post, loading, error } = useGet('https://jsonplaceholder.typicode.com/posts?_limit=10');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-start ">
      {post && post.map((post: PostType) => (
        <div key={post.id}>
          <Link href={`posts/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </main>
  );
};
