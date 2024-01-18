import { useState } from "react";
import FormItem from "./FormItem";
import SocialMediaForm from "./SocialMediaForm";
import SocialMediaList from "./SocialMediaList";
import { forms, getCollapsableClass } from "../helpers";
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

  const sectionClass = getCollapsableClass(
    currentSection === forms.personalDetails,
    "flex flex-col gap-3",
  );

  return (
    <div className="flex flex-col gap-4 rounded-md border-2 border-black  border-opacity-30 p-2 px-4 pb-5 shadow-md">
      <button
        className="text-xl font-bold"
        onClick={() => handleSectionChange(forms.personalDetails)}
      >
        Personal Details
      </button>
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
          deleteSocialMedia={deleteSocialMedia}
          changeIsUpdating={changeIsUpdating}
          handleOpenForm={handleOpenForm}
        />
        <SocialMediaForm
          allSocialMedia={socialMedia}
          currentSocialMediaId={currentSocialMediaId}
          addSocialMedia={addSocialMedia}
          handleOpenForm={handleOpenForm}
          formIsOpen={openForm}
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
