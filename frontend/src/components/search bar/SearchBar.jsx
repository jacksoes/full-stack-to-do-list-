import { Container } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export default function SearchBar({setSearchBarState}) {



  return (
    <Container>
      <div className="content">
        <div className="search-bar">
          <input
            type="text"
            className="search-bar-input"
            placeholder="Search task name"
            aria-label="Search take name"
            onChange={(event) => setSearchBarState(event.target.value)}
          />
          <button className="search-bar-submit d-flex justify-content-center align-items-center">
            <FaSearch />
          </button>
        </div>
      </div>
    </Container>
  );
}
