"use client";

import { StyleButton } from "../buttons/primarybtn";
import localFont from "next/font/local";
import { LinkArrow } from "../svgs/linkarrow";
import { ArrowRight } from "../icons/arrowright";

const clashDisplayFont = localFont({
  src: [
    {
      path: "../../app/fonts/ClashDisplay-Bold.woff",
      weight: "800",
    },
    {
      path: "../../app/fonts/ClashDisplay-Extralight.woff",
      weight: "300",
    },
    {
      path: "../../app/fonts/ClashDisplay-Light.woff",
      weight: "400",
    },
    {
      path: "../../app/fonts/ClashDisplay-Medium.woff",
      weight: "600",
    },
    {
      path: "../../app/fonts/ClashDisplay-Regular.woff",
      weight: "500",
    },
    {
      path: "../../app/fonts/ClashDisplay-Semibold.woff",
      weight: "700",
    },
  ],
  display: "swap",
});

export const DigitNav = () => {
  return (
    <nav
      className="flex md:justify-between md:flex-row flex-col relative"
      role="navigation"
      aria-label="Main-menu"
    >
      <div className="flex justify-between" aria-labelledby="logo">
        <div className="flex"> LOGO</div>
        <a
          className="flex flex-col space-y-1 md:hidden"
          href="#menu"
          aria-label="harmburger-menu"
          role="button"
          aria-expanded="false"
          tabIndex={0}
        >
          <span className="flex w-8 h-1 bg-white rounded-full"></span>
          <span className="flex w-8 h-1 bg-white rounded-full"></span>
          <span className="flex w-8 h-1 bg-white rounded-full"></span>
        </a>
      </div>
      <ul
        id="menu"
        aria-label="main-menu"
        className="flex flex-col md:flex-row md:space-x-6 [transform:_translateX(-200%);] md:[transform:_none] target:[transform:_translateX(0%);] w-full md:w-auto bg-[purple] md:bg-transparent fixed md:relative top-0 left-0 h-full z-50 [transition:_transform_.3s_ease-out] px-6 py-10 md:p-2 gap-6"
      >
        <li
          tabIndex={0}
          role="link"
          aria-labelledby="our-approach"
          className={`${clashDisplayFont.className} group md:px-2 relative overflow-hidden flex flex-col text-4xl md:text-lg`}
        >
          <a
            role="link"
            href="#"
            className="[transform:_translateY(0%)] group-hover:[transform:_translateY(100%)] [transition:_transform_.5s_ease-in-out]"
          >
            our approach
          </a>
          <a
            aria-label="main-menu-item-our-approach"
            aria-hidden="false"
            href="#"
            role="link"
            className="font-semibold absolute [transform:_translateY(-100%)] group-hover:[transform:_translateY(0)] [transition:_transform_.5s_ease-in-out]"
          >
            our approach
          </a>
        </li>
        <li
          tabIndex={0}
          className={`${clashDisplayFont.className} group md:px-2 relative overflow-hidden flex flex-col text-4xl md:text-lg`}
        >
          <a
            aria-label="main-menu-item-our-projects"
            role="link"
            href="#"
            className="[transform:_translateY(0%)] group-hover:[transform:_translateY(100%)] [transition:_transform_.5s_ease-in-out]"
          >
            our projects
          </a>
          <a
            aria-label="main-menu-item-our-projects"
            aria-hidden="false"
            role="link"
            href="#"
            className="font-semibold absolute [transform:_translateY(-100%)] group-hover:[transform:_translateY(0)] [transition:_transform_.5s_ease-in-out]"
          >
            our projects
          </a>
        </li>
        <li
          tabIndex={0}
          className={`${clashDisplayFont.className} group md:px-2 relative overflow-hidden flex flex-col text-4xl md:text-lg`}
        >
          <a
            aria-label="main-menu-item-our-support"
            role="link"
            href="#"
            className="[transform:_translateY(0%)] group-hover:[transform:_translateY(100%)] [transition:_transform_.5s_ease-in-out]"
          >
            our support
          </a>
          <a
            aria-label="main-menu-item-our-support"
            role="link"
            href="#"
            className="font-semibold absolute [transform:_translateY(-100%)] group-hover:[transform:_translateY(0)] [transition:_transform_.5s_ease-in-out]"
          >
            our support
          </a>
        </li>
        <li
          aria-label="left-back-arrow-navigation"
          className="md:hidden flex absolute md:relative right-6 border border-white md:border-0 rounded-full"
        >
          <a
            className="md:hidden flex px-4 py-2 md:py-0 md:px-0  text-white font-bold [transform:_rotate(-180deg)]"
            href="#menuclose"
          >
            <ArrowRight />
          </a>
        </li>
        <li
          aria-label="mobile-menu-get-in-touch-button"
          className="flex md:hidden text-2xl mt-10"
          role="button"
        >
          <StyleButton name="Get in touch" />
        </li>
      </ul>
    </nav>
  );
};
