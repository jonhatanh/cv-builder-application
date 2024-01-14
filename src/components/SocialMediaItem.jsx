import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIcon } from "../helpers";

function socialMediaItem({ socialMedia }) {

  const socialMediaIcon = socialMedia.iconName !== "Empty" && (
    <FontAwesomeIcon className="mr-1" icon={getIcon(socialMedia.iconName)} />
  );
  return socialMedia.link ? (
    <a
      className="underline underline-offset-2"
      href={socialMedia.link}
    >
      {socialMediaIcon}
      {socialMedia.name}
    </a>
  ) : (
    <p>
      {socialMediaIcon}
      {socialMedia.name}
    </p>
  );
}

export default socialMediaItem;
