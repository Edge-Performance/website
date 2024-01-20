"use client"

import React,{useState,useCallback,useEffect} from 'react'
import Image from "next/image";
import { parseISO, format } from "date-fns";
import InfiniteScroll from 'react-infinite-scroll-component';
import useScreenWidth from '../../hooks/use-screen-width.js';
import Link from 'next/link.js';

export default function InfiniteScrollGrid({posts}) {
  const screenWidth = useScreenWidth();
  const [items, setItems] = useState(posts.slice(0, 4));
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (screenWidth > 700) {
      setItems(posts.slice(0, 8));
      (posts.length <= 4) ? setHasMore(false) : setHasMore(true)  
    }
    else {
      setItems(posts.slice(0, 2));
      (posts.length <= 2) ? setHasMore(false) : setHasMore(true)  
    }
  }, [posts, screenWidth]);

  const fetchData = useCallback(() => {
    if (screenWidth > 700) setItems(items.concat(posts.slice(items.length, items.length + 4)));
    else setItems(items.concat(posts.slice(items.length, items.length + 2)));
    return;
  }, [items, posts, screenWidth]);
  return (
    <InfiniteScroll
        dataLength={items.length}
        next={fetchData}
        hasMore={hasMore}
        style={{overflow:'none'}}
        loader={ 
          <div/>
        }
      >
        <div className="flex flex-col items-center justify-center sm:justify-start sm:items-start sm:grid sm:grid-cols-4 gap-8 w-full">
            {items.map((blogPost, index) => (
                <div className="grid-col-span-1" key={index}>
                  <div className="flex flex-col gap-[13px] h-full items-start justify-start w-full">
                      <Link href={`/blogs/${blogPost.slug}/${blogPost.blogDetail.sys.id}`}>
                        <div className="w-[310px] h-[260px]">
                            <Image
                                src={blogPost.postImage.image.url}
                                width={blogPost.postImage.image.width}
                                height={blogPost.postImage.image.height}
                                className=" m-auto object-cover rounded-[16px] w-full bg-center bg-cover "
                                alt={blogPost.postImage.imageAlt}
                            />
                        </div>
                      </Link>
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <div className="flex flex-col justify-start items-start gap-2">
                              <span className="font-normal not-italic text-base text-blue_900_01 text-left w-auto">
                                  {format(
                                      parseISO(
                                          blogPost.publishedDate
                                      ),
                                      "dd MMMM yyyy"
                                  )}
                              </span>
                              <span className="font-bold text-[22px] text-gray_900_02 text-left max-w-[315px]">
                                  {blogPost.title}
                              </span>
                          </div>
                          <p className="font-normal leading-[28.00px] max-w-[315px] not-italic text-base text-gray_600 text-left">
                              {blogPost.description}
                          </p>
                      </div>
                    </div>
                </div>
            ))}
        </div>
    </InfiniteScroll>
  )
}
