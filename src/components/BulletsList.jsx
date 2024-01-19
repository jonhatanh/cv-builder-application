import {
  faCircleInfo,
  faPen,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import BulletListButton from "./BulletListButton";
import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";

function BulletsList({
  items,
  sectionItemId,
  currentBulletId,
  formIsOpen,
  deleteBullet,
  changeIsUpdating,
  handleOpenForm,
}) {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  
  function handleDelete(itemId) {
    deleteBullet(itemId, sectionItemId);
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

  let tooltipClass = "absolute bottom-full left-full w-60 rounded-md p-2 transition-all border-2 bg-sky-500 text-sm font-medium text-white";
  tooltipClass += tooltipOpen ? " opacity-100" : " opacity-0 pointer-events-none";
  return (
    <div>
      <span className="flex items-center gap-2 text-lg font-semibold">
        Bullet List
        <div className="relative block">
          <FontAwesomeIcon
            onMouseEnter={() => setTooltipOpen(true)}
            onMouseLeave={() => setTooltipOpen(false)}
            icon={faCircleInfo}
          />
          <div className={tooltipClass}>
            <p>
              You can add a link in any part of your bullet using the following
              pattern: [word](URL).
            </p>
            <p>I.E: "See my [GitHub](https://github.com/) account here!"</p>
          </div>
        </div>
      </span>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li
            className="flex items-center justify-between rounded-md p-3 shadow-md"
            key={item.id}
          >
            <p>{item.text}</p>
            <div className="flex gap-2">
              <DeleteButton onClick={() => handleDelete(item.id)} />
              <UpdateButton onClick={() => handleUpdate(item.id)} />
            </div>
          </li>
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
