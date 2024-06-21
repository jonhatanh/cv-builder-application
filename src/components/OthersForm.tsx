import { useContext } from "react";
import FormItem from "./FormItem";
import { CustomDetailsItem } from "../types";
import { CustomDispatcherType } from "../App";
import { useHandleChange } from "../hooks/useHandleChange";

function OthersForm({ data, dispatcher }: { data: CustomDetailsItem; dispatcher: CustomDispatcherType }) {
  const dispatch = useContext(dispatcher);
  const handleChange = useHandleChange(dispatch);
  return (
    <form className="flex flex-col gap-3">
      <FormItem
        labelText="Title"
        value={data.title}
        name="title"
        handleChange={handleChange}
        itemId={data.id}
        placeholder="Can be a bootcamp name, course, project, etc."
      ></FormItem>
      <FormItem
        labelText="Subtitle"
        value={data.subtitle}
        name="subtitle"
        handleChange={handleChange}
        itemId={data.id}
        placeholder="Degree / Field Of Study"
      ></FormItem>
      <FormItem
        labelText="Date"
        value={data.date}
        name="date"
        handleChange={handleChange}
        itemId={data.id}
        placeholder="01/2020 - 12/2020"
      ></FormItem>
      <FormItem
        textArea
        labelText="Description"
        value={data.description}
        name="description"
        handleChange={handleChange}
        itemId={data.id}
      ></FormItem>
    </form>
  );
}

export default OthersForm;
