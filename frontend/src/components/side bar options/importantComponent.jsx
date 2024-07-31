import DisplayData from "../display data/DisplayData";

export default function ImportantComponent({ data, removeData }) {

  const filteredDataImportant = data.filter((d) => d.important === "true");
  return <DisplayData data={filteredDataImportant} removeData={removeData} />;

}
