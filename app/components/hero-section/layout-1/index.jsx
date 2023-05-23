import React from 'react'
import Image from 'next/image'
import Button from '../../button'
import PropTypes from 'prop-types';

export default function HeroSection({ imgSrc, imgAlt, title, ctaText, ctaUrl,subTitle }) {
  return (
    <section className="h-screen relative mx-auto w-full">
        <div className=" w-full overflow-hidden z-10">
          <Image
            src={imgSrc}
            className="m-auto object-cover "
            fill
            alt={imgAlt} />
          <div className="absolute top:10 left:10 sm:top-0 sm:left-0 h-full w-full bg-indigo_900_ed opacity-75"></div>
        </div>
          
        <div className="absolute inset-0 overflow-hidden flex flex-col sm:flex-row  items-center justify-center">
        <div className="flex flex-col items-center justify-between sm:justify-center gap-96 sm:gap-10 w-4/5 sm:w-full">
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-10">
            <h1 className="font-medium capitalize  text-center text-4xl sm:text-6xl md:text-7xl text-white_A700 sm:leading-[70.00px] sm:tracking-[-3.30px]">
              {title}
            </h1>
            <h2 className="font-medium capitalize text-center text-xl sm:text-3xl md:text-4xl text-white_A700 sm:leading-[70.00px] sm:tracking-[-3.30px]">
              {subTitle}
            </h2>
          </div>
            <Button url={ctaUrl} className="bg-amber_A400 text-black w-full sm:w-[10%]" text={ctaText} />
              </div>
          <div className="hidden sm:block absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <Image
              src="/icons/arrow-down-outline.svg"
              className="h-8"
              height={18}
              width={26}
              alt="arrowdown"
            />
          </div>
        </div>
    </section>
  )
}

HeroSection.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ctaText: PropTypes.string.isRequired,
  ctaUrl: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};