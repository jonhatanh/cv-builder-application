import { useContext } from "react";
import FormItem from "./FormItem";
import { CustomDetailsItem } from "../types";
import { CustomDispatcherType } from "../App";
import { useHandleChange } from "../hooks/useHandleChange";

function ExperienceForm({ data, dispatcher }: { data: CustomDetailsItem; dispatcher: CustomDispatcherType}) {
  const dispatch = useContext(dispatcher);
  const handleChange = useHandleChange(dispatch);
  return (
    <form className="flex flex-col gap-3">
      <FormItem
        labelText="Company Name"
        value={data.title}
        name="title"
        handleChange={handleChange}
        itemId={data.id}
      ></FormItem>
      <FormItem
        labelText="Position Title"
        value={data.subtitle}
        name="subtitle"
        handleChange={handleChange}
        itemId={data.id}
      ></FormItem>
      <FormItem
        labelText="Date"
        value={data.date}
        name="date"
        handleChange={handleChange}
        itemId={data.id}
        placeholder="01/2021 - Present"
      ></FormItem>
      <FormItem
        textArea
        labelText="Job Description"
        value={data.description}
        name="description"
        handleChange={handleChange}
        itemId={data.id}
      ></FormItem>
    </form>
  );
}

export default ExperienceForm;
