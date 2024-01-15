import { useEffect, useState } from "react";
import FormItem from "./FormItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../helpers";

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
  const actionWord = isUpdating ? "Update" : "Add";

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

  let hiddenDivClass = "flex flex-wrap gap-3 translate";
  if (formIsOpen) hiddenDivClass += "h-auto";
  else hiddenDivClass += "h-0 hidden";

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
    <div className="flex flex-col border-2 border-red-100">
      <button
        type="button"
        htmlFor="dd"
        className="text-lg font-semibold"
        onClick={() => handleOpenForm(!formIsOpen)}
      >
        {actionWord} Social Media
      </button>
      <form onSubmit={handleFormSubmit} className={hiddenDivClass}>
        <FormItem
          // labelText="Name..."
          value={socialMedia.name}
          name="name"
          placeHolder="Social Media Name..."
          handleChange={handleChange}
          required
        ></FormItem>
        <FormItem
          // labelText="Name..."
          value={socialMedia.link}
          type="url"
          name="link"
          placeHolder="Social Media Link..."
          handleChange={handleChange}
        ></FormItem>
        <fieldset className="grid w-full grid-cols-2  gap-2 border-2 border-slate-500 pb-2 md:grid-cols-1">
          <legend className="mx-2 px-2">Icons</legend>
          {icons.map(({ name, icon }) => (
            <div key={name} className="flex gap-2">
              <input
                checked={socialMedia.iconName === name}
                onChange={(e) => handleChange("iconName", e.target.value)}
                type="radio"
                value={name}
                id={name}
                name="icon"
              />
              <label htmlFor={name}>
                <FontAwesomeIcon icon={icon} className="mr-1" />
                {name}
              </label>
            </div>
          ))}
        </fieldset>
        <button
          className="block flex-1 rounded-full border-2 bg-red-500 font-semibold text-white transition-all ease-in-out hover:bg-red-700"
          type="button"
          onClick={resetSocialMediaForm}
        >
          Cancel
        </button>
        <button
          className="block flex-1 rounded-full border-2 bg-sky-500 font-semibold text-white transition-all ease-in-out hover:bg-sky-700"
          type="submit"
        >
          {actionWord}
        </button>
      </form>
    </div>
  );
}

export default SocialMediaForm;
