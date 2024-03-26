import { useState } from "react";
import FormItem from "./FormItem";
import SocialMediaForm from "./SocialMediaForm";
import SocialMediaList from "./SocialMediaList";
import { getCollapsableClass } from "../helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import SectionButton from "./SectionButton";
import { FORMS_ID } from "../constans";
import { usePersonalDetails, usePersonalDetailsDispatch } from "../hooks/PersonalDetails";
function PersonalDetails({
  currentSection,
  handleSectionChange,
}) {
  const personalDetails = usePersonalDetails()
  const dispatch = usePersonalDetailsDispatch()
  const [currentSocialMediaId, setCurrentSocialMediaId] = useState(null); //for updating
  const [openForm, setOpenForm] = useState(false);

  function changeIsUpdating(isUpdating, socialMediaId) {
    if (isUpdating) {
      setCurrentSocialMediaId(socialMediaId);
    } else {
      setCurrentSocialMediaId(null);
    }
  }

  function handleOpenForm(open) {
    setOpenForm(open);
  }

  const sectionIsOpen = currentSection === FORMS_ID.personalDetails;
  const sectionClass = getCollapsableClass(
    currentSection === FORMS_ID.personalDetails,
    "flex flex-col gap-5 pb-3 px-4",
  );

  function handleChange(property, value) {
    dispatch({
      type: "changed_input",
      property,
      value
    });
  }
  return (
    <div className="flex flex-col rounded-md border-2 border-sky-700 border-opacity-50 bg-white shadow-md">
      <SectionButton
        onClick={() => handleSectionChange(FORMS_ID.personalDetails)}
        sectionIsOpen={sectionIsOpen}
      >
        <FontAwesomeIcon className="text-sm" icon={faUser} /> Personal Details
      </SectionButton>
      <div className={sectionClass}>
        <form className="flex flex-col gap-3">
          <FormItem
            labelText="Full Name"
            value={personalDetails.name}
            name="name"
            handleChange={handleChange}
          ></FormItem>
          <FormItem
            labelText="Email"
            type="email"
            value={personalDetails.email}
            name="email"
            handleChange={handleChange}
          ></FormItem>
          <FormItem
            labelText="Phone number"
            type="tel"
            value={personalDetails.phone}
            name="phone"
            handleChange={handleChange}
          ></FormItem>
          <FormItem
            textArea
            labelText="Skills (separated by comma)"
            value={personalDetails.skills}
            name="skills"
            handleChange={handleChange}
          ></FormItem>
        </form>
        <SocialMediaList
          currentSocialMediaId={currentSocialMediaId}
          changeIsUpdating={changeIsUpdating}
          formIsOpen={openForm}
          handleOpenForm={handleOpenForm}
        />
        <SocialMediaForm
          currentSocialMediaId={currentSocialMediaId}
          formIsOpen={openForm}
          handleOpenForm={handleOpenForm}
          changeIsUpdating={changeIsUpdating}
        ></SocialMediaForm>
      </div>
    </div>
  );
}

// PersonalDetails.defaultProps = {
//     personalDetails:
// }

export default PersonalDetails;
