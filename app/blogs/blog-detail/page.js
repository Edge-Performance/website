import RelatedPosts from '@/app/components/blog/related-posts';
import BlogPostDetail from '@/app/components/blog/blog-post-detail';

export default function BlogDetail() {
  const relatedPosts = [
    {
      blogTitle: 'Wellness is the precursor to peak performance',
      blogDescription:
        'Lorem ipsum dolor sit amet consectetur. Vitae bibendum fames pulvinar et aliquam erat id id pellentesque. Posuere interdum sed odio.',
      postedAt: 'Date: 16 Feb 2023',
      imgSrc: '/images/blogs/blog1.jpg',
      imgAlt: 'blog1',
    },
    {
      blogTitle:
        'Peak performance is created from wellness, not the other way around',
      blogDescription:
        'Lorem ipsum dolor sit amet consectetur. Vitae bibendum fames pulvinar et aliquam erat id id pellentesque. Posuere interdum sed odio.',
      postedAt: 'Date: 16 Feb 2023',
      imgSrc: '/images/blogs/blog2.jpg',
      imgAlt: 'blog1',
    },
    {
      blogTitle:
        'The performance world has changed. We now understand the benefits of mental training.',
      blogDescription:
        'Lorem ipsum dolor sit amet consectetur. Vitae bibendum fames pulvinar et aliquam erat id id pellentesque. Posuere interdum sed odio.',
      postedAt: 'Date: 16 Feb 2023',
      imgSrc: '/images/blogs/blog3.jpg',
      imgAlt: 'blog1',
    },
    {
      blogTitle:
        'Training for the modern athlete has evolved to include the mind as well as the body.',
      blogDescription:
        'Lorem ipsum dolor sit amet consectetur. Vitae bibendum fames pulvinar et aliquam erat id id pellentesque. Posuere interdum sed odio.',
      postedAt: 'Date: 16 Feb 2023',
      imgSrc: '/images/blogs/blog4.jpg',
      imgAlt: 'blog1',
    },
  ];

  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between w-full">
      <BlogPostDetail />
      <RelatedPosts relatedPosts={relatedPosts} />
    </main>
  );
}
