import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types';
import BenefitCard from './benefit-card'

export default function Benefits({ sectionTitle, description, benefits }) {
  return (
    
    <section className="sm:relative bg-gradient flex flex-col sm:flex-row sm:items-center sm:justify-between  px-8 pt-12 pb-0 sm:px-0 sm:pt-0 sm:p-0 w-full h-auto sm:h-screen gap-14 sm:gap-0">
      <div className="sm:relative flex flex-col items-start justify-between sm:flex-row sm:items-center sm:justify-between sm:w-4/5 sm:m-auto">
        <div className="flex flex-col gap-10 items-start justify-start w-full sm:w-1/2 sm:h-2/3">
            <div className="flex flex-col gap-4 items-start justify-start self-stretch w-full">
              <p className="font-bold text-amber_A400 text-base text-left w-auto">KEY BENEFITS</p>
              <div className="flex flex-col gap-6 items-start justify-start self-stretch w-auto md:w-full">
                <h2 className="font-medium sm:max-w-full max-w-screen-sm text-2xl sm:text-5xl text-left text-white_A700 sm:leading-[60.00px]">
                  {sectionTitle}
                </h2>
                <p className="font-normal leading-[28.00px] md:max-w-full max-w-screen-sm not-italic text-base sm:text-2xl text-gray_600 text-left">
                 {description}
                </p>
              </div>
            </div>
              <div className="flex-col gap-8 grid items-start w-full">
                  {benefits.map((benefit,index) => (
                  <BenefitCard {...benefit} key={index} />
                ))}
              </div>
        </div>
        
      </div>
      <div className="sm:absolute sm:top-[10%] sm:right-0 flex flex-col items-center justify-end">
        <Image src="/images/iPhone121.png" className="justify-center object-cover h-full" height={832} width={920} alt="edgeandrew mobile" />
      </div>
  </section>
  )
}

Benefits.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  benefits: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.shape({
        image: PropTypes.shape({
          url: PropTypes.string.isRequired,
          width: PropTypes.number.isRequired,
          height: PropTypes.number.isRequired,
        }).isRequired,
        imageAlt: PropTypes.string.isRequired,
      }).isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
    })
  ).isRequired,
};
