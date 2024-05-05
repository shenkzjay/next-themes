"use client";

import { Cards } from "@/components/cards";
import { Header } from "@/components/header";
import Demo from "../public/images/max1.jpeg";
import Image from "next/image";
import Laptop from "../public/images/laptop.png";
import localFont from "next/font/local";
import { StyleButton, TertiaryBtn } from "@/components/buttons/primarybtn";
import { StarIcon } from "@/components/svgs/star";
import { GlobeIcon } from "@/components/svgs/globe";
import { LinkArrow } from "@/components/svgs/linkarrow";
import { DigitNav } from "@/components/nav/digitnav";
import { NavOverlay } from "@/components/nav/navoverlay";
import Explore from "@/public/images/explore.png";
import UI from "@/public/images/ui.png";
import SEO from "@/public/images/seo.png";
import DEV from "@/public/images/dev.png";
import ADS from "@/public/images/ads.png";
import Chat from "@/public/images/chat us.png";

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
      <section className="scroller">
        <Header>
          <section className="flex flex-col space-y-10 md:space-y-0 h-full ">
            <section className="pt-10">
              <DigitNav />
              {/* <div className="delay_display">
                <NavOverlay />
              </div> */}
            </section>
            <div className="flex justify-between flex-col  md:flex-row gap-20 pt-24 md:pt-0">
              <div
                className={`${clashDisplayFont.className} [font-size:_clamp(4rem,7vw,10rem)] md:leading-tight leading-none  md:w-[55%] font-extrabold md:pt-32`}
              >
                <span>
                  <span className={`${clashDisplayFont.className} font-extralight`}>FROM</span>{" "}
                  VISION <br />{" "}
                  <span className={`${clashDisplayFont.className} font-extralight`}>TO</span> PIXELS
                </span>

                <div>
                  <div className="flex text-2xl text-white z-10 relative mt-10">
                    <StyleButton name="GET STARTED" />
                  </div>
                </div>
              </div>

              <div className={`${clashDisplayFont.style} text-xl md:w-[45%] h-[110vmin]`}>
                <div className="bg-effect">
                  <div className="pendulum"></div>
                </div>
                {/* <p>
                  The art of visual communication, creatively impacting the world around us—one good
                  design at a time, design like you mean it!
                </p>

                <div className="flex w-full justify-center">
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
                </p> */}
              </div>
            </div>
          </section>
        </Header>
      </section>

      {/* body section */}
      <section className="md:mx-auto md:container   md:pt-0 mx-6">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(30ch,1fr))] gap-20 ">
          <Cards>
            <h1 className="[font-size:_clamp(1rem,5vw,2rem)]">EXPLORE OUR PIXELS</h1>

            <div className="imageghost flex justify-end mt-10">
              <Image
                src={Explore}
                width={400}
                height={100}
                alt="laptop mockup"
                role="graphics-document"
                aria-label="laptop mockup screen displaying blanks"
              />
            </div>
            <div className="flex justify-center z-50">
              <StyleButton name="EXPLORE" />
            </div>
          </Cards>
          <Cards>
            {" "}
            <h1 className="[font-size:_clamp(1rem,5vw,2rem)]">DISCUSS YOUR VISION</h1>
            <div className="imageghost_two flex mt-10">
              <Image
                src={Chat}
                width={400}
                height={100}
                alt="laptop mockupp"
                role="graphics-document"
                aria-label="laptop mockup screen displaying blanks"
              />
            </div>
            <div className="flex justify-center z-50">
              <StyleButton name="CHAT US" />
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
        <div className="flex md:flex-row flex-col justify-between text-white gap-20 md:mx-auto md:container mx-6 mb-[150px] md:mb-0">
          <div className="md:w-[60%]">
            <h2
              className={`${clashDisplayFont.className} [font-size:_clamp(2rem,10vw,6rem)] font-bold`}
            >
              OUR SERVICES
            </h2>
            <p>
              Every one of us loves something different. So, explore the world through the lens of
              our visual capabilities, and find what you love
            </p>
          </div>
          <div className="md:w-[30%] flex h-11 gap-6 flex-wrap">
            <div className="flex flex-wrap text-gray-400">
              <div className="flex gap-4 border border-gray-500 px-4 py-2 rounded-full">
                <span className="">
                  <GlobeIcon />
                </span>
                <p>Design</p>
              </div>
            </div>
            <div className="flex text-gray-400 ">
              <div className="flex gap-4 border border-gray-500 px-4 py-2 rounded-full">
                <span>
                  <GlobeIcon />
                </span>
                <p>Development</p>
              </div>
            </div>
            <div className="flex text-gray-400 ">
              <div className="flex gap-4 border border-gray-500 px-4 py-2 rounded-full">
                <span>
                  <GlobeIcon />
                </span>
                <p>Digital marketing</p>
              </div>
            </div>
            <div className="flex text-gray-400">
              <div className="flex gap-4 border border-gray-500 px-4 py-2 rounded-full">
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
            <div className="w-full">
              <div className="slide-up flex flex-col">
                <span
                  className={`${clashDisplayFont.className} w-full font-bold text-nowrap text-gray-600 [font-size:_clamp(2rem,10vw,4rem)]`}
                >
                  UIUX DESIGN
                </span>
                <span
                  className={`${clashDisplayFont.className} secondspan w-full text-nowrap font-semibold text-gray-600 [font-size:_clamp(2rem,9vw,4rem)]`}
                >
                  UIUX DESIGN
                </span>
              </div>
            </div>

            <div className="hidden md:flex slide-image absolute bottom-0 right-[10%] overflow-hidden">
              <div className="">
                <Image src={UI} height={300} width={400} alt="laptop mockup" className="" />
              </div>
            </div>

            <div className="hidden md:flex relative justify-center items-center">
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
            <div className="w-full">
              <div className="slide-up flex flex-col">
                <span
                  className={`${clashDisplayFont.className} w-full font-bold text-nowrap text-gray-600 [font-size:_clamp(2rem,10vw,4rem)]`}
                >
                  DEVELOPMENT
                </span>
                <span
                  className={`${clashDisplayFont.className} secondspan w-full font-semibold text-gray-600 [font-size:_clamp(2rem,10vw,4rem)]`}
                >
                  DEVELOPMENT
                </span>
              </div>
            </div>

            <div className="hidden md:flex slide-image absolute bottom-0 right-[10%] overflow-hidden">
              <div className="">
                <Image src={DEV} height={300} width={400} alt="laptop mockup" className="" />
              </div>
            </div>

            <div className="hidden md:flex relative justify-center items-center">
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
            <div className="w-full">
              <div className="slide-up flex flex-col">
                <span
                  className={`${clashDisplayFont.className} w-full font-bold text-nowrap text-gray-600 [font-size:_clamp(2rem,10vw,4rem)]`}
                >
                  SEO
                </span>
                <span
                  className={`${clashDisplayFont.className} secondspan w-full font-semibold text-gray-600 [font-size:_clamp(2rem,10vw,4rem)]`}
                >
                  SEO
                </span>
              </div>
            </div>

            <div className="slide-image hidden md:flex  absolute bottom-0 right-[10%] overflow-hidden">
              <div className="">
                <Image src={SEO} height={300} width={400} alt="laptop mockup" className="" />
              </div>
            </div>

            <div className="relative hidden md:flex  justify-center items-center">
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
            <div className="w-full">
              <div className="slide-up flex flex-col">
                <span
                  className={`${clashDisplayFont.className} w-full font-bold text-nowrap text-gray-600 [font-size:_clamp(2rem,10vw,4rem)]`}
                >
                  MARKETING
                </span>
                <span
                  className={`${clashDisplayFont.className} secondspan font-semibold text-gray-600 [font-size:_clamp(2rem,10vw,4rem)]`}
                >
                  MARKETING
                </span>
              </div>
            </div>

            <div className="hidden md:flex slide-image absolute bottom-0 right-[10%] overflow-hidden">
              <div className="">
                <Image src={ADS} height={300} width={400} alt="laptop mockup" className="" />
              </div>
            </div>

            <div className="relative hidden md:flex justify-center items-center">
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
          <div className="md:h-[70dvh] h-[30dvh] relative  w-full flex justify-center items-center text-white ">
            <span
              data-buildtext="DESIGN"
              className={`${clashDisplayFont.className} absolute top-0 left-0 w-full flex justify-center  [font-size:_clamp(1rem,20vw,10rem)] [clip-path:_inset(0_0_45%)] font-extrabold`}
            >
              DESIGN
            </span>

            <span
              data-buildtext="BUILD"
              className={`${clashDisplayFont.className}  absolute md:top-[11vh] top-[2.6rem] left-0 w-full flex   [font-size:_clamp(1rem,20vw,10rem)] [clip-path:_inset(0_0_40%)] justify-center  font-extrabold`}
            >
              BUILD
            </span>

            <span
              data-buildtext="TEST"
              className={`${clashDisplayFont.className} absolute md:top-[24vh] top-[5.6rem] left-0 w-full flex [font-size:_clamp(1rem,20vw,10rem)] [clip-path:_inset(0_0_35%)] justify-center  font-extrabold`}
            >
              TEST
            </span>
            <span
              data-buildtext="DEPLOY"
              className={`${clashDisplayFont.className} absolute md:top-[38.5vh] top-[9rem] left-0 w-full flex [font-size:_clamp(1rem,20vw,10rem)] justify-center  font-extrabold`}
            >
              DEPLOY
            </span>
          </div>
        </div>
      </section>

      {/**image grid section */}
      <section className="pb-[150px]">
        <div className="md:mx-auto md:container gap-10 mx-6">
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(30ch,1fr))] gap-10">
            <li className="flex relative overflow-hidden h-[50vh] imageoverlay">
              <div className="flex flex-row rounded-tl-[99px] overflow-hidden">
                <Image
                  src={Demo}
                  width={500}
                  height={300}
                  alt="demo image"
                  className="object-cover w-full h-full"
                  aria-label="laptop mockup screen displaying blanks"
                  role="graphics-document"
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
              <div className="flex flex-row rounded-bl-[99px] overflow-hidden w-full h-full">
                <Image
                  src={Demo}
                  width={500}
                  height={300}
                  alt="demo image"
                  className="object-cover w-full h-full"
                  aria-label="laptop mockup screen displaying blanks"
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
                  className="object-cover w-full h-full"
                  aria-label="laptop mockup screen displaying blanks"
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
                  className="object-cover w-full h-full"
                  aria-label="laptop mockup screen displaying blanks"
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
                  className="object-cover w-full h-full"
                  aria-label="laptop mockup screen displaying blanks"
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
        <div className="bg-[linear-gradient(#fc8cfc,#D88DFC)] md:mx-auto md:container md:rounded-b-[100px] rounded-b-[50px] md:p-16 p-6 mx-6">
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
                className={`${clashDisplayFont.className} w-2/3 text-center [font-size:_clamp(2rem,5vw,5rem)] font-extrabold uppercase flex justify-center leading-none`}
              >
                Tell us about your idea
              </h2>
            </div>

            <div className="flex justify-center">
              <div className="text-black [font-size:_clamp(1rem,4vw,2rem)] ">
                <TertiaryBtn name="GET IN TOUCH " />
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </section>

      {/**footer section */}

      <footer className="text-white md:mx-auto md:container pb-[150px] mx-6">
        <section className="flex md:flex-row flex-col justify-between uppercase space-y-4 md:space--0">
          <div>© Copyright 2024</div>
          <div>✨ A landing page theme project ✨</div>
          <div>more exciting projects →</div>
        </section>
      </footer>
    </main>
  );
}
