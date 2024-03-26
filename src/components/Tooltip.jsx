import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tooltip({children}) {
  return (
    <div className="relative block">
      <FontAwesomeIcon
        className="peer"
        icon={faCircleInfo}
      />
      <div className="pointer-events-none absolute bottom-full left-full w-60 rounded-md border-2 bg-sky-500 p-2 text-sm font-medium text-white opacity-0 transition-all peer-hover:opacity-100">
        {children}
      </div>
    </div>
  );
  
};
