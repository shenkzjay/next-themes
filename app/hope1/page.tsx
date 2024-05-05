"use client";

import { Track } from "@/components/svgs/track";
import { Dashboard } from "@/components/svgs/dashboard";

import gsap from "gsap";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Invoice from "../../public/images/invoice.jpg";
import Notification from "../../public/images/notification.png";
import Payment from "../../public/images/payment.png";
import Image from "next/image";
import Laptop from "../../public/images/laptop.png";
import { Dash } from "@/components/svgs/dash";

gsap.registerPlugin(ScrollTrigger);

export default function HopeOne() {
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const secRef = useRef(null);
  // const display1 = useRef(null);
  // const display2 = useRef(null);
  // const display3 = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    let breakPoint = 800;

    const condition = {
      isDesktop: `(min-width: ${breakPoint}px)`,
      isMobile: `(max-width: ${breakPoint - 1}px)`,
      reduceMotion: "(prefers-reduced-motion: reduce)",
    };

    //desktop screens
    mm.add(condition, (context) => {
      let { isDesktop, isMobile, reduceMotion } = context.conditions as {
        isDesktop: boolean;
        isMobile: boolean;
        reduceMotion: boolean;
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".billsection",
          scrub: true,
          start: "top center",
          end: "+=300",
          // pin: true,
        },
      });

      tl.from("#west", {
        scale: isDesktop ? "1.1" : "1",
        // transformOrigin: "30% 80%",
      });

      tl.to("#west", {
        scale: isDesktop ? "0.8" : ".9",
        transformOrigin: "top",
      });

      //Timeline 2

      const tl2 = gsap.timeline({
        delay: 0.1,
      });

      tl2.to("#arrow5", {
        x: isDesktop ? 700 : 700,
        duration: 0.4,
      });
      tl2.to("#arrow4", {
        x: 1400,
        duration: 0.3,
      });
      tl2.to("#arrow3", {
        x: 2100,
        duration: 0.3,
      });
      tl2.to("#arrow2", {
        x: 2800,
        duration: 0.3,
      });
      tl2.to("#arrow1", {
        x: 3500,
        duration: 0.3,
      });
      tl2.to(".loading", {
        opacity: 0,
      });
      tl2.to(["#header", "#text1", "#text2", "#test3", "#test4", ".dash"], {
        opacity: 1,
        y: -40,
        rotationX: -10,
        transformOrigin: "0% 50% -50",
        ease: "back",
        stagger: 0.1,
      });

      tl2.to(".curtain", {
        height: "80vh",
      });

      //Timeline 3

      const photos = gsap.utils.toArray(".photo:not(:first-child)");

      gsap.set(photos, { opacity: 0 });

      const animation = gsap.to(photos, {
        opacity: 1,
        duration: 1,
        stagger: 1,
      });

      ScrollTrigger.create({
        trigger: secRef.current,
        start: "top top",
        end: "bottom bottom",
        animation: animation,
        scrub: true,
        pin: ".right",
        // onEnter: () => {

        //   text1Ref.current.textContent = "Have all invoices in one place";
        // },
        // onLeaveBack: () => {

        //   text1Ref.current.textContent = "Tracking your invoices just got easy";
        // },
      });

      //Timeline 4
      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".imageAnimation",
          scrub: true,
          start: "top top",
          end: "+=700",
        },
      });

      tl4.to("#moveImage", {
        rotateY: isDesktop ? -30 : -30,
        y: isDesktop ? 560 : 600,
        x: isDesktop ? 500 : 0,
      });

      //Timeline 5
      const tl5 = gsap.timeline({
        scrollTrigger: {
          trigger: ".clipsec",
          scrub: true,
          start: "top top",
          end: isDesktop ? "+=100" : "bottom",
        },
      });

      tl5.set(".clipscroll", { clipPath: "circle(72.5% at 50% 50%" });

      tl5.to(".clipscroll", {
        clipPath: "circle(0% at 50% 50%)",
        duration: 1,
      });
      tl5.to(".bgtext", {
        opacity: 1,
      });
    });
  });

  return (
    <main>
      <section className="relative topheader">
        <div className="hidden md:flex absolute top-0 left-0 overflow-hidden w-[100vw] md:h-[100vh] h-full justify-center items-start">
          <Track color="black" />
        </div>
        <header className="flex relative flex-col mx-auto container items-center md:justify-end justify-center w-full md:h-[90vh] md:mb-[150px] space-y-10 ">
          {/* Navbar goes here */}
          <div className=" mx-6 md:mx-0 flex w-full flex-col gap-10">
            <div className="curtain ">
              <Dash />
            </div>
            <nav className="loading relative top-44 w-full h-full flex justify-center items-center text-4xl">
              {" "}
              loading...
            </nav>
            <div className="flex md:flex-row flex-col justify-between items-center w-full gap-10 text-[#1e1e1e]">
              <div
                className="md:w-1/2 w-full opacity-0 flex flex-col md:justify-center md:items-start items-center"
                id="test3"
              >
                <ul className="flex flex-row list-disc space-x-6 ml-4">
                  <li>how to</li>
                  <li>pricing</li>
                  <li>support</li>
                </ul>
                <div className="w-full h-[.5px] bg-slate-700 my-2"></div>
                <p className="w-3/4 text-sm">
                  track your bill payment and never worry about missed or late payments
                </p>
              </div>
              <div
                className="flex justify-center items-center opacity-0 md:w-1/2 w-full"
                id="test4"
              >
                <Image
                  src={Laptop}
                  height={300}
                  width={500}
                  className="w-[600px] h-auto"
                  alt="laptop mockup"
                  priority={true}
                />
              </div>
            </div>
            <div className="flex flex-col justify-end w-full relative">
              <h2 id="text1" className="opacity-0 text-8xl headertxt">
                Track your
              </h2>
              <h2
                id="text2"
                className="opacity-0 absolute md:top-[64px] top-[23px] bg-white font-extrabold uppercase leading-[0.8] w-full"
              >
                bill payments
              </h2>
            </div>
          </div>
        </header>
      </section>

      <section className="relative billsection space-y-[40px] flex flex-col my-[100px] pt-[150px] w-full justify-end items-center">
        <h2 id="changeText" ref={text1Ref} className=" font-bold md:w-1/2 text-center">
          Tracking your bill payment just got easy
        </h2>
        <div className="flex justify-center items-center">
          <Dashboard />
        </div>
      </section>

      <section className="secref  ">
        <div
          className="flex md:flex-row flex-col justify-between mx-auto container z-40 relative md:gap-20 "
          ref={secRef}
        >
          <div className=" md:w-1/2 left order-1 md:order-none ">
            <div className="flex flex-col md:pt-40 mt-[25rem] md:mt-0 mx-6 md:mx-0  text1 h-[100vh]  space-y-10 text-wrap">
              <h2 className=" font-bold" id="header3">
                Invoice <br />
                Customization
              </h2>
              <p className="md:w-1/2">
                Customize the appearance of invoices by adding their logo, choosing colour themes,
                and selecting fonts.
              </p>
            </div>
            <div className="h-[100vh] text2 flex flex-col md:mx-0 mx-6 md:pt-40  space-y-10 text-wrap">
              <h2 className=" font-bold" id="header3">
                Report <br />
                Analysis
              </h2>
              <p className="md:w-1/2">
                Provide robust reporting features to give users insights into their invoicing
                history, revenue, and outstanding payments.
              </p>
            </div>
            <div className="  text3 h-[120vh] flex flex-col md:pt-40 mx-6 md:mx-0 space-y-10">
              <h2 className=" font-bold" id="header3">
                Invoice <br />
                notification
              </h2>
              <p className="md:w-1/2">
                Enable automated reminders to be sent to clients for overdue or pending invoices,
                helping to improve payment collection.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 right relative md:top-10 h-full bg-white ">
            <div className="absolute top-0 flex flex-col w-full h-full fixedImages">
              <Image
                src={Invoice}
                height={500}
                width={600}
                className="w-[600px] h-auto photo absolute top-0 flex"
                alt="laptop mockup pics"
              />

              <Image
                src={Payment}
                height={500}
                width={600}
                className="w-[600px] h-auto photo absolute top-0 flex"
                alt="laptop mockup pics"
              />

              <Image
                src={Invoice}
                height={500}
                width={600}
                className="w-[600px] h-auto photo absolute top-0 flex"
                alt="laptop mockup pics"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative h-[50vh] flex flex-col justify-center text-center bg-black">
        <div className=" ">
          <div className="paymentbanner headertxt">
            <h2>Avoid late</h2>
          </div>
          <div
            id=""
            className="w-full paymentbanner bg-black absolute md:bottom-24 bottom-[149px]  text-white uppercase font-bold leading-none"
          >
            <h2>Payment charges</h2>
          </div>
        </div>
      </section>

      <section className="relative imageAnimation">
        <div className="moveImageSection flex md:flex-row flex-col justify-center items-center h-[130vh] mx-auto container">
          <div id="moveImage" className="md:w-1/2">
            <Image
              src={Invoice}
              height={500}
              width={600}
              className=""
              alt="laptop mockup display"
            />
          </div>
          <p className="textScrollAnimation  md:w-[40%] md:mt-0 mt-10">
            Stay on top of your finances with Bill Tracker! Receive timely payment reminders, and
            gain valuable insights into your spending habits.
          </p>
        </div>

        <div className=" flex justify-between mx-auto container py-56 md:mt-0">
          <div>
            <p className="textScrollAnimation md:w-[40%]">
              Effortlessly manage bills. Take control of your finances and simplify bill management
              with ease.
            </p>
          </div>
        </div>
      </section>

      <section className=" relative flex justify-center clipsec">
        <div className="absolute md:top-[21.5rem] bottom-20 font-bold cliptitle text-[#1e1e1e] ">
          <h2 className="text-[14rem] bgtext opacity-0" id="header2">
            Billtracker
          </h2>
          <footer className="">© Copyright 2024 - A payment tracking solution</footer>
        </div>
        <div className=" flex flex-col justify-between clipscroll bg-[#1e1e1e] w-full">
          {/* cards */}
          <h2 className="text-white mx-auto container my-24 text-4xl font-semibold">
            Some thank you notes from our clients
          </h2>
          <div className="container mx-auto grid grid-cols-[repeat(auto-fit,minmax(30ch,1fr))] gap-6 bg-[#1e1e1e]">
            <div className=" bg-white/5 p-10 font-bold rounded-[20px] backdrop-blur-[30px] text-white/60 grid grid-cols-subgrid gap-16 border border-slate-200/10 cardeffect ">
              <h2>Some thank you notes from our clients</h2>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsum, excepturi
                  natus, beatae magnam optio quod quasi voluptatem, aut esse quibusdam delectus?
                  Quasi quaerat atque saepe facilis praesentium fugiat facere!
                </p>

                <p>- Taskas</p>
              </div>
            </div>

            <div className=" bg-white/5 p-10 font-bold rounded-[20px] backdrop-blur-[30px] text-white/60 grid grid-cols-subgrid gap-16 border border-slate-200/10 cardeffect ">
              <h2>Some thank you notes from our clients</h2>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsum, excepturi
                  natus, beatae magnam optio quod quasi voluptatem, aut esse quibusdam delectus?
                  Quasi quaerat atque saepe facilis praesentium fugiat facere!
                </p>

                <p>- Taskas</p>
              </div>
            </div>

            <div className=" bg-white/5 p-10 font-bold rounded-[20px] backdrop-blur-[30px] text-white/60 grid grid-cols-subgrid gap-16 border border-slate-200/10 cardeffect ">
              <h2>Some thank you notes from our clients</h2>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsum, excepturi
                  natus, beatae magnam optio quod quasi voluptatem, aut esse quibusdam delectus?
                  Quasi quaerat atque saepe facilis praesentium fugiat facere!
                </p>

                <p>- Taskas</p>
              </div>
            </div>

            {/* <div className=" bg-white/5 p-10 font-bold rounded-[20px] backdrop-blur-[30px] text-white/60 grid grid-cols-subgrid gap-16 border border-slate-200/10 cardeffect ">
              <h2>Some thank you notes from our clients</h2>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsum, excepturi
                  natus, beatae magnam optio quod quasi voluptatem, aut esse quibusdam delectus?
                  Quasi quaerat atque saepe facilis praesentium fugiat facere!
                </p>

                <p>- Taskas</p>
              </div>
            </div> */}
          </div>
          <footer className="md:my-[150px] flex flex-row justify-center items-center text-white w-full"></footer>
        </div>
      </section>
    </main>
  );
}
