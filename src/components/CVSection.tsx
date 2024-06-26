import { BulletItem, CustomDetailsType } from "../types";

function CVSection({ title, sectionData }: { title: string; sectionData: CustomDetailsType }) {
  if(sectionData.length === 0) return null;
  function getListElement(bullet: BulletItem) {
    const content = getLiContent(bullet.text);
    return (
      <li
        className="break-words marker:text-xs"
        key={bullet.id}
      >
        {content}
      </li>
    );
  }

  function getLiContent(text: string) {
    const linkRegex = /\[(.*?)\]\((.*?)\)/g;
    const parts = text.split(linkRegex);

    return parts.map((part, index) => {
      if (index % 3 === 1) {
        // link text
        return (
          <a className="underline" key={index} href={parts[index + 1]}>
            {part}
          </a>
        );
      } else if (index % 3 === 0) {
        // normal text
        return <span key={index}>{part}</span>;
      } else {
        // This is the link URL, skip it
        return null;
      }
    });
  }

  const sectionList = sectionData.map((section) => {
    return (
      <div className="mb-2" key={section.id}>
        <div className="-mb-1 flex justify-between gap-2">
          <h5 className="text-md font-bold break-words w-4/6">{section.title}</h5>
          <p className="text-sm font-bold text-end ">{section.date}</p>
        </div>
        <h6 className="text-sm font-bold">{section.subtitle}</h6>
        <p className="my-1 text-sm break-words">{section.description}</p>
        <ul className="ml-7 list-disc text-sm">
          {section.bullets.map((bullet) => getListElement(bullet))}
        </ul>
      </div>
    );
  });

  return (
    <>
      <div className="h-[1px] w-full bg-black shadow-sm shadow-slate-200"></div>
      <h4 className="text-center text-lg font-bold">{title}</h4>
      {sectionList}
    </>
  );
}

export default CVSection;
