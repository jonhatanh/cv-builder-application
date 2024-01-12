import { useState } from "react";
import FormItem from "./FormItem";

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
        <div className="flex justify-between w-full">
          <label htmlFor="icon" className="text-lg font-semibold">
            Icon
          </label>
          <select name="icon" id="icon">
            <option value="0">😃</option>
            <option value="1">🍉</option>
            <option value="2">✔</option>
            <option value="3">🍿</option>
          </select>
        </div>
        <button className="block flex-1" type="button">
          Add
        </button>
      </div>
    </div>
  );
}

export default PersonalExtras;
