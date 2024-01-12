import CVSection from "./CVSection";

function CVPreview({ personalDetails, education, experience, skills, others }) {
  const skillsList = skills.map((skill, index) => {
    if (index === skills.length - 1) {
      return <li>{skill}</li>;
    }
    return (
      <li className="flex items-center gap-2">
        {skill}
        <span className="text-xs">|</span>
      </li>
    );
  });

  return (
    <div className="flex min-w-[400px] max-w-[700px] flex-col gap-3 border-2 border-slate-400 mx-auto">
      <div>
        <h3 className="mb-1 text-center text-3xl font-bold">
          {personalDetails.name}
        </h3>
        <div className="mb-3 flex justify-center gap-3">
          <p>{personalDetails.email}</p>
          <p>{personalDetails.phone}</p>
        </div>
        <div className="h-1 w-full bg-black"></div>
      </div>
      <div>
        <h4 className="mb-2 text-center text-lg font-bold">SKILLS</h4>
        <ul className="mx-auto flex max-w-sm flex-wrap justify-center gap-2 align-middle ">
          {skillsList}
        </ul>
      </div>
      <CVSection
        title="PROFESSIONAL EXPERIENCE"
        sectionData={experience}
      ></CVSection>
      <CVSection title="EDUCATION" sectionData={education}></CVSection>
      <CVSection title="OTHERS" sectionData={others}></CVSection>
    </div>
  );
}

export default CVPreview;
