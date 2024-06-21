import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { ICONS } from "./constans";
import { IconName } from "./types";


export function getIcon(iconName: IconName): IconDefinition | null {
  if (iconName === "Empty") return null;
  const iconObj = ICONS.find((icon) => icon.name === iconName);
  if (!iconObj) return null;
  return iconObj.icon;
}

export function getCollapsableClass(isOpen: boolean, baseClass: string) {
    if (isOpen) baseClass += " h-auto";
    else baseClass += " h-0 hidden";
    return baseClass;
}

export function handleChangeInCustomDetails(property: string, value: string, itemId?: UUID) {
  if (!itemId) return;
  dispatch({
    type: "changed_input",
    payload: {
      itemId,
      property,
      value,
    }
  });
}