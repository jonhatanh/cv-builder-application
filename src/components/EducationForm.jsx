import FormItem from "./FormItem";

function EducationForm({data, handleChange}) {

    return (
      <form className="flex flex-col gap-3">
        <FormItem
          labelText="School"
          value={data.title}
          name="title"
          handleChange={handleChange}
          itemId={data.id}
        ></FormItem>
        <FormItem
          labelText="Degree"
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
          placeholder="01/2020 - 06/2023"
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

export default EducationForm;