function SectionButton({ children, onClick, sectionIsOpen = false }) {
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
