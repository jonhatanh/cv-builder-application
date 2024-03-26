import { useEffect, useState } from "react";
import FormItem from "./FormItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCollapsableClass } from "../helpers";
import Button from "./Button";
import { ICONS } from "../constans";
import { useSocialMedia, useSocialMediaDispatch } from "../hooks/PersonalDetails";

const EMPTY_SOCIAL_MEDIA = {
  id: crypto.randomUUID(),
  name: "",
  link: "",
  iconName: "Empty",
};

function SocialMediaForm({
  currentSocialMediaId,
  handleOpenForm,
  formIsOpen,
  changeIsUpdating,
}) {
  const allSocialMedia = useSocialMedia();
  const dispatch = useSocialMediaDispatch();
  const [socialMedia, setSocialMedia] = useState(EMPTY_SOCIAL_MEDIA);

  const isUpdating = currentSocialMediaId !== null;
  const actionWord = isUpdating ? "Update" : "Save";

  useEffect(() => {
    if (currentSocialMediaId) {
      const socialMediaToEdit = allSocialMedia.find(
        (socialMedia) => socialMedia.id === currentSocialMediaId,
      );

      if (socialMediaToEdit) {
        setSocialMedia({ ...socialMediaToEdit });
      }
    } else {
      setSocialMedia(EMPTY_SOCIAL_MEDIA);
    }
  }, [currentSocialMediaId]);

  function handleChange(property, value) {
    setSocialMedia({ ...socialMedia, [property]: value });
  }

  function resetSocialMediaForm() {
    const newId = isUpdating ? crypto.randomUUID() : socialMedia.id;
    setSocialMedia({
      id: newId,
      name: "",
      link: "",
      iconName: "Empty",
    });
    handleOpenForm(false);
    changeIsUpdating(false);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (isUpdating) {
      dispatch({
        type: "updated",
        socialMedia: { ...socialMedia }
      });
      // updateSocialMedia(currentSocialMediaId, { ...socialMedia });
      changeIsUpdating(false);
    } else {
      dispatch({
        type: 'added',
        socialMedia
      })
    }
    handleOpenForm(false);
    setSocialMedia(EMPTY_SOCIAL_MEDIA);
  }
  let hiddenDivClass = getCollapsableClass(
    formIsOpen,
    "flex flex-wrap gap-3 translate",
  );

  return (
    <form onSubmit={handleFormSubmit} className={hiddenDivClass}>
      <FormItem
        // labelText="Name..."
        value={socialMedia.name}
        name="name"
        placeholder="Social Media Name..."
        handleChange={handleChange}
        required
      ></FormItem>
      <FormItem
        // labelText="Name..."
        value={socialMedia.link}
        type="url"
        name="link"
        placeholder="Social Media Link..."
        handleChange={handleChange}
      ></FormItem>
      <fieldset className="border- grid w-full grid-cols-2 gap-2 rounded-md border-2 border-sky-300 p-2 md:grid-cols-1 xl:grid-cols-2">
        <legend className="mx-2 px-2 font-semibold">Social Media Icon</legend>
        {ICONS.map(({ name, icon }) => (
          <div key={name} className="group flex gap-2">
            <input
              checked={socialMedia.iconName === name}
              onChange={(e) => handleChange("iconName", e.target.value)}
              type="radio"
              value={name}
              id={name}
              name="icon"
            />
            <label
              htmlFor={name}
              className="transition-all group-hover:translate-x-1"
            >
              <FontAwesomeIcon icon={icon} className="mr-1" />
              {name}
            </label>
          </div>
        ))}
      </fieldset>
      <div className="flex flex-1 justify-between gap-1">
        <Button color="red" type="button" onClick={resetSocialMediaForm}>
          Cancel
        </Button>
        <Button color="sky" type="submit">
          {actionWord}
        </Button>
      </div>
    </form>
  );
}

export default SocialMediaForm;
