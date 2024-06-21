import { useEffect, useMemo, useState } from "react";
import SectionButton from "./SectionButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faFloppyDisk,
  faGear,
  faTrash,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import FormItem from "./FormItem";
import { getCollapsableClass } from "../helpers";
import BulletListButton from "./BulletListButton";
import {
  usePersonalDetails,
  usePersonalDetailsDispatch,
  useSocialMedia,
  useSocialMediaDispatch,
} from "../hooks/PersonalDetails";
import {
  useEducation,
  useEducationDispatch,
  useExperience,
  useExperienceDispatch,
  useOthers,
  useOthersDispatch,
} from "../hooks/CustomDetails";
import { BulletsListItem } from "./BulletsList";
import IconButton from "./IconButton.tsx";
import Tooltip from "./Tooltip";
import { EDUCATION_EXAMPLE, EXPERIENCE_EXAMPLE, OTHERS_EXAMPLE, PERSONAL_DETAILS_EXAMPLE, SOCIAL_MEDIA_EXAMPLE } from "../constans";

function createDateString(date: Date) {
  return `${String(date.getHours()).padStart(2, "0")}:${String(
    date.getMinutes(),
  ).padStart(2, "0")} - ${String(date.getMonth() + 1).padStart(
    2,
    "0",
  )}/${date.getDate()}/${date.getFullYear()}`;
}

type SavedCVItem = {
  id: UUID;
  name: string;
  updatedAt: string;
  personalDetails: ReturnType<typeof usePersonalDetails>;
  socialMedia: ReturnType<typeof useSocialMedia>;
  education: ReturnType<typeof useEducation>;
  experience: ReturnType<typeof useExperience>;
  others: ReturnType<typeof useOthers>;
};
type CVDataType = Pick<SavedCVItem, "personalDetails" | "socialMedia" | "education" | "experience" | "others">;
type SavedCVType = SavedCVItem[];

