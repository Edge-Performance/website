import React from 'react'
import Image from 'next/image'
export default function BlogPostDetail() {
  return (
    <section className='flex flex-col items-center justify-center w-full'>
      <div className='flex flex-col justify-start items-start w-auto mx-8 my-20 sm:mx-96 gap-10'>
          <div className='flex flex-col justify-start items-start gap-4 w-full'>
              <h1 className='font-bold text-3xl text-gray_900_02 text-left'>Become the leader you would follow.</h1>
              <p className='font-normal leading-[28.00px] md:max-w-full max-w-screen-sm not-italic text-xl text-gray_600 text-left'>Written by practicing sport psychologists, mental performance coaches and mental health counsellors working across professional and youth sport, strength and conditioning, and health and wellness.</p>
        </div>
        <div className='w-full'>
          <Image src={'/images/blogs/blog-main.jpg'} className='object-cover rounded-md w-full' width={420} height={272} alt={""} />
      </div>
        <p className='font-normal leading-[28.00px] md:max-w-full max-w-screen-sm not-italic text-xl text-gray_600 text-left'>
            Lorem ipsum dolor sit amet consectetur. Urna ut arcu vitae massa morbi ante et. Sed nisi massa volutpat augue fringilla eget sapien venenatis maecenas. Ullamcorper lorem in lorem sit pulvinar. Scelerisque neque accumsan risus quam et vitae ultrices. Elit justo id tortor cras purus ornare turpis netus lectus.
            Sed nulla leo fermentum auctor dignissim. Mauris scelerisque nec quis eleifend morbi sit. Ut pellentesque habitant eget nunc feugiat molestie. Laoreet ultrices sollicitudin malesuada a ac. Fermentum magnis vulputate pellentesque ac aliquet laoreet.

            Massa lectus aliquam ac diam scelerisque arcu tortor posuere venenatis. Facilisis eget a tristique ullamcorper quis faucibus. Cras non proin diam libero gravida cras tortor. Ipsum id a scelerisque nunc. Elementum feugiat egestas in volutpat. Odio leo porta sed imperdiet tellus iaculis cras vestibulum lobortis. Tempor lorem leo duis nec accumsan.</p>
        <div className='flex flex-col items-start justify-start gap-6 w-full'>
          <h3 className='font-bold text-3xl text-gray_900_02 text-left'>Lorem ipsum dolor sit amet consectetur.</h3>
          <p className='font-normal leading-[28.00px] md:max-w-full max-w-screen-sm not-italic text-xl text-gray_600 text-left'>Lorem ipsum dolor sit amet consectetur. Urna ut arcu vitae massa morbi ante et. Sed nisi massa volutpat augue fringilla eget sapien venenatis maecenas. Ullamcorper lorem in lorem sit pulvinar. Scelerisque neque accumsan risus quam et vitae ultrices. Elit justo id tortor cras purus ornare turpis netus lectus.</p>
          <p className='font-normal leading-[28.00px] md:max-w-full max-w-screen-sm not-italic text-xl text-gray_600 text-left'>Lorem ipsum dolor sit amet consectetur. Urna ut arcu vitae massa morbi ante et. Sed nisi massa volutpat augue fringilla eget sapien venenatis maecenas. Ullamcorper lorem in lorem sit pulvinar. Scelerisque neque accumsan risus quam et vitae ultrices. Elit justo id tortor cras purus ornare turpis netus lectus.</p>
          <p className='font-normal leading-[28.00px] md:max-w-full max-w-screen-sm not-italic text-xl text-gray_600 text-left'>Lorem ipsum dolor sit amet consectetur. Urna ut arcu vitae massa morbi ante et. Sed nisi massa volutpat augue fringilla eget sapien venenatis maecenas. Ullamcorper lorem in lorem sit pulvinar. Scelerisque neque accumsan risus quam et vitae ultrices. Elit justo id tortor cras purus ornare turpis netus lectus.</p>
        </div>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-5 w-full'>
          <div className='flex flex-col items-start justify-start gap-4 sm:gap-8 w-full'>
            <div className="w-full rounded-md">
              <Image src={'/images/blogs/blog-sm-1.jpg'} className='object-cover rounded-[16px] w-full' width={420} height={272} alt={""} />
            </div>
            
            <div className='flex flex-col justify-start items-start gap-6 w-full'>
              <span className='font-bold text-3xl text-gray_900_02 text-left'>Lorem ipsum dolor sit amet</span>
              <p className='font-normal leading-[28.00px] md:max-w-full max-w-screen-sm not-italic text-xl text-gray_600 text-left'>Lorem ipsum dolor sit amet consectetur. Urna ut arcu vitae massa morbi ante et.</p>
            </div>
          </div>
          <div className='flex flex-col items-start justify-start gap-4 sm:gap-8 w-full'>
            <div className="w-full rounded-md">
              <Image src={'/images/blogs/blog-sm-2.jpg'} className='object-cover rounded-[16px] w-full' width={420} height={272} alt={""} />
            </div>
            <div className='flex flex-col justify-start items-start gap-2 sm:gap-6 w-full'>
              <span className='font-bold text-3xl text-gray_900_02 text-left'>Lorem ipsum dolor sit amet</span>
              <p className='font-normal leading-[28.00px] md:max-w-full max-w-screen-sm not-italic text-xl text-gray_600 text-left'>Lorem ipsum dolor sit amet consectetur. Urna ut arcu vitae massa morbi ante et.</p>
            </div>
          </div>
        </div>
        <p className='font-normal leading-[28.00px] md:max-w-full max-w-screen-sm not-italic text-xl text-gray_600 text-left'>
            Lorem ipsum dolor sit amet consectetur. Urna ut arcu vitae massa morbi ante et. Sed nisi massa volutpat augue fringilla eget sapien venenatis maecenas. Ullamcorper lorem in lorem sit pulvinar. Scelerisque neque accumsan risus quam et vitae ultrices. Elit justo id tortor cras purus ornare turpis netus lectus.
            Sed nulla leo fermentum auctor dignissim. Mauris scelerisque nec quis eleifend morbi sit. Ut pellentesque habitant eget nunc feugiat molestie. Laoreet ultrices sollicitudin malesuada a ac. Fermentum magnis vulputate pellentesque ac aliquet laoreet.

            Massa lectus aliquam ac diam scelerisque arcu tortor posuere venenatis. Facilisis eget a tristique ullamcorper quis faucibus. Cras non proin diam libero gravida cras tortor. Ipsum id a scelerisque nunc. Elementum feugiat egestas in volutpat. Odio leo porta sed imperdiet tellus iaculis cras vestibulum lobortis. Tempor lorem leo duis nec accumsan.</p>
      </div>
    </section>
  )
}
