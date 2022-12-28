import React from 'react';

function Filter({ list, filter }) {
  console.log("🚀 ~ file: Filter.jsx:4 ~ Filter ~ list", list)
  return (
    <div className="main__btnGrid">
      {list.map((cat, i) => {
        return (
          <button
            type="button"
            className="main__button"
            onClick={() => filter(cat)}
            key={i}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;
