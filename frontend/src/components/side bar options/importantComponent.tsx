import DisplayData from "../../reusable components/display data/DisplayData";

interface task{
  task: string;
  date: string;
  important: string;
}

interface dataRenderProps{
  data: task[];
}

export default function ImportantComponent({ data, removeData }) {
  const filteredDataImportant = data.filter((d) => d.important === "true");
  return <DisplayData data={filteredDataImportant} removeData={removeData} />;
}

//bug: when the data is removed by index, it gives the wrong index.
//fix: data should be removed by id