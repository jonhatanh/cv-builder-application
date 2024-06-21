import { useState } from "react";
import PersonalDetails from "./components/PersonalDetails.tsx";
import CVPreview from "./components/CVPreview";
import ExperienceForm from "./components/ExperienceForm.tsx";
import EducationForm from "./components/EducationForm.tsx";
import CustomDetails from "./components/CustomDetails.tsx";
import OthersForm from "./components/OthersForm.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faGraduationCap,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import {
  FORMS_ID,
} from "./constans.ts";
import {
  EducationContext,
  EducationDispatchContext,
  ExperienceContext,
  ExperienceDispatchContext,
  OthersContext,
  OthersDispatchContext,
} from "./contexts/CustomDetailsProvider.tsx";
import { MainProvider } from "./contexts/MainProvider.tsx";
import Settings from "./components/Settings";
import { AvailableSections } from "./types/index.ts";

export const CUSTOM_SECTIONS = [
  {
    id: FORMS_ID.professionalDetails,
    title: "Professional Experience",
    icon: <FontAwesomeIcon icon={faBuilding} />,
    context: ExperienceContext,
    dispatcher: ExperienceDispatchContext,
    form: ExperienceForm,
  },
  {
    id: FORMS_ID.educationDetails,
    title: "Education Details",
    icon: <FontAwesomeIcon icon={faGraduationCap} />,
    context: EducationContext,
    dispatcher: EducationDispatchContext,
    form: EducationForm,
  },
  {
    id: FORMS_ID.othersDetails,
    title: "Others",
    icon: <FontAwesomeIcon icon={faMedal} />,
    context: OthersContext,
    dispatcher: OthersDispatchContext,
    form: OthersForm,
  },
] as const;
export type CustomContextType = typeof CUSTOM_SECTIONS[number]["context"];
export type CustomDispatcherType = typeof CUSTOM_SECTIONS[number]["dispatcher"];
export type CustomFormType = typeof CUSTOM_SECTIONS[number]["form"];



function App() {
  //Sections collapse
  const [currentSection, setCurrentSection] = useState<AvailableSections>(1);
  function handleSectionChange(section: AvailableSections) {
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
          {
            CUSTOM_SECTIONS.map((section) => (
              <CustomDetails
                key={section.id}
                detailsName={section.title}
                detailsIcon={section.icon}
                detailsCollapseValue={section.id}
                currentSection={currentSection}
                handleSectionChange={handleSectionChange}
                context={section.context}
                dispatcher={section.dispatcher}
                CustomForm={section.form}
              />
            ))
          }
          {/* <CustomDetails
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
          /> */}
          <Settings>
            
          </Settings>
        </div>
        <CVPreview></CVPreview>
      </MainProvider>
    </div>
  );
}

export default App;
