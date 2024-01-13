import { useState } from "react";
import FormItem from "./FormItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBan,
  faBriefcase,
  faCode,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const icons = [
  {
    name: "Empty",
    icon: faBan,
  },
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
  {
    name: "X",
    icon: faXTwitter,
  },
  {
    name: "Internet",
    icon: faGlobe,
  },
  {
    name: "Code",
    icon: faCode,
  },
  {
    name: "Briefcase",
    icon: faBriefcase,
  },
];

function SocialMediaForm() {
  const [socialMedia, setSocialMedia] = useState({
    id: crypto.randomUUID(),
    name: "",
    link: "",
    icon: "Empty",
  });

  return (
    <div className="flex flex-col border-2 border-red-100">
      <button type="button" htmlFor="dd" className="text-lg font-semibold">
        Add Social Media
      </button>
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
          value={socialMedia.url}
          type="url"
          name="name"
          placeHolder="URL..."
          // handleChange={handleChange}
        ></FormItem>
        <fieldset className="grid w-full grid-cols-2  gap-2 border-2 border-slate-500 pb-2 md:grid-cols-1">
          <legend className="mx-2 px-2">Icon</legend>
          {icons.map(({ name, icon }) => (
            <div key={name} className="flex gap-2">
              <input
                checked={socialMedia.icon === name}
                onChange={(e) => setSocialMedia({...socialMedia, icon: e.target.value})}
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
          className="block flex-1 rounded-full border-2 bg-sky-500 font-semibold text-white transition-all ease-in-out hover:bg-sky-700"
          type="button"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default SocialMediaForm;
