import { useState } from "react";

const forms = {
  personalDetails: 1,
  professionalExperience: 2,
  educationalExperience: 3,
};

function Forms({ children }) {
  const [currentForm, setCurrentForm] = useState(1);

  return <div className="min-w-[400px] md:min-w-60">{children}</div>;
}

export default Forms;
