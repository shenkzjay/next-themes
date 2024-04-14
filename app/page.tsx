"use client";

import { Cards } from "@/components/cards";
import { Header } from "@/components/header";
import Demo from "../public/images/max1.jpeg";
import Image from "next/image";
import { Settings } from "@/components/icons/settings";
import { useEffect, useRef, useState } from "react";
import { Banny } from "@/components/icons/banny";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "@/components/icons/arrowright";
import Laptop from "../public/images/laptop.png";
import localFont from "next/font/local";
import { PrimaryButton, StyleButton } from "@/components/buttons/primarybtn";
import { StarIcon } from "@/components/svgs/star";
import { GlobeIcon } from "@/components/svgs/globe";
import { LinkArrow } from "@/components/svgs/linkarrow";

const clashDisplayFont = localFont({
  src: [
    {
      path: "./fonts/ClashDisplay-Bold.woff",
      weight: "800",
    },
    {
      path: "./fonts/ClashDisplay-Extralight.woff",
      weight: "300",
    },
    {
      path: "./fonts/ClashDisplay-Light.woff",
      weight: "400",
    },
    {
      path: "./fonts/ClashDisplay-Medium.woff",
      weight: "600",
    },
    {
      path: "./fonts/ClashDisplay-Regular.woff",
      weight: "500",
    },
    {
      path: "./fonts/ClashDisplay-Semibold.woff",
      weight: "700",
    },
  ],
  display: "swap",
});

