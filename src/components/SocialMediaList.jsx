import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../constants";

function SocialMediaList( {socialMedia}) {

  function getIcon(iconName) {
    if(iconName === 'Empty') return;
    const {icon} = icons.find((icon) => icon.name === iconName);
    return <FontAwesomeIcon icon={icon} className="mr-1"/>;
  }


    return (
      <ul className="my-4">
        {socialMedia.map((social) => (
          <li
            className="flex justify-between items-center rounded-md p-3 shadow-md"
            key={social.name}
          >
            <a href={social.link}>{getIcon(social.icon)}{social.name}</a>
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