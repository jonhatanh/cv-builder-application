import { useState } from "react";
import FormItem from "./FormItem";
import SocialMediaForm from "./SocialMediaForm";
import SocialMediaList from "./SocialMediaList";
import { forms, getCollapsableClass } from "../helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import SectionButton from "./SectionButton";
function PersonalDetails({
  currentSection,
  handleSectionChange,
  data,
  socialMedia,
  handleChange,
  addSocialMedia,
  updateSocialMedia,
  deleteSocialMedia,
}) {
  const [currentSocialMediaId, setCurrentSocialMediaId] = useState(null); //for updating
  const [openForm, setOpenForm] = useState(false);

  function changeIsUpdating(isUpdating, socialMediaId) {
    //if is updating
    if (isUpdating) {
      setCurrentSocialMediaId(socialMediaId);
    } else {
      setCurrentSocialMediaId(null);
    }
  }

  function handleOpenForm(open) {
    setOpenForm(open);
  }

  const sectionIsOpen = currentSection === forms.personalDetails;
  const sectionClass = getCollapsableClass(
    currentSection === forms.personalDetails,
    "flex flex-col gap-5 pb-3 px-4",
  );

  return (
    <div className="flex flex-col rounded-md border-2 border-sky-700 border-opacity-50 bg-white shadow-md">
      <SectionButton
        onClick={() => handleSectionChange(forms.personalDetails)}
        sectionIsOpen={sectionIsOpen}
      >
        <FontAwesomeIcon className="text-sm" icon={faUser} /> Personal Details
      </SectionButton>
      <div className={sectionClass}>
        <form className="flex flex-col gap-3">
          <FormItem
            labelText="Full Name"
            value={data.name}
            name="name"
            handleChange={handleChange}
          ></FormItem>
          <FormItem
            labelText="Email"
            type="email"
            value={data.email}
            name="email"
            handleChange={handleChange}
          ></FormItem>
          <FormItem
            labelText="Phone number"
            type="tel"
            value={data.phone}
            name="phone"
            handleChange={handleChange}
          ></FormItem>
          <FormItem
            textArea
            labelText="Skills (separated by comma)"
            value={data.skills}
            name="skills"
            handleChange={handleChange}
          ></FormItem>
        </form>
        <SocialMediaList
          socialMedia={socialMedia}
          currentSocialMediaId={currentSocialMediaId}
          deleteSocialMedia={deleteSocialMedia}
          changeIsUpdating={changeIsUpdating}
          formIsOpen={openForm}
          handleOpenForm={handleOpenForm}
        />
        <SocialMediaForm
          allSocialMedia={socialMedia}
          currentSocialMediaId={currentSocialMediaId}
          addSocialMedia={addSocialMedia}
          formIsOpen={openForm}
          handleOpenForm={handleOpenForm}
          changeIsUpdating={changeIsUpdating}
          updateSocialMedia={updateSocialMedia}
        ></SocialMediaForm>
      </div>
    </div>
  );
}

// PersonalDetails.defaultProps = {
//     data:
// }

export default PersonalDetails;
