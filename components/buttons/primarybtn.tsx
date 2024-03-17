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
