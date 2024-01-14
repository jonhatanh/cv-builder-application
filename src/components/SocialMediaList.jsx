import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIcon } from "../helpers";
import SocialMediaItem from "./SocialMediaItem";

function SocialMediaList({ socialMedia }) {
  return (
    <ul className="my-4">
      {socialMedia.map((social) => (
        <li
          className="flex items-center justify-between rounded-md p-3 shadow-md"
          key={social.name}
        >
          <SocialMediaItem socialMedia={social} />
          <div className="flex gap-2">
            <button className="rounded-full px-2 py-1 hover:bg-slate-300">
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <button className="rounded-full px-2 py-1 hover:bg-slate-300">
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SocialMediaList;
