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
import { EDUCATION_EXAMPLE, EXPERIENCE_EXAMPLE, OTHERS_EXAMPLE, FORMS_ID } from "./constans";
import { PersonalDetailsProvider } from "./contexts/PersonalDetailsProvider";

function App() {
  // const [personalDetails, setPersonalDetails] = useState(PERSONAL_DETAILS_EXAMPLE);
  // const [socialMedia, setSocialMedia] = useState(SOCIAL_MEDIA_EXAMPLE);
  const [education, setEducation] = useState(EDUCATION_EXAMPLE);

  const [experience, setExperience] = useState(EXPERIENCE_EXAMPLE);
  const [others, setOthers] = useState(OTHERS_EXAMPLE);

  //Personal Details Form
  // function handlePersonalDetails(property, value) {
  //   const newDetails = { ...personalDetails, [property]: value };
  //   setPersonalDetails(newDetails);
  // }
  // function addSocialMedia(newSocialMedia) {
  //   setSocialMedia([...socialMedia, newSocialMedia]);
  // }
  // function deleteSocialMedia(socialMediaId) {
  //   const newSocialMedia = socialMedia.filter(
  //     (social) => social.id !== socialMediaId,
  //   );
  //   setSocialMedia(newSocialMedia);
  // }
  // function updateSocialMedia(socialMediaId, updatedSocialMedia) {
  //   const newSocialMedia = socialMedia.map((social) => {
  //     if (social.id === socialMediaId) {
  //       return updatedSocialMedia;
  //     }
  //     return social;
  //   });
  //   setSocialMedia(newSocialMedia);
  // }

  //Handle Custom Forms
  function handleCustomFormDetails(property, value, id, state, setState) {
    const newState = state.map((stateItem) => {
      if (stateItem.id === id) {
        return { ...stateItem, [property]: value };
      }
      return stateItem;
    });
    setState(newState);
  }
  function handleProfessionalDetails(property, value, id) {
    handleCustomFormDetails(property, value, id, experience, setExperience);
  }
  function handleEducationDetails(property, value, id) {
    handleCustomFormDetails(property, value, id, education, setEducation);
  }
  function handleOthersDetails(property, value, id) {
    handleCustomFormDetails(property, value, id, others, setOthers);
  }

  //Handle Add Bullet
  function addBullet(bullet, objectId, state, setState) {
    const newState = state.map((stateItem) => {
      if (stateItem.id === objectId) {
        const newBullets = [...stateItem.bullets, bullet];
        const newStateItem = { ...stateItem, bullets: newBullets };
        return newStateItem;
      }
      return stateItem;
    });
    setState(newState);
  }
  function addBulletExperience(bullet, objectId) {
    addBullet(bullet, objectId, experience, setExperience);
  }
  function addBulletEducation(bullet, objectId) {
    addBullet(bullet, objectId, education, setEducation);
  }
  function addBulletOthers(bullet, objectId) {
    addBullet(bullet, objectId, others, setOthers);
  }

  //Handle Delete Bullet
  function deleteBullet(bulletId, objectId, state, setState) {
    const newState = state.map((stateItem) => {
      if (stateItem.id === objectId) {
        const newBullets = stateItem.bullets.filter(
          (bullet) => bullet.id !== bulletId,
        );
        const newStateItem = { ...stateItem, bullets: newBullets };
        return newStateItem;
      }
      return stateItem;
    });
    setState(newState);
  }
  function deleteBulletExperience(bulletId, objectId) {
    deleteBullet(bulletId, objectId, experience, setExperience);
  }
  function deleteBulletEducation(bulletId, objectId) {
    deleteBullet(bulletId, objectId, education, setEducation);
  }
  function deleteBulletOthers(bulletId, objectId) {
    deleteBullet(bulletId, objectId, others, setOthers);
  }

  //Handle update bullet
  function updateBullet(bulletId, newBulletValue, objectId, state, setState) {
    const newState = state.map((stateItem) => {
      if (stateItem.id === objectId) {
        const newBullets = stateItem.bullets.map((bullet) => {
          if (bullet.id === bulletId) {
            return newBulletValue;
          }
          return bullet;
        });
        const newStateItem = { ...stateItem, bullets: newBullets };
        return newStateItem;
      }
      return stateItem;
    });
    setState(newState);
  }
  function updateBulletExperience(bulletId, newBulletValue, objectId) {
    updateBullet(bulletId, newBulletValue, objectId, experience, setExperience);
  }
  function updateBulletEducation(bulletId, newBulletValue, objectId) {
    updateBullet(bulletId, newBulletValue, objectId, education, setEducation);
  }
  function updateBulletOthers(bulletId, newBulletValue, objectId) {
    updateBullet(bulletId, newBulletValue, objectId, others, setOthers);
  }

  //Sections Items
  function addNewSectionItem(state, setState) {
    const newItem = {
      id: crypto.randomUUID(),
      title: "New Item",
      subtitle: "",
      date: "",
      description: "",
      bullets: [],
    };
    setState([...state, newItem]);
    return newItem.id;
  }
  function addNewSectionItemExperience() {
    return addNewSectionItem(experience, setExperience);
  }
  function addNewSectionItemEducation() {
    return addNewSectionItem(education, setEducation);
  }
  function addNewSectionItemOthers() {
    return addNewSectionItem(others, setOthers);
  }
  function deleteSectionItem(itemId, state, setState) {
    const newState = state.filter((stateItem) => stateItem.id !== itemId);
    setState(newState);
  }
  function deleteSectionItemExperience(itemId) {
    deleteSectionItem(itemId, experience, setExperience);
  }
  function deleteSectionItemEducation(itemId) {
    deleteSectionItem(itemId, education, setEducation);
  }
  function deleteSectionItemOthers(itemId) {
    deleteSectionItem(itemId, others, setOthers);
  }

  //Sections collapse
  const [currentSection, setCurrentSection] = useState(1);
  function handleSectionChange(section) {
    if (section === currentSection) setCurrentSection(0);
    else setCurrentSection(section);
  }

  return (
    <div className="flex flex-col gap-5 bg-slate-100 p-3 md:flex-row md:justify-center min-h-dvh">
      <PersonalDetailsProvider >
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
          data={experience}
          handleChange={handleProfessionalDetails}
          addBullet={addBulletExperience}
          updateBullet={updateBulletExperience}
          deleteBullet={deleteBulletExperience}
          addNewSectionItem={addNewSectionItemExperience}
          deleteSectionItem={deleteSectionItemExperience}
          CustomForm={ExperienceForm}
        />
        <CustomDetails
          detailsName="Education Details"
          detailsIcon={<FontAwesomeIcon icon={faGraduationCap} />}
          detailsCollapseValue={FORMS_ID.educationDetails}
          currentSection={currentSection}
          handleSectionChange={handleSectionChange}
          data={education}
          handleChange={handleEducationDetails}
          addBullet={addBulletEducation}
          updateBullet={updateBulletEducation}
          deleteBullet={deleteBulletEducation}
          addNewSectionItem={addNewSectionItemEducation}
          deleteSectionItem={deleteSectionItemEducation}
          CustomForm={EducationForm}
        />
        <CustomDetails
          detailsName="Others"
          detailsIcon={<FontAwesomeIcon icon={faMedal} />}
          detailsCollapseValue={FORMS_ID.othersDetails}
          currentSection={currentSection}
          handleSectionChange={handleSectionChange}
          data={others}
          handleChange={handleOthersDetails}
          addBullet={addBulletOthers}
          updateBullet={updateBulletOthers}
          deleteBullet={deleteBulletOthers}
          addNewSectionItem={addNewSectionItemOthers}
          deleteSectionItem={deleteSectionItemOthers}
          CustomForm={OthersForm}
        />
      </div>
        <CVPreview
          education={education}
          experience={experience}
          others={others}
        ></CVPreview>
      </PersonalDetailsProvider>
    </div>
  );
}

export default App;
