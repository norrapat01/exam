import { useState } from "react";
import { getStarbucksDataByName } from "src/api/api.route";
import style from "../../style/SearchBar.module.css";

const SearchBar = ({
  setResults,
}: {
  setResults: (results: any[]) => void;
}) => {
  const [input, setInput] = useState<string>("");

  let data;
  const fetchData = async (value: string) => {
    try {
      if (value === "") {
        setResults([]);
      } else {
        data = await getStarbucksDataByName(value);
        setResults(data);
      }
    } catch (error) {
      console.error("Error fetching Starbucks data:", error);
    }
  };

  const handleChange = (value: string) => {
    setInput(value);
    fetchData(value);
  };

  const handleClear = () => {
    setInput("");
    fetchData("");
  };

  const handleSearchClick = () => {
    fetchData(input);
  };

  return (
    <div className={style.inputWrapper}>
      <nav className="navbar bg-body-tertiary w-100">
        <div className="container-fluid">
          <form className="d-flex w-100" role="search">
            <button
              className="btn btn-outline-success w-10"
              onClick={handleClear}
            >
              Clear
            </button>
            <input
              className="form-control me-2 w-80"
              placeholder="Type to search..."
              value={input}
              onChange={(e) => handleChange(e.target.value)}
            />
            <button
              className="btn btn-outline-secondary w-10"
              onClick={handleSearchClick}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default SearchBar;
