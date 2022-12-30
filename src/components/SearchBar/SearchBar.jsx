import React, { useEffect, useState } from 'react';
import SearchIcon from '../../assets/assets_Homework_Front-End_01/search-copy.png';
import './SearchBar.scss';
import axios from 'axios';
import { URL_DETAILS } from '../../utils/fetchData';
import { useDebounce } from 'use-debounce';

const SearchBar = ({ data }) => {
  const [list, setList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const getJokesBySearch = async (searchQuery) => {
    
    const res = await axios.get(URL_DETAILS.getJokesBySearch+`${searchQuery[0]}`);
    setList(res.data.result.slice(0,4));
    console.log("🚀 ~ file: SearchBar.jsx:17 ~ getJokesBySearch ~ res.data.result.slice(0,4)", res.data.result.slice(0,4))
    
  };
  useEffect(() => {
    if (debouncedSearchQuery === '') {
      setList([]);
    }

    if ((debouncedSearchQuery || '').length >= 2) {
      getJokesBySearch(debouncedSearchQuery);
    }
  }, [debouncedSearchQuery]);

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="How can we make you laugh today?"
          onChange={(e) => e.target.value.length>3 && setSearchQuery(e.target.value)}
        />
        <img src={SearchIcon} alt="search icon" className="searchIcon" />
      </div>
      {list.length && (
        <div className="dataResult">
         {list.map((joke, index) => 
            <a key={index} className="dataItem" href={joke.link}>
              <p>{joke.value.slice(0,12)}</p>
            </a>
        )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
