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
          className="border-black-100 rounded-md border-2 p-1 focus:bg-sky-100 min-h-16"
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
          className="border-black-100 rounded-md border-2 p-1 focus:bg-sky-100"
          {...restProps}
        />
      )}
    </div>
  );
}

export default FormItem;
