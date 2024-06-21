import {
  faPen,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialMediaItem from "./SocialMediaItem.tsx";
import BulletListButton from "./BulletListButton.tsx";
import DeleteButton from "./DeleteButton.tsx";
import UpdateButton from "./UpdateButton.tsx";
import { useSocialMedia, useSocialMediaDispatch } from "../hooks/PersonalDetails";

type SocialMediaListProps = {
  currentSocialMediaId: UUID | null;
  changeIsUpdating: (isUpdating: boolean, socialMediaId?: UUID) => void;
  handleOpenForm: (open: boolean) => void;
  formIsOpen: boolean;
};

function SocialMediaList({
  currentSocialMediaId,
  changeIsUpdating,
  handleOpenForm,
  formIsOpen,
}: SocialMediaListProps) {
  const socialMedia = useSocialMedia()
  const dispatch = useSocialMediaDispatch()
  const isUpdating = currentSocialMediaId !== null;
  const actionWord = isUpdating ? "Updating" : "Add";
  const buttonIcon = isUpdating ? faPen : faPlus;
  let extraIconClass = !isUpdating && formIsOpen ? "rotate-45" : "";

  function handleDeleteSocialMedia(socialMediaId: UUID) {
    dispatch({
      type: 'deleted',
      payload: {
        id: socialMediaId
      }
    })
    changeIsUpdating(false);
    handleOpenForm(false);
  }
  function handleUpdateSocialMedia(socialMediaId: UUID) {
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
