import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import PersonalDetails from "./components/PersonalDetails";
import CVPreview from "./components/CVPreview";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    name: "JONHATAN JACOB HIGUERA CAMACHO",
    email: "jonhatan.higuera@gmail.com",
    phone: "33-1707-9174",
    extras: {},
  });
  const [education, setEducation] = useState([
    {
      schoolName: "CUCEI",
      fieldOfStudy: "Ingeniería Informática",
      date: "33-1707-9174",
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
