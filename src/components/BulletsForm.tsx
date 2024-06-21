import { useContext, useEffect, useState } from "react";
import FormItem from "./FormItem";
import Button from "./Button";
import { BulletItem, BulletItemsType } from "../types";
import { CustomDispatcherType } from "../App";

type BulletsFormProps = {
  currentBulletId: UUID | null;
  handleOpenForm: (value: boolean) => void;
  formIsOpen: boolean;
  changeIsUpdating: (value: boolean) => void;
  sectionItemId: UUID;
  allBullets: BulletItemsType;
  dispatcher: CustomDispatcherType;
};

function BulletsForm({
  currentBulletId,
  handleOpenForm,
  formIsOpen,
  changeIsUpdating,
  sectionItemId,
  allBullets,
  dispatcher,
}: BulletsFormProps) {
  const dispatch = useContext(dispatcher);
  const [bullet, setBullet] = useState<BulletItem>({
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

  function handleChange(property: string, value: string) {
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

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isUpdating) {
      dispatch({
        type: 'updated_bullet',
        payload: {
          sectionId: sectionItemId,
          bullet: { ...bullet }
        }
      })
      // updateBullet(currentBulletId, { ...bullet }, sectionItemId);
      changeIsUpdating(false);
    } else {
      dispatch({
        type: 'added_bullet',
        payload: {
          sectionId: sectionItemId,
          bullet
        }
      })
      // addBullet(bullet, sectionItemId);
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