export default function App() {
  return (
    <main className="bg-[#1e1e1e]">
      {/* Header section */}
      <section className="">
        <Header>
          <section className="flex flex-col justify-center item-center space-y-10">
            <div className="flex justify-between flex-row gap-20">
              <div
                className={`${clashDisplayFont.className} text-[10rem] leading-none w-[55%] font-extrabold`}
              >
                <h1>DIGITIZE IDEAS</h1>
              </div>
              <div
                className={`${clashDisplayFont.style} text-xl w-[45%] flex flex-col items-end justify-between`}
              >
                <p>
                  The art of visual communication, creatively impacting the world around us—one good
                  design at a time, design like you mean it!
                </p>

                <div className="flex w-full justify-around">
                  <span className="">
                    <StarIcon />
                  </span>
                  <span className="">
                    <StarIcon />
                  </span>
                  <span className="">
                    <StarIcon />
                  </span>
                </div>

                <p>
                  The art of visual communication, creatively impacting the world around us—one good
                  design at a time, design like you mean it!
                </p>
              </div>
            </div>
            <div>
              <div className="flex text-2xl">
                <StyleButton name="GET STARTED" />
              </div>
            </div>
          </section>
        </Header>
      </section>

      {/* body section */}
      <section className="mx-auto container">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(30ch,1fr))] gap-20">
          <Cards>
            <h1>EXPLORE IDEAS</h1>
            <p></p>
            <Image src={Laptop} width={500} height={100} alt="laptop mockupp" />
            <div className="flex justify-center">
              <StyleButton name="EXPLORE" />
            </div>
          </Cards>
          <Cards>
            {" "}
            <h1>DISCUSS IDEAS</h1>
            <p></p>
            <Image src={Laptop} width={500} height={100} alt="laptop mockupp" />
            <div className="flex justify-center">
              <StyleButton name="CHAT WITH US" />
            </div>
          </Cards>
        </div>
      </section>

      {/**Scrolltrigger maquee section */}
      <section>
        <div
          className={`flex flex-row text-nowrap items-center text-white text-6xl space-x-10 overflow-hidden py-[150px] font-bold ${clashDisplayFont.className}`}
        >
          <span>
            {" "}
            <StarIcon />
          </span>
          <p>DISCUSS YOUR IDEAS</p>
          <span>
            <StarIcon />
          </span>
          <p>WE DIGITIZE YOUR IDEAS </p>
          <span>
            {" "}
            <StarIcon />
          </span>
        </div>
      </section>

      {/**Our service section */}
      <section>
        <div className="flex justify-between text-white gap-20 mx-auto container">
          <div className="w-[60%]">
            <h2 className={`${clashDisplayFont.className} text-8xl font-bold`}>OUR SERVICES</h2>
            <p>
              Every one of us loves something different. So, explore the world through the lens of
              our visual capabilities, and find what you love
            </p>
          </div>
          <div className="w-[30%] flex h-11 gap-6 flex-wrap">
            <div className="flex ">
              <div className="flex gap-4 border border-white px-4 py-2 rounded-full">
                <span>
                  <GlobeIcon />
                </span>
                <p>Design</p>
              </div>
            </div>
            <div className="flex ">
              <div className="flex gap-4 border border-white px-4 py-2 rounded-full">
                <span>
                  <GlobeIcon />
                </span>
                <p>Development</p>
              </div>
            </div>
            <div className="flex ">
              <div className="flex gap-4 border border-white px-4 py-2 rounded-full">
                <span>
                  <GlobeIcon />
                </span>
                <p>Digital marketing</p>
              </div>
            </div>
            <div className="flex ">
              <div className="flex gap-4 border border-white px-4 py-2 rounded-full">
                <span>
                  <GlobeIcon />
                </span>
                <p>SEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/**Service list section */}
      <section className="mx-auto container py-[150px]">
        <ul className="listwrapper ">
          <li className="flex list relative justify-between items-center border-y border-gray-700/50 py-12 px-8">
            <div>
              <div className="slide-up flex flex-col">
                <span
                  className={`${clashDisplayFont.className} w-full font-bold text-nowrap text-gray-600 text-6xl`}
                >
                  UIUX DESIGN
                </span>
                <span
                  className={`${clashDisplayFont.className} secondspan font-semibold text-gray-600 text-6xl`}
                >
                  UIUX DESIGN
                </span>
              </div>
            </div>

            <div className="slide-image absolute bottom-0 right-[10%] overflow-hidden">
              <div className="">
                <Image src={Laptop} height={300} width={400} alt="laptop mockup" className="" />
              </div>
            </div>

            <div className="relative flex justify-center items-center">
              <div className="arrow">
                <LinkArrow fill="fill-gray-900" />
              </div>
              <div>
                {" "}
                <LinkArrow fill="fill-gray-600" />
              </div>
            </div>
          </li>
          <li className="flex list relative justify-between items-center border-b border-gray-700/50 py-12 px-8">
            <div>
              <div className="slide-up flex flex-col">
                <span
                  className={`${clashDisplayFont.className} w-full font-bold text-nowrap text-gray-600 text-6xl`}
                >
                  DEVELOPMENT
                </span>
                <span
                  className={`${clashDisplayFont.className} secondspan font-semibold text-gray-600 text-6xl`}
                >
                  DEVELOPMENT
                </span>
              </div>
            </div>

            <div className="slide-image absolute bottom-0 right-[10%] overflow-hidden">
              <div className="">
                <Image src={Laptop} height={300} width={400} alt="laptop mockup" className="" />
              </div>
            </div>

            <div className="relative flex justify-center items-center">
              <div className="arrow">
                <LinkArrow fill="fill-gray-900" />
              </div>
              <div>
                {" "}
                <LinkArrow fill="fill-gray-600" />
              </div>
            </div>
          </li>
          <li className="flex list relative justify-between items-center border-b border-gray-700/50 py-12 px-8">
            <div>
              <div className="slide-up flex flex-col">
                <span
                  className={`${clashDisplayFont.className} w-full font-bold text-nowrap text-gray-600 text-6xl`}
                >
                  SEO
                </span>
                <span
                  className={`${clashDisplayFont.className} secondspan font-semibold text-gray-600 text-6xl`}
                >
                  SEO
                </span>
              </div>
            </div>

            <div className="slide-image absolute bottom-0 right-[10%] overflow-hidden">
              <div className="">
                <Image src={Laptop} height={300} width={400} alt="laptop mockup" className="" />
              </div>
            </div>

            <div className="relative flex justify-center items-center">
              <div className="arrow">
                <LinkArrow fill="fill-gray-900" />
              </div>
              <div>
                {" "}
                <LinkArrow fill="fill-gray-600" />
              </div>
            </div>
          </li>
          <li className="flex list relative justify-between items-center border-b border-gray-700/50 py-12 px-8">
            <div>
              <div className="slide-up flex flex-col">
                <span
                  className={`${clashDisplayFont.className} w-full font-bold text-nowrap text-gray-600 text-6xl`}
                >
                  MARKETING
                </span>
                <span
                  className={`${clashDisplayFont.className} secondspan font-semibold text-gray-600 text-6xl`}
                >
                  MARKETING
                </span>
              </div>
            </div>

            <div className="slide-image absolute bottom-0 right-[10%] overflow-hidden">
              <div className="">
                <Image src={Laptop} height={300} width={400} alt="laptop mockup" className="" />
              </div>
            </div>

            <div className="relative flex justify-center items-center">
              <div className="arrow">
                <LinkArrow fill="fill-gray-900" />
              </div>
              <div>
                {" "}
                <LinkArrow fill="fill-gray-600" />
              </div>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
