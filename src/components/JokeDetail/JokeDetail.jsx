import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getJokeById } from '../../redux/actions/jokeActions';

import like from '../../assets/assets_Homework_Front-End_02/hand@2x.png';
import dislike from '../../assets/assets_Homework_Front-End_02/hand-copy@2x.png';
import prev from '../../assets/assets_Homework_Front-End_02/arrow-left-copy-2@2x.png';
import next from '../../assets/assets_Homework_Front-End_02/arrow-left-copy@2x.png';
import arrow from '../../assets/assets_Homework_Front-End_02/arrow-left-copy-2@2x.png';

import './JokeDetail.scss';

const listRecommend = [
    "Smoking Joke",
  'My Boss Joke',
  'Dirty Millionaire Joke',
  'The annoying neighbor',
  'Knock Knock',
  'Why Tyson lisps',
  'The drunk Police officer',
  'My hip dad (Dad joke)',
  'What not to say in an elevator',
];
function JokeDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const joke = useSelector((state) => state.jokeDetailReducer.detail);

  useEffect(() => {
    if (id && id !== '') {
      dispatch(getJokeById(id));
    }
  }, [dispatch, id]);

  return (
    <div className="section-bg">
      <div className="sectionDiv">
        <a
          className="btn-prev"
          href="/"
          onclick={() => {
            navigate('/');
          }}
        >
          <img src={arrow} alt="previous page" />
        </a>
        <div className="section">
          <div className="sectionLeft">
            <div className="sectionCard">
              <div className="tag-joke">
                <div className="cat-joke">
                  • {joke.categories ? joke.categories[0] : 'Uncategorized'}{' '}
                  jokes
                </div>
                <h3>• TRENDING</h3>
              </div>
              <div className="cardTitle">
                <h1>The Granny Joke</h1>
                <div className="line"></div>
                <h4>NO#1</h4>
              </div>
              <p className="content">{joke.value}</p>
            </div>
            <div className="rate">
              <div className="rating">
                <div className="ratingGreen">
                  <button className="like">
                    <img src={like} alt="like" />
                  </button>
                  <p>328</p>
                </div>
                <div className="ratingRed">
                  <button className="dislike">
                    <img src={dislike} alt="dislike" />
                  </button>
                  <p>98</p>
                </div>
              </div>
              <div className="prev-next">
                <a href="prev-joke" className="btn-control">
                  <img src={prev} alt="previous joke" />
                  PREV.JOKE
                </a>
                <a href="next-joke" className="btn-control">
                  NEXT.JOKE
                  <img src={next} alt="next joke" />
                </a>
              </div>
            </div>
          </div>
          <div className="sectionRight">
            <h3>THE TOP 10 JOKES THIS WEEK</h3>
            <ul className="sectionLink">
            {listRecommend.map((item, index) => (
                    <li href="recommend" key={index}>{item}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JokeDetail;
