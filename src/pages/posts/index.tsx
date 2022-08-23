import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { allPosts, Post } from "contentlayer/generated";

export function getStaticProps() {
  return { props: { posts: allPosts } };
}

const getPostLink = (post: Post) => `/posts/${post.slug}`;

function PostCard(post: Post) {
  console.log(`cover-images/${post.cover}`);
  return (
    <div className="mb-6">
      <h2 className="text-lg">
        <Link href={post._raw.flattenedPath} as={getPostLink(post)}>
          <div className="cursor-pointer flex items-center gap-0">
            {post.cover && (
              <div className="relative h-32 w-full max-w-xs">
                <Image
                  src={`/cover-images/${post.cover}`}
                  alt={"Image with green fields in nature"}
                  layout="fill"
                  objectFit="scale-down"
                />
              </div>
            )}
            <a className="text-blue-700 hover:text-blue-900">{post.title}</a>
          </div>
        </Link>
      </h2>
    </div>
  );
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      <Head>
        <title>My posts</title>
      </Head>

      <h1 className="mb-8 text-3xl font-bold">My posts</h1>

      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
