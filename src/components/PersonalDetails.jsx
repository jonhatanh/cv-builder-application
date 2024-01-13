import FormItem from "./FormItem";
import SocialMediaForm from "./SocialMediaForm";
import SocialMediaList from "./SocialMediaList";

function PersonalDetails({ data, socialMedia, handleChange }) {
  return (
    <div className="min-w-[400px] flex-1 rounded-md border-2 border-sky-300 p-2 md:min-w-60">
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
      <SocialMediaList socialMedia={socialMedia} />
      <SocialMediaForm socialMedia={socialMedia}></SocialMediaForm>
    </div>
  );
}

// PersonalDetails.defaultProps = {
//     data:
// }

export default PersonalDetails;
