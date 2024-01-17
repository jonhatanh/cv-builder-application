import { useState } from "react";
import BulletsForm from "./BulletsForm";
import BulletsList from "./BulletsList";
import FormItem from "./FormItem";
import { getCollapsableClass } from "../helpers";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SectionItem({
  data,
  handleChange,
  currentItemId,
  handleItemChange,
  addBullet,
  updateBullet,
  deleteBullet,
}) {
  const [openForm, setOpenForm] = useState(false);
  const [currentBulletId, setCurrentBulletId] = useState(null); //for updating

  function handleOpenForm(open) {
    setOpenForm(open);
  }

  function changeIsUpdating(isUpdating, bulletId) {
    //if is updating
    if (isUpdating) {
      setCurrentBulletId(bulletId);
    } else {
      setCurrentBulletId(null);
    }
  }

  const itemClass = getCollapsableClass(currentItemId === data.id, "w-full");
  return (
    <div className="flex flex-col items-start justify-center border-2 border-sky-300 w-full">
      <button
        className="flex w-full justify-between text-xl font-bold"
        onClick={() => handleItemChange(data.id)}
      >
        <span>{data.title}</span>
        <FontAwesomeIcon className="pt-1" icon={faCaretDown}></FontAwesomeIcon>
      </button>
      <div className={itemClass}>
        <form className="flex flex-col gap-3">
          <FormItem
            labelText="Company Name"
            value={data.title}
            name="title"
            handleChange={handleChange}
            itemId={data.id}
          ></FormItem>
          <FormItem
            labelText="Position Title"
            value={data.subtitle}
            name="subtitle"
            handleChange={handleChange}
            itemId={data.id}
          ></FormItem>
          <FormItem
            labelText="Date"
            value={data.date}
            name="date"
            handleChange={handleChange}
            itemId={data.id}
            placeholder="01/2021 - Present"
          ></FormItem>
          <FormItem
            textArea
            labelText="Job Description"
            value={data.description}
            name="description"
            handleChange={handleChange}
            itemId={data.id}
          ></FormItem>
        </form>
        <BulletsList
          items={data.bullets}
          sectionItemId={data.id}
          deleteBullet={deleteBullet}
          changeIsUpdating={changeIsUpdating}
          handleOpenForm={handleOpenForm}
        />
        <BulletsForm
          allBullets={data.bullets}
          currentBulletId={currentBulletId}
          handleOpenForm={handleOpenForm}
          formIsOpen={openForm}
          changeIsUpdating={changeIsUpdating}
          sectionItemId={data.id}
          addBullet={addBullet}
          updateBullet={updateBullet}
        ></BulletsForm>
      </div>
    </div>
  );
}

export default SectionItem;
