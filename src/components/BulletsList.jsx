import { faCircleInfo, faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import BulletListButton from "./BulletListButton";
import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";
import Tooltip from "./Tooltip";

export function BulletsListItem({ text, children, isSelected }) {
  return (
    <li className={`flex items-center justify-between rounded-md p-3 shadow-md ${isSelected ? 'bg-sky-100' : ''}`}>
      <p className="overflow-hidden break-words">{text}</p>
      <div className="flex gap-2">{children}</div>
    </li>
  );
}

function BulletsList({
  items,
  sectionItemId,
  currentBulletId,
  formIsOpen,
  dispatcher,
  changeIsUpdating,
  handleOpenForm,
}) {
  const dispatch = useContext(dispatcher);
  function handleDelete(itemId) {
    dispatch({
      type: "deleted_bullet",
      sectionId: sectionItemId,
      bulletId: itemId,
    });
    // deleteBullet(itemId, sectionItemId);
    changeIsUpdating(false);
    handleOpenForm(false);
  }
  function handleUpdate(itemId) {
    changeIsUpdating(true, itemId);
    handleOpenForm(true);
  }

  const isUpdating = currentBulletId !== null;
  const actionWord = isUpdating ? "Updating Bullet" : "Add New Bullet";
  const buttonIcon = isUpdating ? faPen : faPlus;
  let extraIconClass = !isUpdating && formIsOpen ? "rotate-45" : "";

  return (
    <div>
      <span className="flex items-center gap-2 text-lg font-semibold">
        Bullet List
        <Tooltip>
          <p>
            You can add a link in any part of your bullet using the following
            pattern: [word](URL).
          </p>
          <p>I.E: "See my [GitHub](https://github.com/) account here!"</p>
        </Tooltip>
      </span>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <BulletsListItem key={item.id} text={item.text}>
            <DeleteButton onClick={() => handleDelete(item.id)} />
            <UpdateButton onClick={() => handleUpdate(item.id)} />
          </BulletsListItem>
        ))}
        <BulletListButton onClick={() => handleOpenForm(!formIsOpen)}>
          <FontAwesomeIcon
            className={"mr-1 transition-all " + extraIconClass}
            icon={buttonIcon}
          />
          {actionWord}
        </BulletListButton>
      </ul>
    </div>
  );
}

export default BulletsList;
