import { Dispatch, ReactNode, SetStateAction, useState } from "react";

interface CardProps {
  children: ReactNode;
  id: string;
  isActive: boolean;
  handleMouseOver: (id: string) => void;
  handleMouseLeave: () => void;
}

export const Cards = ({ children, id, handleMouseOver, handleMouseLeave }: CardProps) => {
  return (
    <div
      onMouseOver={() => handleMouseOver(id)}
      onMouseLeave={handleMouseLeave}
      className={`bg-white/5 p-10 font-bold rounded-[20px] backdrop-blur-[30px] text-white/60 grid grid-cols-subgrid gap-16 border border-slate-200/10 cardeffect 
      }`}
    >
      {children}
    </div>
  );
};
