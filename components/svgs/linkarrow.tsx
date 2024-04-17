interface FillType {
  fill: string;
}

export const LinkArrow = ({ fill }: FillType) => {
  return (
    <div>
      <svg
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
      >
        <path
          className={`${fill} linkarrow`}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M46.9644 5.5H4.21734V0.5H55.4999V51.7826H50.4999V9.03554L3.76771 55.7678L0.232178 52.2322L46.9644 5.5Z"
        ></path>
      </svg>
    </div>
  );
};
