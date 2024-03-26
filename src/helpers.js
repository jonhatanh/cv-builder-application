import { ICONS } from "./constans";


export function getIcon(iconName) {
  if (iconName === "Empty") return null;
  const { icon } = ICONS.find((icon) => icon.name === iconName);
  return icon;
}

export function getCollapsableClass(isOpen, baseClass) {
    if (isOpen) baseClass += " h-auto";
    else baseClass += " h-0 hidden";
    return baseClass;
}