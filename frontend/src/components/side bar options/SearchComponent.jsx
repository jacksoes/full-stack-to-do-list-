import SearchBar from "../../reusable components/search bar/SearchBar";
import DisplayData from "../../reusable components/display data/DisplayData";


import { useState, useEffect } from "react";

export default function SearchComponent({ data, removeData }) {

    const [searchBarState, setSearchBarState] = useState("");
    const [searchedData, setSearchedData ] = useState(data);

    useEffect(() => {
        setSearchedData(data.filter(d => d.task.indexOf(searchBarState) !== -1))
    }, [searchBarState, removeData])

  return (
    <>
      <SearchBar setSearchBarState={setSearchBarState} />
      <DisplayData data={searchedData} removeData={removeData} />
    </>
  );
}
