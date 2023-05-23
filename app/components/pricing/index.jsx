import Button from "../button"
import PricingCard from "./pricing-card"
import PropTypes from 'prop-types';

export default function PricingSection({ sectionTitle, sectionButton, personalUse, teamUse }) {
  return (
    <section className="bg-gradient flex flex-col items-center justify-start w-full h-auto sm:h-[549px]">
      <div
        className="bg-cover bg-no-repeat flex flex-col h-auto sm:h-[549px] items-center justify-start px-8 py-24  sm:p-[110px]  sm:px-5 w-full"
        style={{ backgroundImage: "url('images/stroke.svg')" }}
        >
        <div className="flex flex-col sm:flex-row items-center justify-between max-w-[1302px] mx-auto w-full gap-8 sm:gap-0">
          <div className="flex flex-col gap-12 items-start justify-center self-stretch sm:w-auto w-full">
            <div className="flex flex-col items-start justify-center self-stretch w-auto gap-2 sm:gap-4">
              <span className="font-bold text-amber_A400 text-base text-left w-auto">Download</span>
                <p className="font-medium leading-[60.00px] max-w-[345px] sm:max-w-full sm:text-5xl text-2xl text-left text-white_A700">
                  {sectionTitle}
                </p>
            </div>
            <Button
              className="hidden sm:block bg-indigo_900_04 "
              text= {sectionButton.text}
              url={sectionButton.url}
              textColor={"white"}
              />
          </div>
          <div className="flex flex-col sm:flex-row gap-10 h-full w-full sm:w-[60%]">
            <PricingCard {...personalUse} />
            <PricingCard {...teamUse} />
          </div>
          <Button
              className="block sm:hidden bg-indigo_900_04 w-full"
              text=" Learn More"
              url="/about"
              textColor={"white"}
              />
        </div>
      </div>
    </section>
  )
}

PricingSection.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  sectionButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  personalUse: PropTypes.shape({
    hook: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    annualPrice: PropTypes.number.isRequired,
    monthlyPrice: PropTypes.number,
    ctaButton: PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  teamUse: PropTypes.shape({
    hook: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    annualPrice: PropTypes.number.isRequired,
    monthlyPrice: PropTypes.number,
    ctaButton: PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};