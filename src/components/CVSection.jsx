function CVSection({ title, sectionData }) {
  const sectionList = sectionData.map((section) => {
    return (
      <div className="mb-2" key={section.id}>
        <div className="flex justify-between">
          <h5 className="text-md font-bold">{section.title}</h5>
          <p className="text-sm font-bold">{section.date}</p>
        </div>
        <h6 className="text-sm font-bold">{section.subtitle}</h6>
        <p>{section.description}</p>
        <ul className="ml-7 list-disc text-sm">
          {section.bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      </div>
    );
  });

  return (
    <>
      <div className="h-[2px] w-full bg-black"></div>
      <h4 className="text-center text-lg font-bold">{title}</h4>
      {sectionList}
    </>
  );
}

export default CVSection;
