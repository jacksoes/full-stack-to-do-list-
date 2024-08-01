export default function getData(
  uri: string,
  setState: (data: any[]) => void
): void {
  fetch(uri)
    .then((response) => response.json())
    .then((data) => {
      setState(data);
    })
    .catch((error) =>
      console.error("error retrieving tasks to mainComponent:", error)
    );
}
