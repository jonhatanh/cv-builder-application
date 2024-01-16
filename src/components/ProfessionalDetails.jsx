import { useState } from "react";
import FormItem from "./FormItem";
import SocialMediaForm from "./SocialMediaForm";
import SocialMediaList from "./SocialMediaList";
import BulletsList from "./BulletsList";
import BulletsForm from "./BulletsForm";
import { forms, getCollapsableClass } from "../helpers";
import SectionItem from "./SectionItem";

function ProfessionalDetails({
  currentSection,
  handleSectionChange,
  data,
  handleChange,
  addBullets,
}) {
  const [currentItemId, setCurrentItemId] = useState("");

  function handleItemChange(itemId) {
    if (itemId === currentItemId) setCurrentItemId("");
    else setCurrentItemId(itemId);
  }

  const sectionClass = getCollapsableClass(
    currentSection === forms.professionalExperience,
    "",
  );
  return (
    <div className="flex flex-col gap-4 rounded-md border-2 border-sky-300 p-2">
      <button
        className="mb-2 text-xl font-bold"
        onClick={() => handleSectionChange(forms.professionalExperience)}
      >
        Professional Experience
      </button>
      <div className={sectionClass}>
        {data.map((item) => (
          <SectionItem
            key={item.id}
            data={item}
            currentItemId={currentItemId}
            handleItemChange={handleItemChange}
            handleChange={handleChange}
            addBullets={addBullets}
          ></SectionItem>
        ))}
      </div>
    </div>
  );
}

// ProfessionalDetails.defaultProps = {
//     data:
// }

export default ProfessionalDetails;
