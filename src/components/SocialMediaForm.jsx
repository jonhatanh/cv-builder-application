import { useState } from "react";
import FormItem from "./FormItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";

const icons = [
  {
    name: "LinkedIn",
    icon: faLinkedin,
  },
  {
    name: "GitHub",
    icon: faGithub,
  },
  {
    name: "YouTube",
    icon: faYoutube,
  },
];

function PersonalExtras() {
  const [socialMedia, setSocialMedia] = useState({
    id: crypto.randomUUID(),
    name: "",
    link: "",
    icon: "",
  });

  return (
    <div className="flex flex-col border-2 border-red-100">
      <label htmlFor="dd" className="text-lg font-semibold">
        Add Social Media
      </label>
      <div className="flex flex-wrap gap-3">
        <FormItem
          // labelText="Name..."
          value={socialMedia.name}
          name="name"
          placeHolder="Social Media Name..."
          // handleChange={handleChange}
        ></FormItem>
        <FormItem
          // labelText="Name..."
          value={socialMedia.name}
          type="url"
          name="name"
          placeHolder="URL..."
          // handleChange={handleChange}
        ></FormItem>
        <fieldset className="border-2 border-slate-500 w-full flex justify-around items-center pb-2">
          <legend className="mx-2 px-2">Icon</legend>
          {icons.map(({ name, icon }) => (
            <div key={name} className="flex gap-2">
              <input type="radio" id={name} name="icon" />
              <label htmlFor={name}>
                <FontAwesomeIcon icon={icon} className="mr-1" />
                {name}
              </label>
            </div>
          ))}
        </fieldset>
        <button className="block flex-1" type="button">
          Add
        </button>
      </div>
    </div>
  );
}

export default PersonalExtras;
