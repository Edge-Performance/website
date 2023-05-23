import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types';

export default function PmFocus({headerSection,bodySectionCollection,imageSection}) {
  return (
      <section className="bg-gradient flex items-center justify-center w-full ">
        <div className="flex flex-col items-start justify-start sm:flex-row sm:items-center sm:justify-between gap-10 sm:gap-0 w-full mx-8 my-16 sm:w-4/5 sm:p-40 sm:px-5" >
          <div className="w-full h-full rounded-md order-1 sm:order-2">
                  <Image
                    src={imageSection.url}
                    width={imageSection.width}
                    height={imageSection.height}
                    className=" justify-center object-cover"
                    alt="women in gym"
                  />
          </div>
          <div className="flex flex-col gap-8 items-start justify-start self-stretch w-full sm:w-4/5 mr-40 order-2 sm:order-1">
              <Image
                src={headerSection.icon.image.url}
                width={headerSection.icon.image.width}
                height={headerSection.icon.image.height}
                className=" justify-center object-cover"
                alt={headerSection.icon.imageAlt}
              />
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <h2 className="font-bold leading-[60.00px] md:max-w-full max-w-screen-sm sm:text-5xl text-2xl text-white text-left">
                {headerSection.title}
              </h2>
              <p className="font-normal leading-[28.00px] md:max-w-full max-w-screen-sm not-italic text-gray_400 text-left text-lg sm:text-3xl">
                {headerSection.subtitle}
              </p>
              </div>
              {bodySectionCollection.items.map((item, index) => (
                <div key={index} className="flex flex-col gap-1 items-start justify-start w-auto sm:w-full">
                    <h3 className='font-bold md:max-w-full max-w-screen-sm text-lg sm:text-2xl text-white text-left'>
                      {item.name}
                    </h3>
                    <p className="font-normal leading-[28.00px] md:max-w-full max-w-screen-sm not-italic text-base text-gray_400 text-left">
                      {item.description}
                    </p>
                  </div>
              ))}
          </div>
        </div>
      </section>
  )
}

PmFocus.propTypes = {
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
  imageSection: PropTypes.shape({
    url: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
};