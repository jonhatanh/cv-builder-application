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
    "flex flex-col gap-4 mb-6",
  );

  const noItemOpen = currentItemId === "" || data.length === 0;
  return (
    <div className="flex flex-col gap-4 rounded-md border-2 border-sky-700 border-opacity-50 bg-white shadow-md">
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
        {noItemOpen && (
          <button
            className="mx-3 mt-2 flex max-w-60 items-center justify-center gap-1 self-center rounded-md border-2 border-sky-500 px-2 py-1 transition-colors hover:bg-sky-500 hover:text-white"
            onClick={handleAddNewItem}
          >
            <FontAwesomeIcon icon={faPlus} />
            Add Item
          </button>
        )}
      </div>
    </div>
  );
}

// CustomDetails.defaultProps = {
//     data:
// }

export default CustomDetails;
