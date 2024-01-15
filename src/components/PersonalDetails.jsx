import { useState } from "react";
import FormItem from "./FormItem";
import SocialMediaForm from "./SocialMediaForm";
import SocialMediaList from "./SocialMediaList";

function PersonalDetails({
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
    if(isUpdating) {
      setCurrentSocialMediaId(socialMediaId);
    } else {
      setCurrentSocialMediaId(null);
    }
  }

  function handleOpenForm(open) {
    setOpenForm(open);
  }

  return (
    <div className="rounded-md border-2 border-sky-300 p-2 ">
      <h3 className="mb-2 text-xl font-bold">Personal Details</h3>
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
  );
}

// PersonalDetails.defaultProps = {
//     data:
// }

export default PersonalDetails;
