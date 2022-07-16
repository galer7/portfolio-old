import { useMDXComponent } from 'next-contentlayer/hooks'
import { allPosts } from 'contentlayer/generated'
import type { Post } from 'contentlayer/generated'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = allPosts.find((post) => post._raw.flattenedPath === params?.slug)
    return { props: { post } }
}

export async function getStaticPaths() {
    return {
        paths: allPosts.map((post: Post) => ({ params: { slug: post.slug } })),
        fallback: false,
    }
}

const PostLayout = ({ post }: { post: Post }) => {
    console.log(post.body.code)
    const Component = useMDXComponent(post.body.code)
    return (
        <Component />
    )
}

export default PostLayout
