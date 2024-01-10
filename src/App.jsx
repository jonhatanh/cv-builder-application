import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import PersonalDetails from "./components/PersonalDetails";
import CVPreview from "./components/CVPreview";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    name: "Jhony",
    email: "",
    phone: "",
    extras: {},
  });

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
      <CVPreview personalDetails={personalDetails}></CVPreview>
    </div>
  );
}

export default App;
