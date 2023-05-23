import Image from "next/image"
import PropTypes from 'prop-types';

export default function Partners({ sectionTitle, partnersLogo }) {
  return (
    <section className="bg-gray_50 flex flex-col font-aeonik items-center justify-end h-full p-8 sm:p-14 md:px-10 sm:px-5 w-full z-[1]">
      <div className="flex flex-col gap-12 items-center justify-start w-full sm:w-4/5 ">
        <h3 className="capitalize font-medium text-xl md:text-[22px] text-blue_gray_300 text-center sm:text-xl tracking-[2.64px] w-auto">
           {sectionTitle}
        </h3>
        <div className="grid grid-cols-3 items-center justify-center sm:flex sm:items-center sm:justify-between gap-10 w-full">
          {partnersLogo.map((partner, index) => (
            <div className="grid-col-span-1 sm:flex sm:items-center sm:justify-center" key={index}>
              <Image src={partner.image.url} width={partner.image.width} height={partner.image.height} alt={partner.image.imageAlt} />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}

Partners.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  partnersLogo: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.shape({
        url: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        imageAlt: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};
