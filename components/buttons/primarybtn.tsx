import { ArrowRight } from "../icons/arrowright";

interface PrimaryButtonProps {
  name: string;
  onClick?: () => void;
}
export const PrimaryButton = ({ name, ...props }: PrimaryButtonProps) => {
  return (
    <button {...props} className="hori_card p-4 border border-slate-200 border-opacity-[0.1]]">
      <p>{name}</p>
    </button>
  );
};

export const StyleButton = ({ name, ...props }: PrimaryButtonProps) => {
  return (
    <div className="flex" aria-label="button" tabIndex={0}>
      <button
        aria-label="button"
        type="button"
        {...props}
        className="buttonBtn flex flex-row items-center"
      >
        <span className="pl-4">
          <ArrowRight />
        </span>
        <p className="pl-4 font-semibold ">{name}</p>
      </button>
    </div>
  );
};

export const TertiaryBtn = ({ name, ...props }: PrimaryButtonProps) => {
  return (
    <div role="button" className="flex">
      <button role="button" {...props} className="tertiaryBtn flex flex-row items-center">
        <span className="pl-4">
          <ArrowRight />
        </span>
        <p className="pl-4 font-semibold z-50">{name}</p>
      </button>
    </div>
  );
};
