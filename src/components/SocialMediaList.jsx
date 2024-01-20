import {
  faPen,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialMediaItem from "./SocialMediaItem";
import BulletListButton from "./BulletListButton";
import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";

function SocialMediaList({
  socialMedia,
  currentSocialMediaId,
  deleteSocialMedia,
  changeIsUpdating,
  handleOpenForm,
  formIsOpen,
}) {
  
  const isUpdating = currentSocialMediaId !== null;
  const actionWord = isUpdating ? "Updating" : "Add";
  const buttonIcon = isUpdating ? faPen : faPlus;
  let extraIconClass = !isUpdating && formIsOpen ? "rotate-45" : "";

  function handleDeleteSocialMedia(socialMediaId) {
    deleteSocialMedia(socialMediaId);
    changeIsUpdating(false);
    handleOpenForm(false);
  }
  function handleUpdateSocialMedia(socialMediaId) {
    changeIsUpdating(true, socialMediaId);
    handleOpenForm(true);
  }
  return (
    <div>
      <span className="text-lg font-semibold">Social Media</span>
      <ul className="flex flex-wrap gap-5">
        {socialMedia.map((social) => (
          <li
            className="flex flex-1 max-w-[350px] items-center justify-between rounded-md p-3 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
            key={social.name}
          >
            <SocialMediaItem socialMedia={social} />
            <div className="flex">
              <DeleteButton
                onClick={() => handleDeleteSocialMedia(social.id)}
              />
              <UpdateButton
                onClick={() => handleUpdateSocialMedia(social.id)}
               />
            </div>
          </li>
        ))}
        <BulletListButton onClick={() => handleOpenForm(!formIsOpen)}>
          <FontAwesomeIcon
            className={"mr-1 transition-all " + extraIconClass}
            icon={buttonIcon}
          />
          {actionWord}
        </BulletListButton>
      </ul>
    </div>
  );
}

export default SocialMediaList;
