import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../../style/SearchBar.module.css";

const SearchResult = ({ result }: { result: string }) => {
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
