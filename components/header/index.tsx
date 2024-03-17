interface HeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <header className=" wrapper_style">
      <main className="grid grid-cols-[repeat(auto-fit,minmax(30ch,1fr))]">
        <div className="flex p-60 flex-col  items-center text-white space-y-6">{children}</div>
      </main>
      <svg>
        <filter id="textheader">
          <feMorphology
            in="SourceGraphic"
            operator="dilate"
            result="DILATE"
            radius="2"
          ></feMorphology>
        </filter>
      </svg>
    </header>
  );
};
