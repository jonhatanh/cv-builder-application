import {
  faLinkedin,
  faGithub,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBan,
  faBriefcase,
  faCode,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

export const icons = [
  {
    name: "Empty",
    icon: faBan,
  },
  {
    name: "LinkedIn",
    icon: faLinkedin,
  },
  {
    name: "GitHub",
    icon: faGithub,
  },
  {
    name: "YouTube",
    icon: faYoutube,
  },
  {
    name: "X",
    icon: faXTwitter,
  },
  {
    name: "Internet",
    icon: faGlobe,
  },
  {
    name: "Code",
    icon: faCode,
  },
  {
    name: "Briefcase",
    icon: faBriefcase,
  },
];

export function getIcon(iconName) {
  if (iconName === "Empty") return null;
  const { icon } = icons.find((icon) => icon.name === iconName);
  return icon;
}

export const forms = {
  personalDetails: 1,
  professionalDetails: 2,
  educationDetails: 3,
  othersDetails: 4,
};

export function getCollapsableClass(isOpen, baseClass) {
    if (isOpen) baseClass += " h-auto";
    else baseClass += " h-0 hidden";
    return baseClass;
}