import PropTypes from "prop-types";
import { fetchGraphQL } from "../utils";
import { BlogsQuery } from "../queries";
import InfiniteScrollGrid from "../components/infinite-scroll-grid";
async function fetchBlogData() {
    const data = await fetchGraphQL(BlogsQuery);
    const latestPosts = data?.data?.latestPostsSectionCollection?.items[0];
    const title = latestPosts?.title;
    const description = latestPosts?.description;
    const blogPosts = data?.data?.postCardCollection?.items;

    return { title, description, blogPosts };
}

export const metadata = {
    title: "Edge Andrew - Blog",
    description: "Edge Andrew blog page",
};

export default async function Blog() {
    const { title, description, blogPosts } = await fetchBlogData();
    console.log(blogPosts?.length)
    return (
        <main className="flex bg-white justify-center items-center w-full">
            <section className="flex flex-col justify-center items-center w-full gap-16 my-20 mx-8 2xl:mx-72">
                <div className="flex flex-col justify-center items-center gap-8 w-full">
                    <h1 className="font-medium leading-[60px] max-w-screen-sm sm:text-5xl md:text-[46px] text-5xl text-gray_900_02 text-left">
                        {title}
                    </h1>
                    <p className="font-normal leading-7 max-w-[880px] not-italic text-xl text-gray_600 text-center">
                        {description}
                    </p>
                </div>
                {blogPosts && (<InfiniteScrollGrid posts={blogPosts} />)}
            </section>
        </main>
    );
}

Blog.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    blogPosts: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            publishedDate: PropTypes.string,
            author: PropTypes.string,
            postImage: PropTypes.shape({
                image: PropTypes.shape({
                    url: PropTypes.string.isRequired,
                    width: PropTypes.number.isRequired,
                    height: PropTypes.number.isRequired,
                }).isRequired,
                imageAlt: PropTypes.string.isRequired,
            }).isRequired,
        })
    ).isRequired,
};
