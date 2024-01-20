import { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import CVPreview from "./components/CVPreview";
import ExperienceForm from "./components/ExperienceForm";
import EducationForm from "./components/EducationForm";
import CustomDetails from "./components/CustomDetails";
import { forms } from "./helpers";
import OthersForm from "./components/OthersForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faGraduationCap,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    skills:
      "HTML, CSS, JavaScript, React, SASS, Tailwind, Node.js, PHP, Laravel, MySQL, Git",
  });
  const [socialMedia, setSocialMedia] = useState([
    {
      id: crypto.randomUUID(),
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/john-doe/",
      iconName: "LinkedIn",
    },
    {
      id: crypto.randomUUID(),
      name: "GitHub",
      link: "https://github.com/johndoe",
      iconName: "GitHub",
    },
  ]);
  const [education, setEducation] = useState([
    {
      id: crypto.randomUUID(),
      title: "UNIVERSITY OF EXAMPLE",
      subtitle: "Degree in Computer Science",
      date: "09/2018 - 06/2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bullets: [
        {
          id: crypto.randomUUID(),
          text: "GPA: 3.8 / 4.0",
        },
        {
          id: crypto.randomUUID(),
          text: "Graduation Date: 06/2022",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      title: "EXAMPLE TECHNICAL INSTITUTE",
      subtitle: "Degree in Software Development",
      date: "09/2014 - 06/2018",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bullets: [
        {
          id: crypto.randomUUID(),
          text: "GPA: 3.6 / 4.0",
        },
      ],
    },
  ]);

  const [experience, setExperience] = useState([
    {
      id: crypto.randomUUID(),
      title: "EXAMPLE COMPANY",
      subtitle: "Software Engineer",
      date: "07/2022 - Present",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bullets: [
        {
          id: crypto.randomUUID(),
          text: "Developed and maintained web applications using React and Node.js.",
        },
        {
          id: crypto.randomUUID(),
          text: "Collaborated with cross-functional teams to deliver high-quality software solutions.",
        },
        {
          id: crypto.randomUUID(),
          text: "Utilized Git for version control and participated in code reviews.",
        },
      ],
    },
  ]);
  const [others, setOthers] = useState([
    {
      id: crypto.randomUUID(),
      title: "EXAMPLE BOOTCAMP",
      subtitle: "Full Stack Web Development Bootcamp",
      date: "01/2023 - 06/2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bullets: [
        {
          id: crypto.randomUUID(),
          text: "Completed an intensive bootcamp covering both frontend and backend technologies.",
        },
      ],
    },
  ]);

  //Personal Details Form
  function handlePersonalDetails(property, value) {
    const newDetails = { ...personalDetails, [property]: value };
    setPersonalDetails(newDetails);
  }
  function addSocialMedia(newSocialMedia) {
    setSocialMedia([...socialMedia, newSocialMedia]);
  }
  function deleteSocialMedia(socialMediaId) {
    const newSocialMedia = socialMedia.filter(
      (social) => social.id !== socialMediaId,
    );
    setSocialMedia(newSocialMedia);
  }
  function updateSocialMedia(socialMediaId, updatedSocialMedia) {
    const newSocialMedia = socialMedia.map((social) => {
      if (social.id === socialMediaId) {
        return updatedSocialMedia;
      }
      return social;
    });
    setSocialMedia(newSocialMedia);
  }

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
      <div className="flex min-w-[400px] flex-1 flex-col gap-4 md:min-w-60 md:max-w-[550px] ">
        <PersonalDetails
          currentSection={currentSection}
          handleSectionChange={handleSectionChange}
          data={personalDetails}
          socialMedia={socialMedia}
          handleChange={handlePersonalDetails}
          addSocialMedia={addSocialMedia}
          updateSocialMedia={updateSocialMedia}
          deleteSocialMedia={deleteSocialMedia}
        ></PersonalDetails>
        <CustomDetails
          detailsName="Professional Experience"
          detailsIcon={<FontAwesomeIcon icon={faBuilding} />}
          detailsCollapseValue={forms.professionalDetails}
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
          detailsCollapseValue={forms.educationDetails}
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
          detailsCollapseValue={forms.othersDetails}
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
        personalDetails={personalDetails}
        socialMedia={socialMedia}
        education={education}
        experience={experience}
        others={others}
      ></CVPreview>
    </div>
  );
}

export default App;
