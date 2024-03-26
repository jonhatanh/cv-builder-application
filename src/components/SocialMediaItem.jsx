import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIcon } from "../helpers";

function socialMediaItem({ socialMedia }) {

  const socialMediaIcon = socialMedia.iconName !== "Empty" && (
    <FontAwesomeIcon className="mr-1" icon={getIcon(socialMedia.iconName)} />
  );
  return socialMedia.link ? (
    <a
      className="flex items-center underline underline-offset-2 overflow-hidden"
      target="_blank"
      href={socialMedia.link} rel="noreferrer"
    >
      {socialMediaIcon}
      {socialMedia.name}
    </a>
  ) : (
    <p className="flex items-center overflow-hidden">
      {socialMediaIcon}
      {socialMedia.name}
    </p>
  );
}

export default socialMediaItem;
