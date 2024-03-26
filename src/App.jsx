import { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import CVPreview from "./components/CVPreview";
import ExperienceForm from "./components/ExperienceForm";
import EducationForm from "./components/EducationForm";
import CustomDetails from "./components/CustomDetails";
import OthersForm from "./components/OthersForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faGraduationCap,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import {
  FORMS_ID,
} from "./constans";
import {
  EducationContext,
  EducationDispatchContext,
  ExperienceContext,
  ExperienceDispatchContext,
  OthersContext,
  OthersDispatchContext,
} from "./contexts/CustomDetailsProvider";
import { MainProvider } from "./contexts/MainProvider";

function App() {
  //Sections collapse
  const [currentSection, setCurrentSection] = useState(1);
  function handleSectionChange(section) {
    if (section === currentSection) setCurrentSection(0);
    else setCurrentSection(section);
  }

  return (
    <div className="flex min-h-dvh flex-col gap-5 bg-slate-100 p-3 md:flex-row md:justify-center">
      <MainProvider>
        <div className="flex min-w-[400px] flex-1 flex-col gap-4 md:min-w-60 md:max-w-[550px] ">
          <PersonalDetails
            currentSection={currentSection}
            handleSectionChange={handleSectionChange}
          ></PersonalDetails>
          <CustomDetails
            detailsName="Professional Experience"
            detailsIcon={<FontAwesomeIcon icon={faBuilding} />}
            detailsCollapseValue={FORMS_ID.professionalDetails}
            currentSection={currentSection}
            handleSectionChange={handleSectionChange}
            context={ExperienceContext}
            dispatcher={ExperienceDispatchContext}
            CustomForm={ExperienceForm}
          />
          <CustomDetails
            detailsName="Education Details"
            detailsIcon={<FontAwesomeIcon icon={faGraduationCap} />}
            detailsCollapseValue={FORMS_ID.educationDetails}
            currentSection={currentSection}
            handleSectionChange={handleSectionChange}
            context={EducationContext}
            dispatcher={EducationDispatchContext}
            CustomForm={EducationForm}
          />
          <CustomDetails
            detailsName="Others"
            detailsIcon={<FontAwesomeIcon icon={faMedal} />}
            detailsCollapseValue={FORMS_ID.othersDetails}
            currentSection={currentSection}
            handleSectionChange={handleSectionChange}
            context={OthersContext}
            dispatcher={OthersDispatchContext}
            CustomForm={OthersForm}
          />
          <div>
            Settings
          </div>
        </div>
        <CVPreview></CVPreview>
      </MainProvider>
    </div>
  );
}

export default App;
