import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from "contentlayer/generated";
import type { Post } from "contentlayer/generated";
import { GetStaticProps } from "next";
import Image from "@/components/Image";
import Loom from "@/components/weat/Loom";

const usedComponents = {
  Image,
  Loom,
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === params?.slug
  );
  return { props: { post } };
};

export function getStaticPaths() {
  return {
    paths: allPosts.map((post: Post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

const PostLayout = ({ post }: { post: Post }) => {
  const MDXComponent = useMDXComponent(post.body.code);
  return (
    <article className="mx-auto prose dark:prose-invert">
      <h1>{post.title}</h1>
      <MDXComponent components={usedComponents} />
    </article>
  );
};

export default PostLayout;
