import FormItem from "./FormItem";

function PersonalDetails({ data, handleChange }) {
  return (
    <div className="border-2 border-red-500 p-2">
      <h3 className="mb-2 text-xl font-bold">Personal Details</h3>
      <form>
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
        <div className="flex flex-col">
          <label htmlFor="phone">Extras: </label>
          <div className="flex gap-3">
            <input type="text" placeholder="Social Media Name..." />
            <input type="url" placeholder="URL..." />
            <select name="icon" id="icon">
              <option value="0">😃</option>
              <option value="1">🍉</option>
              <option value="2">✔</option>
              <option value="3">🍿</option>
            </select>
            <button type="button">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
}

// PersonalDetails.defaultProps = {
//     data:
// }

export default PersonalDetails;
