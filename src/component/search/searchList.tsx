import React from "react";
import SearchResult from "./searchResult";
import { ISearchResultsListProps } from "src/interface/search";
import style from "./SearchBar.module.css";

const SearchResultsList: React.FC<ISearchResultsListProps> = ({ results }) => {
  if (results.length == 0) {
    return <></>;
  }
  return (
    <div className={style.resultsList}>
      {results.map((result, id) => (
        <SearchResult result={result.name} key={id} />
      ))}
    </div>
  );
};

export default SearchResultsList;
