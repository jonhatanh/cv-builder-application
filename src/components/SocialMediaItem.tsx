import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIcon } from "../helpers";
import { SocialMediaItem } from "../types";

function socialMediaItem({ socialMedia }: { socialMedia: SocialMediaItem}) {
  const haveIcon = getIcon(socialMedia.iconName);
  
  const socialMediaIcon = socialMedia.iconName !== "Empty" && haveIcon && (
    <FontAwesomeIcon className="mr-1" icon={haveIcon} />
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
