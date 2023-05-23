import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types';

export default function AdvisoryBoard({sectionTitle,advisors}) {
  return (
    <section className="bg-gradient flex items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center gap-10 w-full my-14 sm:my-32 mx-8 sm:mx-80" >
        <h2 className="font-medium leading-9 sm:leading-[70px] md:max-w-full max-w-screen-sm text-2xl sm:text-6xl text-white text-center sm:text-left">
            {sectionTitle}
        </h2>
        <div className='flex flex-col items-center justify-center sm:grid sm:grid-cols-3 sm:justify-start sm:items-start gap-6 sm:gap-20 w-full'>
            {
              advisors.map((advisor,index) => (
                <div className='flex sm:grid-col-span-1  flex-col items-center justify-center sm:items-start sm:justify-start gap-6' key={index}>
                  <div className='flex justify-center items-center rounded-md'>
                    <Image src={advisor.avatar.image.url} alt={advisor.avatar.imageAlt} width={advisor.avatar.image.width} height={advisor.avatar.image.height} className='object-cover'/>
                  </div>
                  <div className='flex flex-col justify-center items-center gap-2 px-2 sm:px-0'>
                    <span className='font-bold leading-7 sm:leading-10 md:max-w-full max-w-screen-sm text-xl sm:text-3xl text-white text-center'>
                      {advisor.name}
                    </span>
                    <p className='font-normal leading-5 sm:leading-8 md:max-w-full max-w-screen-sm not-italic text-lg sm:text-2xl text-gray_600 text-center'>
                      {advisor.position}
                    </p>
                  </div>
                </div>
              ))
            }
        </div>
      </div>
    </section>
  )
}

AdvisoryBoard.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  advisors: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.shape({
        image: PropTypes.shape({
          url: PropTypes.string.isRequired,
          width: PropTypes.number.isRequired,
          height: PropTypes.number.isRequired
        }).isRequired,
        imageAlt: PropTypes.string.isRequired
      }).isRequired,
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired
    })
  ).isRequired
};