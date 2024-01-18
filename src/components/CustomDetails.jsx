import { useState } from "react";
import { getCollapsableClass } from "../helpers";
import SectionItem from "./SectionItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import SectionButton from "./SectionButton";

function CustomDetails({
  detailsName,
  detailsIcon,
  detailsCollapseValue,
  currentSection,
  handleSectionChange,
  data,
  handleChange,
  addBullet,
  updateBullet,
  deleteBullet,
  addNewSectionItem,
  deleteSectionItem,
  CustomForm,
}) {
  const [currentItemId, setCurrentItemId] = useState("");

  function handleItemChange(itemId) {
    if (itemId === currentItemId) setCurrentItemId("");
    else setCurrentItemId(itemId);
  }

  function handleAddNewItem() {
    const newItemId = addNewSectionItem();
    handleItemChange(newItemId);
  }

  const sectionClass = getCollapsableClass(
    currentSection === detailsCollapseValue,
    "flex flex-col gap-3",
  );
  return (
    <div className="flex flex-col gap-4 rounded-md border-2 border-sky-700 border-opacity-50 bg-white shadow-md ">
      <SectionButton onClick={() => handleSectionChange(detailsCollapseValue)}>
        {detailsIcon}
        {detailsName}
      </SectionButton>
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
            CustomForm={CustomForm}
          ></SectionItem>
        ))}
        <button
          className="flex items-center justify-center gap-1 border-2 border-sky-500"
          onClick={handleAddNewItem}
        >
          <FontAwesomeIcon icon={faPlus} />
          Add Item
        </button>
      </div>
    </div>
  );
}

// CustomDetails.defaultProps = {
//     data:
// }

export default CustomDetails;
