import BlogCard from "../blog-card";
import PropTypes from 'prop-types';

export default function BlogList({ sectionTitle, blogPosts }) {
  return (
    <section className="flex flex-col md:gap-10 gap-16 items-center justify-start max-w-[1300px] px-8 py-20 my-20 mx-auto md:px-5 self-stretch w-full">
      <div className="flex flex-col gap-4 items-center justify-start w-full">
          <h5 className="font-bold text-base text-blue_900_01 text-center w-auto">BLOG</h5>
          <h2 className="font-medium sm:leading-[60.00px] max-w-[520px] md:max-w-full text-2xl sm:text-5xl text-center text-gray_900_02">
            {sectionTitle}
          </h2>
      </div>
      <div
        className="flex flex-col sm:flex-row gap-5 items-start justify-start w-full"
      >
        {blogPosts.map((post,index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </section>
  )
}

BlogList.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  blogPosts: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      postImage: PropTypes.shape({
        image: PropTypes.shape({
          url: PropTypes.string.isRequired,
          width: PropTypes.number.isRequired,
          height: PropTypes.number.isRequired,
        }).isRequired,
        imageAlt: PropTypes.string.isRequired,
      }).isRequired,
      author: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      publishedDate: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};