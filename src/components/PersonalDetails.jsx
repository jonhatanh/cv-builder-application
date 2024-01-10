function PersonalDetails({ data, handleChange }) {
  return (
    <div className="border-2 border-red-500">
      <h3 className="text-xl font-bold">Personal Details</h3>
      <form>
        <div className="flex flex-col">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => handleChange("name", e.target.value)}
            name="name"
            className="rounded-md border-2 border-black"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => handleChange("email", e.target.value)}
            name="email"
            className="rounded-md border-2 border-black"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone">Phone number: </label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            name="phone"
            className="rounded-md border-2 border-black"
          />
        </div>
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
