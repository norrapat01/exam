import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./SearchBar.module.css";
interface SearchResultProps {
  result: string;
}

const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  const navigate = useNavigate();

  const handleCard = (name: string) => {
    navigate(`/detail?name=${name}`);
  };

  const handleClick = () => {
    handleCard(result);
  };

  return (
    <div className={style.results} onClick={handleClick}>
      {result}
    </div>
  );
};

export default SearchResult;
