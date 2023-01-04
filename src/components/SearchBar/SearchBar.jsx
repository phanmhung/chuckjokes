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
    
    axios.get(URL_DETAILS.getJokesBySearch+`${searchQuery[0]}`).then(({data})=>
    {
      const {result} = data;
      setList(result.slice(0,5));
    });
    
    
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
        <ul className="dataResult">
         {list.map((joke, index) => 
            <li key={index} className="dataItem" href={joke.link}>
              <img src={require('../../assets/assets_Homework_Front-End_01/green-light-copy.png')} alt="" />
              
              <span>{joke.categories.length!==0 ? joke.categories[0] : 'Uncategorized'} Jokes: {joke.value.slice(0,24)} ...</span>
            </li>
        )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
