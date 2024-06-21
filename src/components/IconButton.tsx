import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconButton({ icon, ...props }: { icon: IconDefinition} & React.ComponentProps<"button">) {
  return (
    <button
      className="rounded-full px-2 py-1 transition-colors hover:bg-slate-300"
      {...props}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}
