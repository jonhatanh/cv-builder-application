import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BulletsList({
  items,
  deleteItem,
  changeIsUpdating,
  handleOpenForm,
}) {
  // function handleDeleteClick(mediaId) {
  //   deleteSocialMedia(mediaId);
  // }
  if (items.length === 0) {
    return null;
  }

  function handleDelete(itemId) {
    deleteItem(itemId);
    changeIsUpdating(false);
    handleOpenForm(false);
  }
  function handleUpdate(itemId) {
    changeIsUpdating(true, itemId);
    handleOpenForm(true);
  }
  return (
    <ul>
      <span className="text-lg font-semibold">Bullet List</span>
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
