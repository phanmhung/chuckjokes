import React from 'react';
import './Filter.css';

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

function Filter({ list, selected, setSelected }) {
  
  return (
    <div className="gridContainer">
      {list.map((cat, i) => {
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
    </div>
  );
}

export default Filter;
