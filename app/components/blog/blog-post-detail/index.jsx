import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS,MARKS,INLINES } from "@contentful/rich-text-types";
export default function BlogPostDetail({ blogDetail }) {
    const options = {
        renderMark: {
            [MARKS.BOLD]: (text) => <span className="font-bold leading-[30px] tracking-[-5.5%] text-2xl text-gray_900_02 text-left">{text}</span>,
          },
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => (
            <p className="font-normal leading-[30px] tracking-[-5.5%] md:max-w-full max-w-screen-sm not-italic text-xl text-gray_600 text-left">{children}</p>
          ),
          [BLOCKS.HEADING_1]: (node, children) => (
            <h1 className="font-medium leading-9 sm:leading-[60px] tracking-[-5.5%] md:max-w-full max-w-screen-sm not-italic sm:text-5xl md:text-[46px] text-5xl text-gray_900_02 text-left">{children}</h1>
            
          ),
          [BLOCKS.HEADING_2]: (node, children) => (
            <h2 className="font-medium leading-8 sm:leading-[48px] tracking-[-5.5%] md:max-w-full max-w-screen-sm not-italic text-2xl sm:text-4xl text-gray_900_02 text-left">{children}</h2>
          ),
          [BLOCKS.HEADING_3]: (node, children) => (
            <h3 className="font-bold sm:text-xl leading-[30px] tracking-[-5.5%] md:max-w-full max-w-screen-sm not-italic text-lg text-gray_900_02 text-left">{children}</h3>
          ),
          [INLINES.HYPERLINK]: (node, children) => {
            return <a href={node.data.uri}>{children}</a>;
          },
        },
      };
    return (
        <section className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col justify-start items-start w-[85%] sm:w-[45%] mt-20 mb-20 sm:mb-32 mx-auto gap-10">
                <div className="flex flex-col justify-start items-start gap-4 w-full">
                    <h1 className="font-bold leading-[48px] sm:leading-[58px] tracking-[-5.5%] text-4xl sm:text-5xl text-gray_900_02 text-left">
                        {blogDetail.blogTitle}
                    </h1>
                    <p className="font-normal leading-6 sm:tracking-[-5.5%] md:max-w-full max-w-screen-sm not-italic text-lg text-gray_600 text-left">
                        {blogDetail?.description}
                    </p>
                </div>
                <div className="w-full">
                    {blogDetail?.mainBlogImage?.url && (<Image
                        src={blogDetail?.mainBlogImage?.url}
                        className="object-cover rounded-3xl w-full"
                        width={420}
                        height={272}
                        alt={""}
                    />)}
                </div>
               <div className="flex flex-col gap-3">
                {documentToReactComponents(blogDetail.paragraph1.json, options)}
               </div>
                <div className="flex flex-col items-start justify-start gap-6 w-full">
                    <h3 className="font-bold leading-[30px] tracking-[-5.5%] text-3xl text-gray_900_02 text-left">
                        {blogDetail.subtitle}
                    </h3>
                    <div className="flex flex-col gap-3">
                        {documentToReactComponents(blogDetail.paragraph2.json, options)}
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-5 w-full">
                    <div className="flex flex-col items-start justify-start gap-4 sm:gap-8 w-full">
                        <div className="w-full rounded-3xl">
                            <Image
                                src={
                                    blogDetail.blogPostImagesCollection.items[0]
                                        .url
                                }
                                className="object-cover rounded-[16px] w-full"
                                width={420}
                                height={272}
                                alt={""}
                            />
                        </div>

                        <div className="flex flex-col justify-start items-start gap-6 w-full">
                            <span className="font-bold leading-[30px] tracking-[-5.5%] text-3xl text-gray_900_02 text-left">
                                {blogDetail?.image1Title}
                            </span>
                            <p className="font-normal leading-[30px] tracking-[-5.5%] md:max-w-full max-w-screen-sm not-italic text-xl text-gray_600 text-left">
                                {blogDetail?.imagesDescription && blogDetail?.imagesDescription[0]}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 sm:gap-8 w-full">
                        <div className="w-full rounded-3xl">
                            {blogDetail?.blogPostImagesCollection?.items[1]?.url && (
                            <Image
                                src={
                                    blogDetail?.blogPostImagesCollection?.items[1]
                                        ?.url
                                }
                                className="object-cover rounded-[16px] w-full"
                                width={420}
                                height={272}
                                alt={""}
                            />)}
                        </div>
                        <div className="flex flex-col justify-start items-start gap-2 sm:gap-6 w-full">
                            <span className="font-bold leading-[30px] tracking-[-5.5%] text-3xl text-gray_900_02 text-left">
                                {blogDetail?.image1Title}
                            </span>
                            <p className="font-normal leading-[30px] tracking-[-5.5%] md:max-w-full max-w-screen-sm not-italic text-xl text-gray_600 text-left">
                                { blogDetail?.imagesDescription &&  blogDetail?.imagesDescription[1]}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                {documentToReactComponents(blogDetail.paragraph3.json, options)}
                </div>
            </div>
        </section>
    );
}
