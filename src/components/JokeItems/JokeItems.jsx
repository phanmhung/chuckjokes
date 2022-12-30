import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './JokeItems.scss';
import arrowDown from '../../assets/assets_Homework_Front-End_01/path-copy-7@2x.png';

const JokesItem = ({ listJokes }) => {
  const [viewMore, setViewMore] = React.useState(true);
  const [renderJokes, setRenderJokes] = React.useState(listJokes);
  useEffect(() => {
    if (listJokes === undefined) return;
    if (listJokes.length > 6 && viewMore) {
      setRenderJokes(listJokes.slice(0, 6));
    }
    if (listJokes.length > 6 && !viewMore) {
      setRenderJokes(listJokes);
    }
    if (listJokes.length < 6) {
      setRenderJokes(listJokes);
    }
  }, [listJokes, viewMore]);
  console.log("🚀 ~ file: JokeItems.jsx:20 ~ JokesItem ~ listJokes", listJokes)

  if (listJokes === undefined) return <></>;
  return (
    <>
      <div className="cards">
        {renderJokes.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="cardTitle">
                <img
                  src={require('../../assets/assets_Homework_Front-End_01/green-light-copy.png')}
                  className="main__icon"
                  alt="icon"
                />
                <h3>{item.categories[0]} jokes</h3>
              </div>
              <p className="text-joke">{item.value}</p>
              <div className="stats">
                <Link to={`/jokes/${item.id}`}>
                  <button>See stats</button>
                  <img
                    src={require('../../assets/assets_Homework_Front-End_01/path.png')}
                    className="main__path"
                    alt="icon"
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {listJokes.length > 6 ? (
        <div className="btn-container">
          <button
            type="button"
            className="btn btn-view"
            onClick={() => setViewMore((prev) => !prev)}
          >
            {viewMore ? (
              <div>
                view more
                <img src={arrowDown} alt="arrow down" />
              </div>
            ) : (
              <div>
                Show less
                <img className="arrow-up" src={arrowDown} alt="arrow up" />
              </div>
            )}
          </button>
        </div>
      ) : null}
    </>
  );
};

export default JokesItem;
