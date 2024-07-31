import DisplayData from "../display data/DisplayData";

export default function TodayComponent({ data, removeData }) {
  function checkDateToday(dataItem) {
    const dataItemDate = new Date(dataItem.date);
    const dateToday = new Date();
    if (
      dataItemDate.getUTCFullYear() === dateToday.getUTCFullYear() &&
      dataItemDate.getUTCMonth() === dateToday.getUTCMonth() &&
      dataItemDate.getUTCDate() === dateToday.getUTCDate()
    )
      return true;
    else return false;
  }

  const filteredData = data.filter((d) => checkDateToday(d) === true);
  return <DisplayData data={filteredData} removeData={removeData} />;
}
