import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJokes, getCategories } from '../redux/actions/jokeActions';
import Filter from './Filter/Filter';
import JokeItems from './JokeItems/JokeItems';
import './Feed.scss';

function Feed() {
  const dispatch = useDispatch();
  const jokes = useSelector((state) => state.jokesReducer.jokes);

  const allCategories = useSelector(
    (state) => state.categoriesReducer.categories
  );

  const [jokeItem, setJokeItem] = useState(jokes);
  const [selected, setSelected] = useState(allCategories[0]);
  

  useEffect(() => {
    if (jokes === undefined) return;
    const filteredData = jokes.filter((joke) => {
      return joke.categories[0] === selected;
    });
    setJokeItem(filteredData);
    console.log("🚀 ~ file: Feed.jsx:23 ~ filteredData ~ selected", selected)
    console.log("🚀 ~ file: Feed.jsx:26 ~ useEffect ~ filteredData", filteredData)
  }, [selected, jokes]);

  useEffect(() => {
    dispatch(getAllJokes());
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div className="main">
      <Filter
        list={allCategories}
        selected={selected}
        setSelected={setSelected}
      />
      <JokeItems listJokes={jokeItem} />
    </div>
  );
}

export default Feed;
