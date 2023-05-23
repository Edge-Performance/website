import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';
import fetchGraphQL from '../utils';

export default async function Blog() {
  const query = `
    query {
      latestPostsSectionCollection{
        items{
          title
          description
          blogPostsCollection{
            items{
              title
              description
              publishedDate
              author
              postImage{
                image{
                  url
                  width
                  height
                }
                imageAlt
              }
            }
          }
        }
      }
    }
  `;
  const data = await fetchGraphQL(query);
  const title = data.data.latestPostsSectionCollection.items[0].title;
  const description =
    data.data.latestPostsSectionCollection.items[0].description;
  const blogPosts =
    data.data.latestPostsSectionCollection.items[0].blogPostsCollection.items;
  return (
    <section className="flex bg-white justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center w-full sm:w-4/5 gap-16 my-20 mx-8 sm:m-40">
        <div className="flex flex-col justify-center items-center gap-8 w-full sm:w-4/5">
          <h1 className="font-medium leading-[60.00px] md:max-w-full max-w-screen-sm sm:text-[40px] md:text-[46px] text-[50px] text-gray_900_02 text-left">
            {title}
          </h1>
          <p className="font-normal leading-[28.00px] md:max-w-full max-w-screen-sm not-italic text-xl text-gray_600 text-center">
            {description}
          </p>
        </div>
        <div className="flex flex-col justify-start items-start sm:grid sm:grid-cols-4 gap-14 w-full">
          {blogPosts.map((blogPost, index) => (
            <div className="grid-col-span-1" key={index}>
              <div className="flex flex-col gap-[13px] h-full items-start justify-start w-full">
                <div className="w-[315px] h-[260px]">
                  <Image
                    src={blogPost.postImage.image.url}
                    width={blogPost.postImage.image.width}
                    height={blogPost.postImage.image.height}
                    className=" m-auto object-cover rounded-[16px] w-full duration-500 ease-in-out transform bg-center bg-cover hover:scale-110"
                    alt={blogPost.postImage.imageAlt}
                  />
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-col justify-start items-start gap-2">
                    <span className="font-normal not-italic text-base text-blue_900_01 text-left w-auto">
                      {format(parseISO(blogPost.publishedDate), 'dd MMMM yyyy')}
                    </span>
                    <span className="font-bold  text-xl text-gray_900_02 text-left">
                      {blogPost.title}
                    </span>
                  </div>
                  <p className="font-normal leading-[28.00px] md:max-w-full max-w-screen-sm not-italic text-base text-gray_600 text-left">
                    {blogPost.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  blogPosts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      publishedDate: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
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