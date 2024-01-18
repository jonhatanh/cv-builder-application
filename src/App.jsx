import { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import CVPreview from "./components/CVPreview";
import ExperienceForm from "./components/ExperienceForm";
import EducationForm from "./components/EducationForm";
import CustomDetails from "./components/CustomDetails";
import { forms } from "./helpers";
import OthersForm from "./components/OthersForm";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    name: "JONHATAN HIGUERA",
    email: "jonhatan.higuera@gmail.com",
    phone: "33-1707-9174",
    skills: `HTML, CSS,JavaScript, React, AlpineJS, Livewire,SASS ,Tailwind, NodeJS, PHP, Laravel, MySQL, Pest, OOP, Git,`,
  });
  const [socialMedia, setSocialMedia] = useState([
    {
      id: crypto.randomUUID(),
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/jonhatan-higuera/",
      iconName: "LinkedIn",
    },
    {
      id: crypto.randomUUID(),
      name: "GitHub",
      link: "https://github.com/jonhatanh",
      iconName: "GitHub",
    },
  ]);
  const [education, setEducation] = useState([
    {
      id: crypto.randomUUID(),
      title: "UNIVERSITY OF GUADALAJARA (CUCEI)",
      subtitle: "Degree in Computer Science (Ingeniería Informática)",
      date: "02/2021 - Present",
      description: "",
      bullets: [
        {
          id: crypto.randomUUID(),
          text: "GPA: 98 / 100",
        },
        {
          id: crypto.randomUUID(),
          text: "Exp. Graduation Date: 06/2024",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      title: "CENTRO DE ENSEÑANZA TÉCNICA INDUSTRIAL",
      subtitle: "Degree in Software Development",
      date: "08/2016 - 06/2020",
      description: "",
      bullets: [
        {
          id: crypto.randomUUID(),
          text: "GPA: 92 / 100",
        },
      ],
    },
  ]);

  const [experience, setExperience] = useState([
    {
      id: crypto.randomUUID(),
      title: "CUCEI",
      subtitle: "Full Stack Developer Intern",
      date: "02/2023 - Present",
      description:
        "Acquired valuable teamwork skills through SCRUM methodology, successfully contributed to largescale projects, and demonstrated effective collaboration using Git.",
      bullets: [
        {
          id: crypto.randomUUID(),
          text: `Performed maintenance and developed new features for existing projects using the TALL stack (Tailwind, Alpine, Laravel, Livewire).`,
        },
        {
          id: crypto.randomUUID(),
          text: `Created a landing page for an internal project and the [Eventos CUCEI](https://eventos.cucei.udg.mx/) website.`,
        },
        {
          id: crypto.randomUUID(),
          text: `Extensively utilized the Laravel framework, gaining knowledge of MVC, routing, middlewares, sessions, authentication, authorization, email sending, file storage,migrations, seeders, Eloquent ORM, factories, and testing.`,
        },
        {
          id: crypto.randomUUID(),
          text: `Implemented feature tests in existing projects to ensure the proper functionality of routes and components.`,
        },
      ],
    },
  ]);
  const [others, setOthers] = useState([
    {
      id: crypto.randomUUID(),
      title: "FULL STACK WEB DEVELOPMENT BOOTCAMP (BEDU)",
      subtitle: "",
      date: "05/2023 - 12/2023",
      description: "",
      bullets: [
        {
          id: crypto.randomUUID(),
          text: `Acquired a solid understanding of backend concepts and successfully applied them, creating a RESTful API using Node.js and the Express framework.`,
        },
      ],
    },
  ]);
  // const [skills, setSkills] = useState([
  //   "HTML ",
  //   "CSS ",
  //   "JavaScript ",
  //   "React ",
  //   "AlpineJS ",
  //   "Livewire ",
  //   "SASS ",
  //   "Tailwind ",
  //   "NodeJS ",
  //   "PHP ",
  //   "Laravel ",
  //   "MySQL ",
  //   "Pest ",
  //   "OOP ",
  //   "Git",
  // ]);

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
    // const newExperience = experience.map((experienceItem) => {
    //   if (experienceItem.id === id) {
    //     const newExperienceItem = { ...experienceItem, [property]: value };
    //     return newExperienceItem;
    //   }
    //   return experienceItem;
    // });
    // setExperience(newExperience);
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
    <div className="flex flex-col gap-5 p-3 md:flex-row">
      <div className="min-w-[400px] md:min-w-60 flex flex-col gap-4">
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
          detailsCollapseValue={forms.othersDetails}
          currentSection={currentSection}
          handleSectionChange={handleSectionChange}
          data={others}
          handleChange=
          {handleOthersDetails}
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
        // skills={skills}
        others={others}
      ></CVPreview>
    </div>
  );
}

export default App;
