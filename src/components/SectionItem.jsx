import { useContext, useState } from "react";
import BulletsForm from "./BulletsForm";
import BulletsList from "./BulletsList";
import { getCollapsableClass } from "../helpers";
import { faCaretDown, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SectionItem({
  data,
  currentItemId,
  handleItemChange,
  dispatcher,
  CustomForm,
}) {
  const [openForm, setOpenForm] = useState(false);
  const [currentBulletId, setCurrentBulletId] = useState(null); //for updating
  const dispatch = useContext(dispatcher);

  function handleOpenForm(open) {
    setOpenForm(open);
  }

  function changeIsUpdating(isUpdating, bulletId) {
    if (isUpdating) {
      setCurrentBulletId(bulletId);
    } else {
      setCurrentBulletId(null);
    }
  }

  const sectionIsOpen = currentItemId === data.id;
  let caretClass = sectionIsOpen ? "rotate-180 pb-1" : "";

  const itemClass = getCollapsableClass(
    sectionIsOpen,
    "w-full p-1 flex flex-col gap-4 pb-3",
  );
  return (
    <div className="mx-5 flex flex-col items-start justify-center rounded-bl-md rounded-br-md rounded-tl-md rounded-tr-md border-b-2 border-t-2 border-sky-500">
      <div className="flex w-full items-center justify-between text-xl font-bold ">
        <button
          className="flex w-11/12 items-center justify-between px-1 py-2 text-xl font-semibold"
          onClick={() => handleItemChange(data.id)}
        >
          <span className="inline-block overflow-hidden break-words text-start">
            {data.title}
          </span>
          <FontAwesomeIcon
            className={"pt-1 transition-all " + caretClass}
            icon={faCaretDown}
          />
        </button>
        <button
          className="ml-4 mr-2 flex items-center"
          onClick={() =>
            dispatch({
              type: "deleted_section",
              id: data.id,
            })
          }
        >
          <FontAwesomeIcon
            className="rounded-full p-2 text-base hover:bg-slate-300"
            icon={faTrash}
          />
        </button>
      </div>
      <div className={itemClass}>
        <CustomForm data={data} dispatcher={dispatcher} />
        <BulletsList
          items={data.bullets}
          sectionItemId={data.id}
          currentBulletId={currentBulletId}
          formIsOpen={openForm}
          dispatcher={dispatcher}
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
          dispatcher={dispatcher}
        ></BulletsForm>
      </div>
    </div>
  );
}

export default SectionItem;
