import { PropsWithChildren } from "react";

type SectionButtonProps = {
  onClick: () => void;
  sectionIsOpen?: boolean;
};

function SectionButton({ children, onClick, sectionIsOpen = false }: PropsWithChildren<SectionButtonProps>) {
  let buttonClass =
    "flex items-center justify-center gap-1 p-3 text-xl font-bold transition-colors";
  if(!sectionIsOpen) buttonClass += " hover:bg-sky-100";
  return (
    <button
      className={buttonClass}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default SectionButton;
