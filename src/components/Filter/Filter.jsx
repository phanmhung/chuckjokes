import React, { useState } from 'react';
import './Filter.css';
import arrowDown from '../../assets/assets_Homework_Front-End_01/path-copy-7@2x.png'

export const backgroundColor = [
  'red',
  'pink',
  'aqua',
  'aquamarine',
  'deepskyblue',
  'goldenrod',
  'gold',
  'cyan',
  'blue',
  'blueviolet',
  'brown',
  'burlywood',
  'cadetblue',
  'chartreuse',
  'chocolate',
];

function Filter({ list, setSelected }) {
  const [viewAll, setViewAll] = useState(false);
  const minimalList = list.slice(0, 6);
  const listToRender = viewAll ? list : minimalList;

  return (
    <div className="gridContainer">
      {listToRender.map((cat, i) => {
        return (
          <button
            type="button"
            className="btn"
            onClick={() => setSelected(cat)}
            key={i}
            style={{ backgroundColor: backgroundColor[i] }}
          >
            {cat} Jokes
          </button>
        );
      })}
        <button
        type="button"
        className="btn btn-view"
        onClick={() => setViewAll((prev)=> !prev)}
      >
        { viewAll ? (
          <div>
          Show less
          <img className="arrow-up"src={arrowDown} alt="arrow up" />
          </div>
          ):
          (
            <div>
          view all
          <img src={arrowDown} alt="arrow down" />
          </div>
          )}
      </button> 
    </div>
  );
}

export default Filter;
