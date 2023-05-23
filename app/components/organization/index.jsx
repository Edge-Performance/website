import Image from 'next/image'
import PropTypes from 'prop-types';

export default function IntroSection({title,description,sectionImage}) {
  return (
    <section className="bg-white flex items-center justify-center w-full">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-16 w-full sm:w-[72%] mx-8 mt-12 mb-20 sm:m-40 sm:px-5">
        <div className="flex flex-col gap-4 items-start justify-start self-stretch w-full order-2 sm-order-1">
          <h5 className="font-bold text-base text-blue_900_01 text-left w-auto">
            For Organizations
          </h5>
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <h2 className="font-medium leading-[60.00px] md:max-w-full max-w-screen-sm  text-5xl text-gray_900_02 text-left">
              {title}
            </h2>
            <p className="font-normal leading-[28.00px] md:max-w-full max-w-screen-sm not-italic text-2xl text-gray_600 text-left ">
            {description.json.content[0].content[0].value}
            </p>
          </div>
        </div>
        <div className="w-full h-full rounded-md order-1 sm-order-2">
                <Image
                  src={sectionImage.image.url}
                  width={sectionImage.image.width}
                  height={sectionImage.image.height}
                  className=" justify-center object-cover"
                  alt={sectionImage.imageAlt}
                />
        </div>
      </div>
    </section>
  )
}


IntroSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.shape({
    json: PropTypes.shape({
      content: PropTypes.arrayOf(
        PropTypes.shape({
          content: PropTypes.arrayOf(
            PropTypes.shape({
              value: PropTypes.string.isRequired,
            })
          ).isRequired,
        })
      ).isRequired,
    }).isRequired,
  }).isRequired,
  sectionImage: PropTypes.shape({
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }).isRequired,
    imageAlt: PropTypes.string.isRequired,
  }).isRequired,
};
