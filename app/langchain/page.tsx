import { LangNav } from "@/components/nav/langnav";
import Styles from "../../styles/langchain.module.css";
import { Waves } from "@/components/svgs/Waves";

export default function LangChain() {
  return (
    <main>
      <section className=" ">
        {/* header */}

        <header className="relative h-[100vh] w-[100vw] overflow-hidden bg-[#294346]">
          <div className="absolute top-0 left-0 h-full w-full">
            <Waves />
          </div>
          <nav>
            <LangNav />
          </nav>

          <div className="text-white z-40 relative  flex flex-col justify-end h-[80vh] space-y-4">
            <div className="text-6xl w-[60%]">
              <h1>What to prepare?</h1>
              <h1>How to prepare?</h1>
              <p>AI-chef has you covered</p>
            </div>
            <div>
              <a role="button" className="px-6 py-3">
                Get started
              </a>
            </div>
          </div>
        </header>

        <main>
          <section className="flex justify-center my-[150px]">
            <h2 className="text-4xl w-[60%] text-center">
              From startups to global enterprise, ambitious leaders choose Langchain
            </h2>
            <p>clients logo goes here</p>
          </section>

          <section className="mx-auto container">
            <div className="py-10 border bord">
              <div className="flex flex-row justify-between  border border-red-200 px-10 bg-red-300">
                <div>
                  <p className="text-4xl">Build</p>
                </div>
                <div>Langchain gives developers the power to contruct LLM powered apps</div>
              </div>
            </div>
            <div></div>
            <div></div>
          </section>
        </main>
      </section>
    </main>
  );
}