export default function Settings() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCVId, setCurrentCVId] = useState(crypto.randomUUID());
  const [currentCVName, setCurrentCVName] = useState("Example CV");
  const personalDetails = usePersonalDetails();
  const socialMedia = useSocialMedia();
  const education = useEducation();
  const experience = useExperience();
  const others = useOthers();
  const dispatchPersonalDetails = usePersonalDetailsDispatch();
  const dispatchSocialMedia = useSocialMediaDispatch();
  const dispatchEducation = useEducationDispatch();
  const dispatchExperience = useExperienceDispatch();
  const dispatchOthers = useOthersDispatch();

  const [savedCV, setSavedCV] = useState<SavedCVType>(() => {
    const cvs = localStorage.getItem("cvs");
    return cvs ? JSON.parse(cvs) : [];
  });

  useEffect(() => {
    localStorage.setItem("cvs", JSON.stringify(savedCV));
  }, [savedCV]);
  const sectionClass = getCollapsableClass(
    isOpen,
    "flex flex-col gap-5 pb-3 px-4",
  );

  function handleChange(value: string) {
    setCurrentCVName(value);
  }

  function handleSaveCV() {
    const currentCV = savedCV.find((cv) => cv.id === currentCVId);
    const updatedAt = createDateString(new Date());
    const newCV = {
      id: currentCVId,
      name: currentCVName,
      updatedAt,
      personalDetails,
      socialMedia,
      education,
      experience,
      others,
    };
    if (currentCV) {
      setSavedCV(
        savedCV.map((cv) => {
          if (cv.id === currentCV.id) {
            return newCV;
          }
          return cv;
        }),
      );
    } else {
      setSavedCV([...savedCV, newCV]);
    }
  }

  function handleLoad(cvId: UUID) {
    const currentCV = savedCV.find((cv) => cv.id === cvId);
    if (!currentCV) return;
    loadDataInState({
      personalDetails: currentCV.personalDetails,
      socialMedia: currentCV.socialMedia,
      education: currentCV.education,
      experience: currentCV.experience,
      others: currentCV.others,
    })
    setCurrentCVId(currentCV.id);
    setCurrentCVName(currentCV.name);
  }
  function handleDelete(cvId: UUID) {
    setSavedCV(savedCV.filter((cv) => cv.id !== cvId));
  }

  function handleLoadExampleData() {
    loadDataInState({
      personalDetails: PERSONAL_DETAILS_EXAMPLE,
      socialMedia: SOCIAL_MEDIA_EXAMPLE,
      education: EDUCATION_EXAMPLE,
      experience: EXPERIENCE_EXAMPLE,
      others: OTHERS_EXAMPLE,
    });
  }
  function handleResetCV() {
    setCurrentCVId(crypto.randomUUID());
    setCurrentCVName("New Empty CV");
    loadDataInState({
      personalDetails: {
        name: "",
        email: "",
        phone: "",
        skills: "",
      },
      socialMedia: [],
      education: [],
      experience: [],
      others: [],
    });
  }

  function loadDataInState({
    personalDetails,
    socialMedia,
    education,
    experience,
    others,
  }: CVDataType) {
    dispatchPersonalDetails({
      type: "load",
      payload: {
        personalDetails
      }
    });
    dispatchSocialMedia({
      type: "load",
      payload: {
        socialMedia
      }
    });
    dispatchEducation({
      type: "load",
      customDetails: education,
    });
    dispatchExperience({
      type: "load",
      customDetails: experience,
    });
    dispatchOthers({
      type: "load",
      customDetails: others,
    });
  }

  const isUpdating = useMemo(() => {
    return savedCV.find((cv) => cv.id === currentCVId);
  }, [currentCVId, savedCV]);

  return (
    <div className="flex flex-col rounded-md border-2 border-sky-700 border-opacity-50 bg-white shadow-md">
      <SectionButton onClick={() => setIsOpen(!isOpen)} sectionIsOpen={isOpen}>
        <FontAwesomeIcon className="text-sm" icon={faGear} /> Settings
      </SectionButton>
      <div className={sectionClass}>
        <BulletListButton onClick={handleLoadExampleData}>
          <FontAwesomeIcon
            className={"mr-2 transition-all"}
            icon={faFileLines}
          />
          Load Example Data
        </BulletListButton>
        <form className="flex flex-col gap-3">
          <FormItem
            labelText="Current CV Name"
            value={currentCVName}
            name="name"
            handleChange={handleChange}
          ></FormItem>
          <div className="flex flex-wrap gap-10">
            <BulletListButton onClick={handleSaveCV}>
              <FontAwesomeIcon
                className={"mr-2 transition-all "}
                icon={faFloppyDisk}
              />
              {isUpdating ? "Update CV" : "Save Current CV"}
            </BulletListButton>
            <BulletListButton onClick={handleResetCV}>
              <FontAwesomeIcon
                className={"mr-2 transition-all "}
                icon={faTrash}
              />
              Reset CV
            </BulletListButton>
          </div>
        </form>
        <section>
          <h3 className="flex gap-2 border-b-2 border-b-sky-700 border-opacity-50 text-lg font-semibold">
            Saved CV's
            <Tooltip>
              <p>
                To create a new CV, you need to save the current CV and then
                click in the <b>Reset CV</b> button.
              </p>
              <p>The current selected CV will have a background color.</p>
            </Tooltip>
          </h3>
          <ul>
            {savedCV.length ? (
              savedCV.map((cv) => {
                return (
                  <BulletsListItem
                    key={cv.id}
                    text={`${cv.name} (Updated at: ${cv.updatedAt})`}
                    isSelected={currentCVId === cv.id}
                  >
                    <IconButton
                      icon={faUpload}
                      onClick={() => handleLoad(cv.id)}
                    />
                    <IconButton
                      icon={faTrash}
                      onClick={() => handleDelete(cv.id)}
                    />
                  </BulletsListItem>
                );
              })
            ) : (
              <li className="py-3 text-center">No saved CVs found</li>
            )}
          </ul>
        </section>
      </div>
    </div>
  );
}
