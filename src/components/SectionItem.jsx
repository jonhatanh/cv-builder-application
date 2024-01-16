import { useState } from "react";
import BulletsForm from "./BulletsForm";
import BulletsList from "./BulletsList";
import FormItem from "./FormItem";
import { getCollapsableClass } from "../helpers";
import { faC, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SectionItem({
  data,
  handleChange,
  handleOpenForm,
  openForm,
  currentItemId,
  handleItemChange,
}) {
  const [currentBulletId, setCurrentBulletId] = useState(null); //for updating

  function changeIsUpdating(isUpdating, bulletId) {
    //if is updating
    if (isUpdating) {
      setCurrentBulletId(bulletId);
    } else {
      setCurrentBulletId(null);
    }
  }

  const itemClass = getCollapsableClass(currentItemId === data.id, "");
  return (
    <div className="flex flex-col items-start justify-center border-2 border-sky-300">
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
          ></FormItem>
          <FormItem
            labelText="Position Title"
            value={data.subtitle}
            name="subtitle"
            handleChange={handleChange}
          ></FormItem>
          <FormItem
            labelText="Date"
            value={data.date}
            name="date"
            handleChange={handleChange}
            placeholder="01/2021 - Present"
          ></FormItem>
          <FormItem
            textArea
            labelText="Job Description"
            value={data.description}
            name="description"
            handleChange={handleChange}
          ></FormItem>
        </form>
        <BulletsList
          items={data.bullets}
          // deleteItem={deleteSocialMedia}
          changeIsUpdating={changeIsUpdating}
          handleOpenForm={handleOpenForm}
        />
        <BulletsForm
          allBullets={data.bullets}
          currentBulletId={currentBulletId}
          // addBullet={addBullet}
          handleOpenForm={handleOpenForm}
          formIsOpen={openForm}
          changeIsUpdating={changeIsUpdating}
          // updateBullet={updateBullet}
        ></BulletsForm>
      </div>
    </div>
  );
}

export default SectionItem;
