import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import PersonalDetails from "./components/PersonalDetails";
import CVPreview from "./components/CVPreview";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    name: "JONHATAN HIGUERA",
    email: "jonhatan.higuera@gmail.com",
    phone: "33-1707-9174",
    extras: {},
  });
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

  function handlePersonalDetails(property, value) {
    const newDetails = { ...personalDetails, [property]: value };
    setPersonalDetails(newDetails);
  }

  return (
    <div className="flex flex-col gap-5 p-3">
      <PersonalDetails
        data={personalDetails}
        handleChange={handlePersonalDetails}
      ></PersonalDetails>
      <CVPreview personalDetails={personalDetails} education={education} skills={skills}></CVPreview>
    </div>
  );
}

export default App;
