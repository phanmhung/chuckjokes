import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllJokes, getCategories } from '../redux/actions/jokeActions';
import Filter from './Filter/Filter';

function Feed() {
    const dispatch = useDispatch();
    const jokes = useSelector(state => state.jokesReducer.jokes);
    const categories = useSelector(state => state.categoriesReducer.categories);

    const allCategories =['All', ...new Set(categories.map(category => category))];
    
    const [jokeItem, setJokeItem] = useState(jokes);

    const filter = (category) => {
        if(category === 'All') {
            setJokeItem(jokes);
            return;
        }
        const filteredData = jokes.filter(joke => joke.category === category);
        setJokeItem(filteredData);
    }

    useEffect(() => {
        dispatch(getAllJokes());
        dispatch(getCategories());
    },[dispatch]);
  return (
    <Filter list={allCategories} filter={filter} />
  )
}

export default Feed