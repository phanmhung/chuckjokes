import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "../../assets/assets_Homework_Front-End_01/search-copy.png";

const SearchBar = ({ data }) => {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="How can we make you laugh today?"
          onChange={handleFilter}
        />
        <img src={SearchIcon} alt="search icon" className="searchIcon" />
      </div>
      {/* {filteredData.length && (
        <div className="dataResult">
          {/* {filteredData.slice(0, 15).map((value, key) => {
          return (
            <a className="dataItem" href={value.link}>
              <p>{value.title}</p>
            </a>
          );
        })}
        </div>
      )} */}
    </div>
  );
};

export default SearchBar;
