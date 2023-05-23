import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types';

export default function BenefitCard({ icon, title, subtitle }) {
  return (
    <div className="flex gap-6 items-start justify-start w-full">
    <Image src={icon.image.url} width={icon.image.width} height={icon.image.height} alt={icon.imageAlt} />
    <div className="flex flex-col gap-1 items-start justify-start w-full">
      <h4 className="font-medium text-[22px] text-left text-white_A700 text-2xl w-auto">
        {title}
      </h4>
      <p className="font-normal leading-[20.00px] max-w-[428px] md:max-w-full not-italic text-base text-gray_600_01 text-left">
        {subtitle}
      </p>
    </div>
  </div>
  )
}

BenefitCard.propTypes = {
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
};