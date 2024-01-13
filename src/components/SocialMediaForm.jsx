import { useState } from "react";
import FormItem from "./FormItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../constants";



function SocialMediaForm({addSocialMedia}) {
  const [openForm, setOpenForm] = useState(false);
  const [socialMedia, setSocialMedia] = useState({
    id: crypto.randomUUID(),
    name: "",
    link: "",
    icon: "Empty",
  });

  function handleChange(property, value) {
    const newSocialMedia = { ...socialMedia, [property]: value };
    setSocialMedia(newSocialMedia);
  }

  let hiddenDivClass = "flex flex-wrap gap-3 translate";
  if (openForm) hiddenDivClass += "h-auto";
  else hiddenDivClass += "h-0 hidden";

  function resetSocialMediaForm() {
    setSocialMedia({
      id: socialMedia.id,
      name: "",
      link: "",
      icon: "Empty",
    });
    setOpenForm(false);
  }

  function handleAddSocialMedia() {
    addSocialMedia(socialMedia);
    setOpenForm(false);
    setSocialMedia({
      id: crypto.randomUUID(),
      name: "",
      link: "",
      icon: "Empty",
    });
  }

  return (
    <div className="flex flex-col border-2 border-red-100">
      <button
        type="button"
        htmlFor="dd"
        className="text-lg font-semibold"
        onClick={() => setOpenForm(!openForm)}
      >
        Add Social Media
      </button>
      <div className={hiddenDivClass}>
        <FormItem
          // labelText="Name..."
          value={socialMedia.name}
          name="name"
          placeHolder="Social Media Name..."
          handleChange={handleChange}
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
                checked={socialMedia.icon === name}
                onChange={(e) => handleChange("icon", e.target.value)}
                type="radio"
                value={name}
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
          type="button"
          onClick={handleAddSocialMedia}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default SocialMediaForm;
