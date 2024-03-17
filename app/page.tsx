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

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isActive, setIsActive] = useState("");
  const headerRef = useRef<any>();
  const labelRef = useRef<any>();
  const captionRef = useRef<any>();
  const textRef = useRef<any>();
  const btnRef = useRef<any>();
  const imgSectionRef = useRef<any>();
  const card1Ref = useRef<any>();
  const card2Ref = useRef<any>();
  const cardSectionRef = useRef<any>();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        duration: 1,
        scrollTrigger: {
          trigger: headerRef.current,
          scrub: true,
          start: "top top",
          end: "+=700",
          pin: true,
          markers: true,
          anticipatePin: 1,
        },
      });

      const tl2 = gsap.timeline({
        stagger: 1,
        scrollTrigger: {
          trigger: cardSectionRef.current,
          scrub: true,
          start: "top",
          end: "+=300",
          markers: true,
          anticipatePin: 1,
        },
      });

      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: imgSectionRef.current,
          scrub: true,
          start: "top",
          end: "+=800",
          markers: true,
          anticipatePin: 1,
          pin: true,
        },
      });

      // const tl4 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: card2Ref.current,
      //     start: "top",
      //     end: "bottom",
      //     toggleActions: "play reverse play reverse",
      //   },
      // });

      // tl4.to("#test", { scale: 0.5 });

      tl.to([labelRef.current, btnRef.current, textRef.current], { scale: 0, opacity: 0 });
      tl.to(captionRef.current, { scale: 2, opacity: 0 });

      tl2.to(cardSectionRef.current, { backgroundColor: "#f9f9f9" });
      tl2.to("#cardRef1", { scale: 0.8, ease: "power1", duration: 1 });
      tl2.to("#cardRef2", { scale: 1.2, ease: "power1", duration: 1 });

      tl3.to(imgSectionRef.current, { backgroundColor: "white" });
      tl3.from("#imageRef1", { scale: 2, transformOrigin: "left", duration: 1 });
      tl3.to("#imageRef2", {
        scale: 1,
        transformOrigin: "left",
        duration: 1,
        marginLeft: "80px",
        opacity: 1,
        translateY: 0,
      });
    },
    { scope: headerRef.current }
  );

  // const createObserver = (options: {}) => {
  //   const intObserver = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("active");
  //         console.log("active");
  //       } else {
  //         entry.target.classList.remove("active");
  //         console.log("inactive");
  //       }
  //     });
  //   }, options);

  //   return intObserver;
  // };

  // const observer = createObserver({
  //   threshold: 0.8,
  // });

  // useEffect(() => {
  //   const observedElement = [headerRef, card2Ref, card1Ref].map((ref) => ref.current);
  //   if (observedElement) {
  //     observedElement.forEach((elements) => {
  //       if (elements) {
  //         observer.observe(elements);
  //       }
  //     });
  //   }

  //   return () => {
  //     observedElement.forEach((element) => {
  //       observer.observe(element);
  //     });
  //   };
  // }, [card1Ref, headerRef, card2Ref]);

  const handleMouseOver = (id: string) => {
    setIsActive(id);
  };

  const handleMouseLeave = () => {
    setIsActive("");
  };

  return (
    <main className="bg-[#1e1e1e] relative -z-30 ">
      <div className="">
        {/**header section */}
        <section
          ref={headerRef}
          className="flex flex-col items-center container mx-auto headerstyles"
        >
          <Header>
            <div ref={labelRef} className="flex">
              <p className="flex bg-white/20 py-1 px-4 text-sm rounded-full backdrop-blur-[30px] text-white/60">
                ✨ No 1 in consultancy services
              </p>
            </div>
            <h1
              ref={captionRef}
              className="text-[lightgray] text-wrap text-6xl text-center textheader"
            >
              World class excellence <br />
              in consultancy
            </h1>
            <p ref={textRef} className="flex text-center">
              We make the greatest impact through collaboration with our clients, as our diverse,
              global teams help organizations tackle the most urgent dynamic challenges
            </p>
            <div className="flex relative">
              <button ref={btnRef} type="submit" className="buttonBtn flex">
                <div className="iconbtn">
                  <ArrowRight />
                </div>
                <div className="textbtn">Check out my story</div>
              </button>
            </div>
          </Header>
        </section>

        {/**Card section */}
        <section className="pb-[100px] pt-[300px] container mx-auto ">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(30ch,1fr))] gap-10">
            <div ref={card1Ref} className="headerstyles">
              <Cards
                id="card1"
                isActive={isActive === "card1"}
                handleMouseLeave={handleMouseLeave}
                handleMouseOver={handleMouseOver}
              >
                <div>
                  <h2 className="text-4xl font-bold">Our portfolio</h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sint
                    dolorem magnam dolores eos. Sint voluptatum vero aut totam exercitationem
                    asperiores laborum sunt. Reiciendis sit voluptatem amet quia nobis unde.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src={Demo}
                    width={400}
                    height={300}
                    alt="Demo pics"
                    className="rounded-[20px] h-auto"
                  />
                  <div className="">
                    <Settings isActive={isActive === "card1"} />
                  </div>
                </div>
                <div className="flex relative">
                  <button type="submit" className="buttonBtn flex">
                    <div className="iconbtn">
                      <ArrowRight />
                    </div>
                    <div className="textbtn">Read more</div>
                  </button>
                </div>
              </Cards>
            </div>

            <div ref={card2Ref} className="headerstyles">
              <Cards
                id="card2"
                isActive={isActive === "card2"}
                handleMouseLeave={handleMouseLeave}
                handleMouseOver={handleMouseOver}
              >
                <div>
                  <h2 className="text-4xl font-bold">Professional services</h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sint
                    dolorem magnam dolores eos. Sint voluptatum vero aut totam exercitationem
                    asperiores laborum sunt. Reiciendis sit voluptatem amet quia nobis unde.
                  </p>
                </div>
                <div className="relative flex justify-end ">
                  <Image
                    src={Demo}
                    width={400}
                    height={300}
                    alt="Demo pics"
                    className="rounded-[20px] h-auto"
                  />
                  <div className="relative">
                    <Banny isActive={isActive === "card2"} />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="flex flex-row w-[57%]">
                    <button type="submit" className="buttonBtn flex">
                      <div className="iconbtn">
                        <ArrowRight />
                      </div>
                      <div className="textbtn">Check out my story</div>
                    </button>
                  </div>
                </div>
              </Cards>
            </div>
          </div>
        </section>

        {/**promo section */}
        {/* <section className="py-[100px] text-white space-y-[200px]">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(30ch,1fr))] gap-20 justify-center items-center">
            <div className="space-y-10">
              <div className="flex">
                <p className="flex  bg-white/20 py-1 px-4 text-sm rounded-full backdrop-blur-[30px] text-white/60">
                  ✨ No 1 in consultancy services
                </p>
              </div>
              <h2 className="text-4xl font-bold">Our portfolio</h2>
              <p>
                We make the greatest impact through collaboration with our clients, as our diverse,
                global teams help organizations tackle the most urgent dynamic challenges
              </p>
            </div>
            <div>
              <Image
                src={Demo}
                width={600}
                height={300}
                alt="Demo pics"
                className="rounded-[20px] h-[500px] object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(30ch,1fr))] gap-20 justify-center items-center">
            <div className="space-y-10 order-1">
              <div className="flex">
                <p className="flex  bg-white/20 py-1 px-4 text-sm rounded-full backdrop-blur-[30px] text-white/60">
                  ✨ No 1 in consultancy services
                </p>
              </div>
              <h2 className="text-4xl font-bold">Our portfolio</h2>
              <p>
                We make the greatest impact through collaboration with our clients, as our diverse,
                global teams help organizations tackle the most urgent dynamic challenges
              </p>
            </div>
            <div>
              <Image
                src={Demo}
                width={600}
                height={300}
                alt="Demo pics"
                className="rounded-[20px] h-[500px] object-cover"
              />
            </div>
          </div>
        </section> */}

        <section ref={cardSectionRef} className="py-[100px]">
          <div className="w-full flex flex-col justify-center items-center">
            <div id="cardRef1">
              <Image
                src={Laptop}
                alt="a front view laptop mockup pics"
                className="h-auto"
                width={1200}
              />
            </div>
            <div
              className="flex flex-col justify-center items-center gap-6 text-center mt-4"
              id="cardRef2"
            >
              <h2 className="text-4xl font-bold">Expert analysis</h2>
              <p className="w-1/2">
                We analyze business growth and provide strategic solutions for tailored for your
                business
              </p>
            </div>
          </div>
        </section>

        {/**full section */}
        {/* <section className="py-[100px] space-y-10 text-white bg-[#f9f9f9] " ref={imgSectionRef}>
          <div className="container mx-auto overflow-hidden">
            <div className="flex flex-col space-y-10 justify-center items-center text-center text-black">
              <div className="flex ">
                <p className="flex  bg-white/20 border-slate-300 border py-1 px-4 text-sm rounded-full backdrop-blur-[30px] text-black/60">
                  ✨ No 1 in consultancy services
                </p>
              </div>
              <h2 className="text-4xl font-bold w-[50%] flex justify-center">
                Unlocking Growth Strategies for Business Excellence
              </h2>
            </div>
            <div className="flex flex-row mt-10 overflow-hidden relative">
              <div id="imageRef1" className="flex w-1/2">
                <Image
                  src={Demo}
                  width={1400}
                  height={500}
                  alt="Demo pics"
                  className="rounded-[20px] object-cover flex h-auto"
                />
              </div>
              <div id="imageRef2" className="flex w-1/2 opacity-0 ">
                <p className="w-full text-black ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati commodi modi
                  omnis accusamus nemo beatae pariatur blanditiis dolorem, quaerat praesentium et
                  totam tempore. Sapiente, ullam quo eos et eligendi ad?
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/**Image section */}
        <section className="py-[100px] space-y-[200px] text-white mx-auto container">
          {/**Image 1 */}
          <section className="grid grid-cols-griddy gap-10">
            <div>
              <div>
                <h2>Hello allez voius</h2>
                <p>
                  {" "}
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam debitis
                  inventore deleniti nesciunt ipsam, cumque enim
                </p>
              </div>
              <Image src={Demo} alt="Demo pics" className="rounded-[20px]" />
            </div>
            <div>
              <Image src={Demo} alt="Demo pics" className="rounded-[20px]" />
            </div>
          </section>

          {/**Image 2 */}
          <section className="grid grid-cols-reversegriddy gap-10">
            <div className="">
              <div>
                <h2>Hello allez voius</h2>
                <p>
                  {" "}
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam debitis
                  inventore deleniti nesciunt ipsam, cumque enim
                </p>
              </div>
              <Image src={Demo} alt="Demo pics" className="rounded-[20px]" />
            </div>
            <div className=" ">
              <Image src={Demo} alt="Demo pics" className="rounded-[20px]" />
            </div>
          </section>

          {/**Image 3 */}
          <section className="grid grid-cols-griddy gap-10">
            <div>
              <div>
                <h2>Hello allez voius</h2>
                <p>
                  {" "}
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam debitis
                  inventore deleniti nesciunt ipsam, cumque enim
                </p>
              </div>
              <Image src={Demo} alt="Demo pics" className="rounded-[20px]" />
            </div>
            <div>
              <Image src={Demo} alt="Demo pics" className="rounded-[20px]" />
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
