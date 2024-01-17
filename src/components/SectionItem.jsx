import { useState } from "react";
import BulletsForm from "./BulletsForm";
import BulletsList from "./BulletsList";
import FormItem from "./FormItem";
import { getCollapsableClass } from "../helpers";
import { faCaretDown, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SectionItem({
  data,
  handleChange,
  currentItemId,
  handleItemChange,
  addBullet,
  updateBullet,
  deleteBullet,
  deleteSectionItem,
  CustomForm,
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
    <div className="flex w-full flex-col items-start justify-center border-2 border-sky-300">
      <div className="flex w-full items-center justify-between text-xl font-bold">
        <button
          className="flex w-full justify-between text-xl font-bold"
          onClick={() => handleItemChange(data.id)}
        >
          <span>{data.title}</span>
          <FontAwesomeIcon className="pt-1" icon={faCaretDown} />
        </button>
        <button className="flex items-center" onClick={() => deleteSectionItem(data.id)}>
          <FontAwesomeIcon
            className="mx-3 rounded-full px-1 px-2 py-1 text-base hover:bg-slate-300"
            icon={faTrash}
          />
        </button>
      </div>
      <div className={itemClass}>
        <CustomForm data={data} handleChange={handleChange} />
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
