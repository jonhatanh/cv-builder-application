import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconButton({ icon, ...props }) {
  return (
    <button
      className="rounded-full px-2 py-1 transition-colors hover:bg-slate-300"
      {...props}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}
