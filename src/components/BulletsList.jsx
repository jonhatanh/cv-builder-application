import {
  faCircleInfo,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function BulletsList({
  items,
  sectionItemId,
  deleteBullet,
  changeIsUpdating,
  handleOpenForm,
}) {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  // function handleDeleteClick(mediaId) {
  //   deleteSocialMedia(mediaId);
  // }
  if (items.length === 0) {
    return null;
  }

  function handleDelete(itemId) {
    deleteBullet(itemId, sectionItemId);
    changeIsUpdating(false);
    handleOpenForm(false);
  }
  function handleUpdate(itemId) {
    changeIsUpdating(true, itemId);
    handleOpenForm(true);
  }

  let tooltipClass = "absolute bottom-full left-full w-60 rounded-md p-2  border-2 bg-sky-500 text-sm font-medium text-white";
  tooltipClass += tooltipOpen ? " block" : " hidden";
  return (
    <ul>
      <span className="flex items-center gap-2 text-lg font-semibold">
        Bullet List{" "}
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
      {items.map((item) => (
        <li
          className="flex items-center justify-between rounded-md p-3 shadow-md"
          key={item.id}
        >
          <p>{item.text}</p>
          <div className="flex gap-2">
            <button
              className="rounded-full px-2 py-1 hover:bg-slate-300"
              onClick={() => handleDelete(item.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <button
              className="rounded-full px-2 py-1 hover:bg-slate-300"
              onClick={() => handleUpdate(item.id)}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default BulletsList;
