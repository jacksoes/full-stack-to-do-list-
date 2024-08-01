export default function sortByDate(objArr) {
  const sortedData = objArr.sort((a, b) => new Date(a.date) - new Date(b.date));
  return sortedData;
}
