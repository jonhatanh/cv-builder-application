function FormItem({ type = "text", value, handleChange, name, labelText = "", placeHolder, ...restProps }) {
  return (
    <div className="flex flex-col flex-1">
      <label htmlFor={name} className="text-lg font-semibold">
        {labelText}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeHolder}
        onChange={(e) => handleChange(name, e.target.value)}
        className="border-black-100 rounded-md border-2 p-1 focus:bg-sky-100"
        {...restProps}
      />
    </div>
  );
}

export default FormItem;
