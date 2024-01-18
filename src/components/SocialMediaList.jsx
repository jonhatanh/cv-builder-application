import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIcon } from "../helpers";
import SocialMediaItem from "./SocialMediaItem";

function SocialMediaList({
  socialMedia,
  deleteSocialMedia,
  changeIsUpdating,
  handleOpenForm,
}) {
  // function handleDeleteClick(mediaId) {
  //   deleteSocialMedia(mediaId);
  // }
  if (socialMedia.length === 0) {
    return null;
  }

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
            <div className="flex gap-1">
              <button
                className="rounded-full px-2 py-1 hover:bg-slate-300"
                onClick={() => handleDeleteSocialMedia(social.id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <button
                className="rounded-full px-2 py-1 hover:bg-slate-300"
                onClick={() => handleUpdateSocialMedia(social.id)}
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialMediaList;
