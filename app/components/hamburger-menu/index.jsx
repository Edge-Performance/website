'use client'
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import useOffcanvas from "@/app/hooks/use-offcanvas";
import CloseIcon from "../ui/icons/close";
import HamburgerIcon from "../ui/icons/hamburger";
const HamburgerMenu = () => {
  const { offcanvas, offcanvasHandler } = useOffcanvas();
  return (
      <>
        <div className={`${offcanvas ? "hidden" : "block"} sm:hidden`} onClick={offcanvasHandler}>
            <HamburgerIcon />
        </div>
      {offcanvas && (
        <div className="bg-indigo_900 flex items-center justify-center fixed top-0 left-0 w-full h-[60vh] z-10">
          <div className="flex flex-col items-center justify-start gap-14 w-[80%]">
            <ul className="flex flex-col items-center justify-start gap-2">
              <li className="font-medium text-[32px] text-white leading-[42px] text-center">
                Home
              </li>
              <li className="font-medium text-[32px] text-white leading-[42px] text-center" >
                Features
              </li>
              <li className="font-medium text-[32px] text-white leading-[42px] text-center">
                Organizations
              </li>
              <li className="font-medium text-[32px] text-white leading-[42px] text-center">
                Team
              </li>
              <li className="font-medium text-[32px] text-white leading-[42px] text-center">
                Blog
              </li>
            </ul>
            <div className="flex flex-col items-center justify-start gap-6 w-full">
              <div className="flex items-center justify-center gap-3">
                <button
                  className={`bg-indigo_900 capitalize border border-solid border-white text-white h-[34px] w-[105px] font-normal not-italic  px-[30px] py-2 rounded-[77px] text-[14px] leading-[18.2px] flex items-center justify-center`}
                  >
                    <Link
                        href={"/contact"}
                        className={`font-normal text-sm text- no-underline hover:text-bg-amber_A400`}
                    >
                        contact
                    </Link>
                </button>
                <button
                      className={`bg-amber_A400 capitalize text-black h-[34px] w-[127px] font-normal not-italic  px-[30px] py-2 rounded-[77px] text-[14px] leading-[18.2px] flex items-center justify-center`}
                  >
                    <Link
                        href={"/contact"}
                        className={`font-normal text-sm text- no-underline hover:text-bg-amber_A400`}
                    >
                        get started
                    </Link>
                </button>
              </div>
              <div className="flex items-center justify-start gap-2">
                <Image
                    src="/images/country.svg"
                    height={22}
                    width={22}
                    className="h-[22px] w-[22px]"
                    alt="computer"
                />
                <div className="flex flex-row gap-0.5 items-center justify-start self-stretch w-auto">
                    <p
                        className={`font-normal not-italic text-left text-sm text-white w-auto`}
                    >
                        En
                    </p>
                    <Image
                        src="/icons/arrow-down.svg"
                        height={4}
                        width={7}
                        alt="vector"
                    />
                </div>
                </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 mr-8 mt-8" onClick={offcanvasHandler}>
            <CloseIcon />
          </div>
          </div>
    )}
      </>
    );
};

HamburgerMenu.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func,
};

export default HamburgerMenu;
