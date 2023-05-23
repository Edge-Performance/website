import Image from "next/image"
import FeatureCard from "./features-card"
import PropTypes from 'prop-types';

export default function Features({ sectionTitle, description , features }) {
  return (
    <section className="flex items-center justify-center p-8 sm:px-5 w-full h-auto sm:h-screen bg-white">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-8 sm:gap-24 w-full sm:w-[68%]">
            <div className="w-full sm:w-[38%]">
              <Image
                src="/images/iphone.png"
                width={375}
                height={675}
                className=" justify-center object-cover"
                alt="edgeandrew mobile"
              />
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start sm:mt-0 mt-[87px] w-full">
                  <div className="flex flex-col items-center justify-start w-full gap-6 sm:gap-12">
                    <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto md:w-full">
                      <h5 className="font-bold text-base text-blue_900_01 text-left w-auto">KEY FEATURES</h5>
                      <div className="flex flex-col gap-6 items-start justify-start self-stretch w-auto md:w-full">
                        <h2 className="font-medium sm:max-w-full max-w-screen-sm text-2xl sm:text-5xl text-gray_900_02 text-left sm:leading-[60.00px]">
                          {sectionTitle}
                        </h2>
                        <p className="font-normal sm:max-w-full max-w-screen-sm not-italic text-base text-gray_600 text-left sm:text-xl sm:leading-[28.00px]">
                         {description}
                        </p>
                      </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-2 flex flex-col items-start justify-center sm:items-start sm:justify-start mt-10 w-full gap-7">
                        {
                          features?.map((feature, index ) => (
                            <FeatureCard {...feature} key={index} />
                          ))
                        }
                    </div>
                  </div>
            </div>
      </div>
    </section>
  )
}

Features.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(
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
      textColor: PropTypes.string,
    })
  ),
};