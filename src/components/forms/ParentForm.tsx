const ParentForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  return (
    <div className="">
      <h2>{type === "create" ? "Create Parent" : "Update Parent"}</h2>
      <form>
        <div>
          <label htmlFor="parentName">Parent Name:</label>
          <input
            type="text"
            id="parentName"
            name="parentName"
            defaultValue={type === "update" ? data?.parentName : ""}
          />
        </div>
        <button type="submit">{type === "create" ? "Create" : "Update"}</button>
      </form>
    </div>
  );
};

export default ParentForm;
