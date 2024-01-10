import CVSection from "./CVSection";

function CVPreview({ personalDetails, education, skills }) {

  const skillsList = skills.map((skill, index)=> {
          if(index === skills.length - 1) {
            return <li>{skill}</li>;
          }
          return (
            <li className="flex items-center gap-2">
              {skill}
              <span className="text-xs">|</span>
            </li>
          );
        })

  return (
    <div className="flex flex-col gap-3 border-2 border-slate-400">
      <div>
        <h3 className="text-center text-3xl font-bold mb-1">{personalDetails.name}</h3>
        <div className="flex justify-center gap-3 mb-3">
          <p>{personalDetails.email}</p>
          <p>{personalDetails.phone}</p>
        </div>
        <div className="w-full h-1 bg-black"></div>
      </div>
      <div>
        <h4 className="text-lg font-bold text-center mb-2">SKILLS</h4>
        <ul className="flex gap-2 flex-wrap justify-center align-middle max-w-sm mx-auto ">
        {skillsList}
        </ul>
      </div>
      <CVSection title="EDUCATION" sectionData={education}></CVSection>

    </div>
  );
}

export default CVPreview;
