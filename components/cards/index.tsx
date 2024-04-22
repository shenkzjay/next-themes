import { Dispatch, ReactNode, SetStateAction, useState, useRef } from "react";

interface CardProps {
  children: ReactNode;
}

export const Cards = ({ children }: CardProps) => {
  const cardRef = useRef<HTMLElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const cards = e.currentTarget.closest("article");
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (cards) {
      let x = e.pageX - cards.offsetLeft;
      let y = e.pageY - cards.offsetTop;

      let xPercentage = x / cards.clientWidth;
      let YPercentage = y / cards.clientWidth;

      const xRotation = (xPercentage - 0.5) * 25;
      const yRotation = (0.5 - YPercentage) * 25;

      console.table({ xRotation, yRotation });

      if (!isMobile) {
        cards.style.setProperty("--xRotation", xRotation + "deg");
        cards.style.setProperty("--yRotation", yRotation + "deg");
      }

      if (!isMobile) {
        cards.style.setProperty("--x", x + "px");
        cards.style.setProperty("--y", y + "px");
      }
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (cardRef.current) {
      cardRef.current.style.setProperty("--xRotation", "0deg");
      cardRef.current.style.setProperty("--yRotation", "0deg");
    }
  };

  return (
    <article
      ref={cardRef}
      onPointerMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`bg-white/5 p-10 font-bold rounded-[20px] backdrop-blur-[30px] text-white/60 grid grid-cols-subgrid gap-10 cardeffect pointer-events-none 
      }`}
    >
      <div className="pointer-events-auto">{children}</div>
    </article>
  );
};
