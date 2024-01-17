import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CVSection from "./CVSection";
import {
  faEnvelope,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import SocialMediaItem from "./SocialMediaItem";
import { getIcon } from "../helpers";

function CVPreview({
  personalDetails,
  socialMedia,
  education,
  experience,
  skills,
  others,
}) {
  const skillsList = personalDetails.skills.split(",").map((skill, index) => {
    skill = skill.trim();
    if(!skill) return null;
    if (index === 0) {
      return <li key={index}>{skill}</li>;
    }
    return (
      <li key={index} className="flex items-center gap-2">
        <span className="text-xs">|</span>
        {skill}
      </li>
    );
  });

  return (
    <div className="mx-auto flex min-w-[400px] max-w-[700px] flex-col gap-3 border-2 border-slate-400">
      <div>
        <h3 className="mb-1 text-center text-3xl font-bold">
          {personalDetails.name}
        </h3>
        <div className="mb-3 flex flex-wrap justify-center gap-x-3 gap-y-0">
          <p>
            <FontAwesomeIcon className="mr-1" icon={faEnvelope} />
            {personalDetails.email}
          </p>
          <p>
            <FontAwesomeIcon className="mr-1" icon={faMobileScreenButton} />
            {personalDetails.phone}
          </p>
          {socialMedia.map((socialItem) => (
            <SocialMediaItem key={socialItem.id} socialMedia={socialItem} />
          ))}
        </div>
        <div className="h-1 w-full bg-black"></div>
      </div>
      <div>
        <h4 className="mb-2 text-center text-lg font-bold">SKILLS</h4>
        <ul className="columnred mx-auto flex max-w-sm flex-wrap justify-center gap-2 align-middle">
          {skillsList}
        </ul>
      </div>
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
