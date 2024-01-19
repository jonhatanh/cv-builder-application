function FormItem({
  type = "text",
  value,
  handleChange,
  name,
  labelText = "",
  textArea = false,
  itemId = undefined,
  ...restProps
}) {
  return (
    <div className="flex flex-1 flex-col">
      <label htmlFor={name} className="text-lg font-semibold">
        {labelText}
      </label>
      {textArea ? (
        <textarea
          name={name}
          value={value}
          onChange={(e) => handleChange(name, e.target.value, itemId)}
          className="min-h-16 rounded-md border-2 border-sky-300 py-1 px-2 py-1 invalid:border-red-300 focus:bg-sky-100 focus:bg-sky-100 focus:outline-sky-500 invalid:focus:bg-red-100 invalid:focus:outline-red-300"
          {...restProps}
          cols="30"
          rows="2"
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={(e) => handleChange(name, e.target.value, itemId)}
          className="rounded-md border-2 border-sky-300 px-2 py-1 invalid:border-red-300 focus:bg-sky-100 focus:outline-sky-500 invalid:focus:bg-red-100 invalid:focus:outline-red-300"
          {...restProps}
        />
      )}
    </div>
  );
}

export default FormItem;
