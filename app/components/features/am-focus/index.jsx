import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types';


export default function AmFocus({headerSection,bodySectionCollection,sectionImage}) {
  return (
  <section className="bg-white flex items-center justify-center sm:p-40 w-full ">
      <div className="flex flex-col sm:flex-row items-start justify-start sm:justify-between gap-10 w-full sm:w-[85%] h-full mx-8 mt-10 mb-12" >
        <div className="flex flex-col items-start justify-start self-stretch gap-6 sm:gap-8 order-2 sm:order-1">
          <div className='flex flex-col gap-2'>
              <Image
                src={headerSection.icon.image.url}
                width={headerSection.icon.image.width}
                height={headerSection.icon.image.height}
                className=" justify-center object-cover"
                alt={headerSection.icon.imageAlt}
              />
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <h2 className="font-medium sm:leading-[60.00px] md:max-w-full max-w-screen-sm text-2xl sm:text-5xl text-gray_900_02 text-left">
                {headerSection.title}
              </h2>
              <p className="font-normal sm:leading-[28.00px] md:max-w-full max-w-screen-sm not-italic text-gray_600 text-left text-lg sm:text-3xl">
                {headerSection.subtitle}
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            {bodySectionCollection.items.map((item, index) => (
                <div key={index} className="flex flex-col gap-1 items-start justify-start w-auto sm:w-full">
                    <h3 className='font-bold sm:font-medium  md:max-w-full max-w-screen-sm text-lg sm:text-2xl text-gray_900_02 text-left'>
                      {item.name}
                    </h3>
                    <p className="font-normal sm:leading-[28.00px] md:max-w-full max-w-screen-sm not-italic text-[22px] text-gray_600 text-left sm:text-lg md:text-base">
                      {item.description}
                    </p>
                  </div>
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-8 items-start justify-start self-stretch w-full h-full rounded-md order-1 sm:order-2">
                <Image
                  src={sectionImage.url}
                  width={sectionImage.width}
                  height={sectionImage.height}
                  className=" justify-center object-cover"
                  alt="intro"
                />
        </div>
      </div>
  </section>
  )
}

AmFocus.propTypes = {
  headerSection: PropTypes.shape({
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
  }).isRequired,
  bodySectionCollection: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  sectionImage: PropTypes.shape({
    url: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
};