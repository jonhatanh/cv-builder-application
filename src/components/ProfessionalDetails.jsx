import { useState } from "react";
import FormItem from "./FormItem";
import SocialMediaForm from "./SocialMediaForm";
import SocialMediaList from "./SocialMediaList";
import BulletsList from "./BulletsList";
import BulletsForm from "./BulletsForm";
import { forms, getCollapsableClass } from "../helpers";
import SectionItem from "./SectionItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function ProfessionalDetails({
  currentSection,
  handleSectionChange,
  data,
  handleChange,
  addBullet,
  updateBullet,
  deleteBullet,
  addNewSectionItem,
  deleteSectionItem,
}) {
  const [currentItemId, setCurrentItemId] = useState("");

  function handleItemChange(itemId) {
    if (itemId === currentItemId) setCurrentItemId("");
    else setCurrentItemId(itemId);
  }

  const sectionClass = getCollapsableClass(
    currentSection === forms.professionalExperience,
    "flex flex-col gap-3",
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
            addBullet={addBullet}
            updateBullet={updateBullet}
            deleteBullet={deleteBullet}
            deleteSectionItem={deleteSectionItem}
          ></SectionItem>
        ))}
        <button
          className="flex items-center justify-center gap-1 border-2 border-sky-500"
          onClick={addNewSectionItem}
        >
          <FontAwesomeIcon icon={faPlus} />
          Add Item
        </button>
      </div>
    </div>
  );
}

// ProfessionalDetails.defaultProps = {
//     data:
// }

export default ProfessionalDetails;
