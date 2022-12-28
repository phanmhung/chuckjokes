import React from 'react'
import { Link } from "react-router-dom";
import './JokeItems.css'
const JokesItem = ({listJokes}) => {
  return (
    <div className='cards'>
        {
            listJokes.map((item) => {
                return <div className='card' key={item.id}>
                  <div className='cardTitle'>
                    <img src={require("../../assets/assets_Homework_Front-End_01/green-light-copy.png")} className="main__icon" alt="icon" />
                    <h3>{item.categories[0]} jokes</h3>
                  </div>
                  <p className='text-joke'>{item.value}</p>
                  <div className='stats'>
                    <Link to={`/jokes/${item.id}`}><button className='main__btn'>See stats</button></Link>
                    <img src={require("../../assets/assets_Homework_Front-End_01/path.png")} className="main__path" alt="icon" />
                  </div>
                </div>
            })
        }
    </div>
  )
}

export default JokesItem