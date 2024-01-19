import { faPen, faPenToSquare, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIcon } from "../helpers";
import SocialMediaItem from "./SocialMediaItem";
import BulletListButton from "./BulletListButton";

function SocialMediaList({
  socialMedia,
  currentSocialMediaId,
  deleteSocialMedia,
  changeIsUpdating,
  handleOpenForm,
  formIsOpen
}) {
  // function handleDeleteClick(mediaId) {
  //   deleteSocialMedia(mediaId);
  // }
  // if (socialMedia.length === 0) {
  //   return null;
  // }
const isUpdating = currentSocialMediaId !== null;
const actionWord = isUpdating ? "Update" : "Add";
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
            className="flex flex-1 items-center justify-between rounded-md p-3 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
            key={social.name}
          >
            <SocialMediaItem socialMedia={social} />
            <div className="flex">
              <button
                className="rounded-full px-2 py-1 transition-colors hover:bg-slate-300"
                onClick={() => handleDeleteSocialMedia(social.id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <button
                className="rounded-full px-2 py-1 transition-colors hover:bg-slate-300"
                onClick={() => handleUpdateSocialMedia(social.id)}
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
            </div>
          </li>
        ))}
        <BulletListButton onClick={() => handleOpenForm(!formIsOpen)} >
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
