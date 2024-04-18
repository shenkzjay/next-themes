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
import { PrimaryButton, StyleButton, TertiaryBtn } from "@/components/buttons/primarybtn";
import { StarIcon } from "@/components/svgs/star";
import { GlobeIcon } from "@/components/svgs/globe";
import { LinkArrow } from "@/components/svgs/linkarrow";
import { object } from "zod";

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
                className={`${clashDisplayFont.className} [font-size:_clamp(2.5rem,9vw,10rem)] leading-none w-[55%] font-extrabold`}
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
              <div className="flex text-2xl text-white z-50">
                <StyleButton name="GET STARTED" />
              </div>
            </div>
          </section>
        </Header>
      </section>

      {/* body section */}
      <section className="mx-auto container">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(30ch,1fr))] gap-20 ">
          <Cards>
            <h1>EXPLORE IDEAS</h1>
            <p></p>
            <Image src={Laptop} width={500} height={100} alt="laptop mockupp" />
            <div className="flex justify-center z-50">
              <StyleButton name="EXPLORE" />
            </div>
          </Cards>
          <Cards>
            {" "}
            <h1>DISCUSS IDEAS</h1>
            <p></p>
            <Image src={Laptop} width={500} height={100} alt="laptop mockupp" />
            <div className="flex justify-center z-50">
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

      {/**Our service section cards */}
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
      <section className="mx-auto container pb-[150px]">
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

      {/**bold title section */}
      <section className="pb-[150px]">
        <div className="mx-auto container ">
          <div className="text-wrapper   w-full flex justify-center items-center text-white ">
            <span
              data-buildtext="DESIGN"
              className={`${clashDisplayFont.className} w-full flex justify-center designtext  font-extrabold`}
            >
              DESIGN
            </span>

            <span
              data-buildtext="BUILD"
              className={`${clashDisplayFont.className} buildtext w-full flex justify-center  font-extrabold`}
            >
              BUILD
            </span>

            <span
              data-buildtext="TEST"
              className={`${clashDisplayFont.className} testtext w-full flex justify-center  font-extrabold`}
            >
              TEST
            </span>
            <span
              data-buildtext="DEPLOY"
              className={`${clashDisplayFont.className} deploytext w-full flex justify-center  font-extrabold`}
            >
              DEPLOY
            </span>
          </div>
        </div>
      </section>

      {/**image grid section */}
      <section className="pb-[150px]">
        <div className="mx-auto container gap-10">
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(30ch,1fr))] gap-10">
            <li className="flex relative overflow-hidden imageoverlay">
              <div className="flex flex-row rounded-tl-[99px] overflow-hidden">
                <Image
                  src={Demo}
                  width={500}
                  height={300}
                  alt="demo image"
                  className="object-cover w-full"
                />
              </div>
              <div className="flex textoverlay absolute top-0 flex-col justify-between h-full w-full rounded-tl-[99px]">
                <div className="absolute top-0 left-0 w-full h-full rounded-tl-[99px] bg-black/50"></div>
                <div className="absolute flex flex-col w-full justify-between h-full">
                  <div className="relative flex justify-center items-center">
                    <div className="arrow">
                      <LinkArrow fill="fill-gray-900" />
                    </div>
                  </div>
                  <div className="text-white text-slide-up p-10">
                    <div className=" overflow-hidden ">
                      <div className={`${clashDisplayFont.className} font-semibold text-5xl`}>
                        2022
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <div className={`${clashDisplayFont.className} font-semibold text-5xl`}>
                        The greatest
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="flex relative overflow-hidden imageoverlay h-[50vh] md:col-span-2">
              <div className="flex flex-row rounded-bl-[99px] overflow-hidden w-full">
                <Image
                  src={Demo}
                  width={500}
                  height={300}
                  alt="demo image"
                  className="object-cover w-full"
                />
              </div>
              <div className="flex textoverlay absolute top-0 flex-col justify-between h-full w-full rounded-tl-[99px]">
                <div className="absolute top-0 left-0 w-full h-full rounded-bl-[99px] bg-black/50"></div>
                <div className="absolute flex flex-col w-full justify-between h-full">
                  <div className="relative flex justify-center items-center">
                    <div className="arrow">
                      <LinkArrow fill="fill-gray-900" />
                    </div>
                  </div>
                  <div className="text-white text-slide-up p-10">
                    <div className=" overflow-hidden ">
                      <div className={`${clashDisplayFont.className} font-semibold text-5xl`}>
                        2022
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <div className={`${clashDisplayFont.className} font-semibold text-5xl`}>
                        The Best
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="flex relative overflow-hidden imageoverlay h-[50vh]">
              <div className="flex flex-row rounded-l-[99px] overflow-hidden">
                <Image
                  src={Demo}
                  width={500}
                  height={300}
                  alt="demo image"
                  className="object-cover w-full"
                />
              </div>
              <div className="flex textoverlay absolute top-0 flex-col justify-between h-full w-full rounded-tl-[99px]">
                <div className="absolute top-0 left-0 w-full h-full rounded-l-[99px] bg-black/50"></div>
                <div className="absolute flex flex-col w-full justify-between h-full">
                  <div className="relative flex justify-center items-center">
                    <div className="arrow">
                      <LinkArrow fill="fill-gray-900" />
                    </div>
                  </div>
                  <div className="text-white text-slide-up p-10">
                    <div className=" overflow-hidden ">
                      <div className={`${clashDisplayFont.className} font-semibold text-5xl`}>
                        2023
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <div className={`${clashDisplayFont.className} font-semibold text-5xl`}>
                        The Exploit
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="flex relative overflow-hidden imageoverlay h-[50vh]">
              <div className="flex flex-row rounded-b-[99px] overflow-hidden">
                <Image
                  src={Demo}
                  width={500}
                  height={300}
                  alt="demo image"
                  className="object-cover w-full"
                />
              </div>
              <div className="flex textoverlay absolute top-0 flex-col justify-between h-full w-full rounded-tl-[99px]">
                <div className="absolute top-0 left-0 w-full h-full rounded-b-[99px] bg-black/50"></div>
                <div className="absolute flex flex-col w-full justify-between h-full">
                  <div className="relative flex justify-center items-center">
                    <div className="arrow">
                      <LinkArrow fill="fill-gray-900" />
                    </div>
                  </div>
                  <div className="text-white text-slide-up p-10">
                    <div className=" overflow-hidden ">
                      <div className={`${clashDisplayFont.className} font-semibold text-5xl`}>
                        2024
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <div className={`${clashDisplayFont.className} font-semibold text-5xl`}>
                        The Unknown
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="flex relative overflow-hidden imageoverlay h-[50vh]">
              <div className="flex flex-row rounded-tl-[99px] rounded-br-[99px] overflow-hidden">
                <Image
                  src={Demo}
                  width={500}
                  height={300}
                  alt="demo image"
                  className="object-cover w-full"
                />
              </div>
              <div className="flex textoverlay absolute top-0 flex-col justify-between h-full w-full rounded-tl-[99px]">
                <div className="absolute top-0 left-0 w-full h-full rounded-tl-[99px] rounded-br-[99px] bg-black/50"></div>
                <div className="absolute flex flex-col w-full justify-between h-full">
                  <div className="relative flex justify-center items-center">
                    <div className="arrow">
                      <LinkArrow fill="fill-gray-900" />
                    </div>
                  </div>
                  <div className="text-white text-slide-up p-10">
                    <div className=" overflow-hidden ">
                      <div className={`${clashDisplayFont.className} font-semibold text-5xl`}>
                        2025
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <div className={`${clashDisplayFont.className} font-semibold text-5xl`}>
                        The Domino Effect
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/**contact card section */}
      <section className="pb-[150px]">
        <div className="bg-[linear-gradient(#fc8cfc,#D88DFC)] mx-auto container rounded-b-[100px] p-16">
          <div className=" flex flex-col justify-center gap-20 ">
            <div className="flex flex-row justify-center items-center">
              <span className="flex w-1/3 h-1 bg-black"></span>
              <span className="flex w-1/3 justify-center items-center">
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </span>
              <span className="flex w-1/3 h-1 bg-black"></span>
            </div>
            <div className="w-full flex justify-center">
              <h2
                className={`${clashDisplayFont.className} w-2/3 text-center [font-size:_clamp(2rem,5vw,4.5rem)] font-extrabold uppercase flex justify-center leading-none`}
              >
                Tell us about your idea
              </h2>
            </div>

            <div className="flex justify-center">
              <div className="text-black text-2xl ">
                <TertiaryBtn name="GET IN TOUCH " />
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </section>

      {/**footer section */}

      <footer className="text-white mx-auto container pb-[150px]">
        <section className="flex flex-row justify-between uppercase">
          <div>© Copyright 2024</div>
          <div>✨ A landing page theme project ✨</div>
          <div>more exciting projects →</div>
        </section>
      </footer>
    </main>
  );
}
