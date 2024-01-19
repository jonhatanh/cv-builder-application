
export default function Button({children, color, ...extraProps}) {

    let buttonClass = `block min-w-fit max-w-40 flex-1 rounded-md border-2 border-${color}-500 bg-${color}-300 px-3 py-1 font-semibold transition-all ease-in-out hover:bg-${color}-500 hover:text-white`;
    return (
      <button
        className={buttonClass}
        {...extraProps}
      >
        {children}
      </button>
    );
}