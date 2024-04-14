import { Dispatch, ReactNode, SetStateAction, useState } from "react";

interface CardProps {
  children: ReactNode;
}

export const Cards = ({ children }: CardProps) => {
  return (
    <div
      className={`bg-white/5 p-10 font-bold rounded-[20px] backdrop-blur-[30px] text-white/60 grid grid-cols-subgrid gap-10 border border-slate-200/10 cardeffect 
      }`}
    >
      {children}
    </div>
  );
};
