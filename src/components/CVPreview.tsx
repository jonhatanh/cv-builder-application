import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CVSection from "./CVSection";
import {
  faEnvelope,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import SocialMediaItem from "./SocialMediaItem";
import { usePersonalDetails, useSocialMedia } from "../hooks/PersonalDetails";
import { useEducation, useExperience, useOthers } from "../hooks/CustomDetails";

function CVPreview() {
  const personalDetails = usePersonalDetails();
  const socialMedia = useSocialMedia();
  const education = useEducation();
  const experience = useExperience();
  const others = useOthers();
  const skillsList = personalDetails.skills.split(",").map((skill, index) => {
    skill = skill.trim();
    if (!skill) return null;
    if (index === 0) {
      return <li key={index}>{skill}</li>;
    }
    return (
      <li
        key={index}
        className="flex flex items-center items-center gap-2 overflow-hidden break-words"
      >
        <span className="text-xs">|</span>
        {skill}
      </li>
    );
  });

  return (
    <div className="mx-auto flex min-w-[430px] max-w-[720px] flex-col gap-3 border-2 border-violet-700 border-opacity-10 bg-white px-10 py-5 shadow-xl md:m-0">
      <div>
        <h3 className="mb-1 break-words text-center text-3xl font-bold">
          {personalDetails.name}
        </h3>
        <div className="mb-3 flex flex-wrap justify-center gap-x-3 gap-y-0">
          {personalDetails.email && (
            <p className="flex items-center overflow-hidden break-words">
              <FontAwesomeIcon className="mr-1" icon={faEnvelope} />
              {personalDetails.email}
            </p>
          )}
          {personalDetails.phone && (
            <p className="flex items-center overflow-hidden break-words">
              <FontAwesomeIcon className="mr-1" icon={faMobileScreenButton} />
              {personalDetails.phone}
            </p>
          )}
          {socialMedia.map((socialItem) => (
            <SocialMediaItem key={socialItem.id} socialMedia={socialItem} />
          ))}
        </div>
        <div className="h-1 w-full bg-black"></div>
      </div>
      {personalDetails.skills.trim() && (
        <div>
          <h4 className="mb-2 text-center text-lg font-bold">SKILLS</h4>
          <ul className="mx-auto flex max-w-sm flex-wrap justify-center gap-2 align-middle lg:max-w-md">
            {skillsList}
          </ul>
        </div>
      )}
      <CVSection
        title="PROFESSIONAL EXPERIENCE"
        sectionData={experience}
      ></CVSection>
      <CVSection title="EDUCATION" sectionData={education}></CVSection>
      <CVSection title="OTHERS" sectionData={others}></CVSection>
    </div>
  );
}

export default CVPreview;
