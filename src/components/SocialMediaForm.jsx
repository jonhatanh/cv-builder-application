import { useEffect, useState } from "react";
import FormItem from "./FormItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCollapsableClass, icons } from "../helpers";
import Button from "./Button";

function SocialMediaForm({
  allSocialMedia,
  currentSocialMediaId,
  addSocialMedia,
  handleOpenForm,
  formIsOpen,
  changeIsUpdating,
  updateSocialMedia,
}) {
  const [socialMedia, setSocialMedia] = useState({
    id: crypto.randomUUID(),
    name: "",
    link: "",
    iconName: "Empty",
  });

  const isUpdating = currentSocialMediaId !== null;
  const actionWord = isUpdating ? "Update" : "Save";

  useEffect(() => {
    if (currentSocialMediaId) {
      const socialMediaToEdit = allSocialMedia.find(
        (socialMedia) => socialMedia.id === currentSocialMediaId,
      );

      if (socialMediaToEdit) {
        // Si socialMediaToEdit existe, actualiza el estado socialMedia con sus valores
        // setSocialMedia(socialMediaToEdit);
        setSocialMedia({ ...socialMediaToEdit });
      }
    } else {
      // Si currentSocialMediaId es null, significa que no estás editando, restablece a los valores por defecto
      setSocialMedia({
        id: crypto.randomUUID(),
        name: "",
        link: "",
        iconName: "Empty",
      });
    }
  }, [currentSocialMediaId, allSocialMedia]);

  function handleChange(property, value) {
    const newSocialMedia = { ...socialMedia, [property]: value };
    setSocialMedia(newSocialMedia);
  }

  let hiddenDivClass = getCollapsableClass(
    formIsOpen,
    "flex flex-wrap gap-3 translate",
  );

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
      updateSocialMedia(currentSocialMediaId, { ...socialMedia });
      changeIsUpdating(false);
    } else {
      addSocialMedia(socialMedia);
    }
    handleOpenForm(false);
    setSocialMedia({
      id: crypto.randomUUID(),
      name: "",
      link: "",
      iconName: "Empty",
    });
  }

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
        {icons.map(({ name, icon }) => (
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
