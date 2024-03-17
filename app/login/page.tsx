"use client";

import login from "../../styles/login.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap-trial/SplitText";
import { useRef, useState, useEffect } from "react";
import { LoginForm } from "@/actions/actions";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
gsap.registerPlugin(SplitText);

export default function Login() {
  const wavyRef = useRef<any>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const initState = {
    message: "",
  };
  const [state, formAction] = useFormState(LoginForm, initState);
  const { pending } = useFormStatus();

  useEffect(() => {
    console.log("running1");

    if (isLoggedIn) {
      const timer = setTimeout(() => {
        alert("hello");
        console.log("running2");
        setIsLoading(false);
        setIsError(true);
      }, 1500);

      setIsError(false);

      return () => clearTimeout(timer);
    }
  }, [isLoggedIn, isLoading]);

  useGSAP(
    () => {
      if (wavyRef.current) {
        console.log("running animation");

        let text = new SplitText("#title", {
          type: "chars",
        });

        let letters = text?.chars;

        gsap.from(letters, {
          duration: 0.5,
          scale: 2,
          // y: -40,
          // rotationX: -10,
          transformOrigin: "0% 50% -50",
          ease: "back",
          stagger: 0.1,
        });
      }

      const tl = gsap.timeline();

      tl.to(["#user", "#password", "#button", "#forgot"], {
        opacity: 1,
        stagger: 0.15,
        ease: "back.in",
      });
    },
    { scope: wavyRef.current }
  );

  //   const handleLogin = (e: Event) => {
  //     e.preventDefault();
  //     try {
  //       setIsLoading(true);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  console.log("running0");

  return (
    <div className="flex flex-col pt-36 items-center w-[100vw] h-[100vh]">
      <fieldset className=" bg-[#f4f4f4]" ref={wavyRef}>
        <legend className="flex justify-between text-4xl px-24 w-full relative top-20">
          <span id="title">adoxa</span>

          {pending && <span className={`flex absolute right-[22rem] top-5 ${login.loader}`}></span>}
        </legend>
        <form className="space-y-10 w-[40vw] p-24 " action={formAction}>
          <div className="relative flex flex-col" id="user">
            <input
              type="text"
              placeholder=""
              className={login.floating_input}
              id="users"
              name="username"
              required
            ></input>
            <label className={login.floating_label} htmlFor="users">
              Username
            </label>
          </div>

          <div className="relative flex flex-col" id="password">
            <input
              type="password"
              placeholder=""
              className={login.floating_input}
              id="pass"
              name="password"
              required
            ></input>
            <label className={login.floating_label} htmlFor="pass">
              Password
            </label>
          </div>

          <button
            // onClick={handleLogin}
            id="button"
            className="w-full px-[2rem] py-[1rem] bg-white font-bold tracking-wider rounded-[20px]"
          >
            Login
          </button>

          {state.message && (
            <div id="form" className="px-[2rem] py-[1rem] bg-green-100 border-l-4 border-green-600">
              {state?.message}
            </div>
          )}

          {state.errors && (
            <div id="form" className="px-[2rem] py-[1rem] bg-red-100 border-l-4 border-red-600">
              {state?.errors.username} {state.errors.password}
            </div>
          )}

          <p id="forgot">Forgot your password?</p>
        </form>
      </fieldset>
    </div>
  );
}
