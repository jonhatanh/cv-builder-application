import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import PersonalDetails from "./components/PersonalDetails";
import CVPreview from "./components/CVPreview";
import Forms from "./components/Forms";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    name: "JONHATAN HIGUERA",
    email: "jonhatan.higuera@gmail.com",
    phone: "33-1707-9174",
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
      bullets: ["GPA: 98 / 100", "Exp. Graduation Date: 06/2024"],
    },
    {
      id: crypto.randomUUID(),
      title: "CENTRO DE ENSEÑANZA TÉCNICA INDUSTRIAL",
      subtitle: "Degree in Software Development",
      date: "08/2016 - 06/2020",
      description: "",
      bullets: ["GPA: 92 / 100"],
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
        `Performed maintenance and developed new features for existing projects using the TALL stack (Tailwind, Alpine, Laravel, Livewire).`,
        `Created a landing page for an internal project and the [Eventos CUCEI](https://eventos.cucei.udg.mx/) website.`,
        `Extensively utilized the Laravel framework, gaining knowledge of MVC, routing, middlewares, sessions, authentication, authorization, email sending, file storage,migrations, seeders, Eloquent ORM, factories, and testing.`,
        `Implemented feature tests in existing projects to ensure the proper functionality of routes and components.`,
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
        `Acquired a solid understanding of backend concepts and successfully applied them, creating a RESTful API using Node.js and the Express framework.`,
      ],
    },
  ]);
  const [skills, setSkills] = useState([
    "HTML ",
    "CSS ",
    "JavaScript ",
    "React ",
    "AlpineJS ",
    "Livewire ",
    "SASS ",
    "Tailwind ",
    "NodeJS ",
    "PHP ",
    "Laravel ",
    "MySQL ",
    "Pest ",
    "OOP ",
    "Git",
  ]);

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
    const newSocialMedia = socialMedia.map(social => {
      if(social.id === socialMediaId) {
        return updatedSocialMedia;
      }
      return social;
    })
    setSocialMedia(newSocialMedia)
  }

  function handlePersonalDetails(property, value) {
    const newDetails = { ...personalDetails, [property]: value };
    setPersonalDetails(newDetails);
  }

  return (
    <div className="flex flex-col gap-5 p-3 md:flex-row">
      <Forms>
        <PersonalDetails
          data={personalDetails}
          socialMedia={socialMedia}
          handleChange={handlePersonalDetails}
          addSocialMedia={addSocialMedia}
          updateSocialMedia={updateSocialMedia}
          deleteSocialMedia={deleteSocialMedia}
        ></PersonalDetails>
      </Forms>
      <CVPreview
        personalDetails={personalDetails}
        socialMedia={socialMedia}
        education={education}
        experience={experience}
        skills={skills}
        others={others}
      ></CVPreview>
    </div>
  );
}

export default App;
