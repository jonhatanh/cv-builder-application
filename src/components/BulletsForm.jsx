import { useEffect, useState } from "react";
import FormItem from "./FormItem";
import Button from "./Button";

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
  const actionWord = isUpdating ? "Update" : "Save";

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

  let hiddenDivClass = "flex flex-col gap-3 translate w-full flex-1";
  if (formIsOpen) hiddenDivClass += " h-auto";
  else hiddenDivClass += " h-0 hidden";

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
      <div className="flex flex-1 justify-between gap-1">
        <Button color="red" type="button" onClick={resetBulletsForm}>
          Cancel
        </Button>
        <Button color="sky" type="submit">
          {actionWord}
        </Button>
      </div>
    </form>
  );
}

export default BulletsForm;
