import RelatedPosts from "@/app/components/blog/related-posts";
import BlogPostDetail from "@/app/components/blog/blog-post-detail";
import { fetchGraphQL } from "@/app/utils";
import { blogPostDetailQuery } from "../../../queries";

export const metadata = {
    title: "Edge Andrew - Blog detail",
    description: "Edge Andrew blog detail page",
};

export default async function BlogDetail({ params }) {
    const variables = { id: params.id };
    const data = await fetchGraphQL(blogPostDetailQuery, variables);
    return (
        <main className="bg-white flex min-h-screen flex-col items-center justify-between w-full">
            <BlogPostDetail blogDetail={data.data.blogDetail} />
            <RelatedPosts
                relatedPosts={data.data.blogDetail.relatedPostsCollection}
                sectionTitle={"Related Posts"}
            />
        </main>
    );
}
