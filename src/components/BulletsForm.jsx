import { useEffect, useState } from "react";
import FormItem from "./FormItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../helpers";

function BulletsForm({
  allBullets,
  currentBulletId,
  handleOpenForm,
  formIsOpen,
  changeIsUpdating,
  sectionItemId,
  addBullet,
  updateBullet,
}) {
  const [bullet, setBullet] = useState({
    id: crypto.randomUUID(),
    text: "",
  });

  const isUpdating = currentBulletId !== null;
  const actionWord = isUpdating ? "Update" : "Add";

  useEffect(() => {
    if (currentBulletId) {
      const bulletToEdit = allBullets.find(
        (bullet) => bullet.id === currentBulletId,
      );
      if (bulletToEdit) {
        setBullet({ ...bulletToEdit });
      }
    } else {
      setBullet({
        id: crypto.randomUUID(),
        text: "",
      });
    }
  }, [currentBulletId, allBullets]);

  function handleChange(property, value) {
    const newBullet = { ...bullet, [property]: value };
    setBullet(newBullet);
  }

  let hiddenDivClass = "flex flex-wrap gap-3 translate";
  if (formIsOpen) hiddenDivClass += "h-auto flex flex-col";
  else hiddenDivClass += "h-0 hidden";

  function resetBulletsForm() {
    const newId = isUpdating ? crypto.randomUUID() : bullet.id;
    setBullet({
      id: newId,
      text: "",
    });
    handleOpenForm(false);
    changeIsUpdating(false);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (isUpdating) {
      updateBullet(currentBulletId, { ...bullet }, sectionItemId);
      changeIsUpdating(false);
    } else {
      addBullet(bullet, sectionItemId);
    }
    handleOpenForm(false);
    setBullet({
      id: crypto.randomUUID(),
      text: "",
    });
  }

  return (
    <div className="flex flex-col border-2 border-red-100">
      <button
        type="button"
        htmlFor="dd"
        className="text-lg font-semibold"
        onClick={() => handleOpenForm(!formIsOpen)}
      >
        {actionWord} Bullet
      </button>
      <form onSubmit={handleFormSubmit} className={hiddenDivClass}>
        <FormItem
          // labelText="Name..."
          textArea
          value={bullet.text}
          name="text"
          placeholder="Bullet Description"
          handleChange={handleChange}
          required
        ></FormItem>
        <div className="flex flex-wrap gap-3">
          <button
            className="block flex-1 rounded-full border-2 bg-red-500 font-semibold text-white transition-all ease-in-out hover:bg-red-700"
            type="button"
            onClick={resetBulletsForm}
          >
            Cancel
          </button>
          <button
            className="block flex-1 rounded-full border-2 bg-sky-500 font-semibold text-white transition-all ease-in-out hover:bg-sky-700"
            type="submit"
          >
            {actionWord}
          </button>
        </div>
      </form>
    </div>
  );
}

export default BulletsForm;
