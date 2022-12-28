import React from 'react';
import './Header.css';
import user from "../assets/assets_Homework_Front-End_01/shape@2x.png";
import arrow from "../assets/assets_Homework_Front-End_01/path_2@2x.png";
import Dropdown from './Dropdown/Dropdown';
import SearchBar from './SearchBar/SearchBar';

const Header = () => {
  const [show, setShow] = React.useState(false);
  
  return (
    <header className="header">
      <nav className="header__navigation">
        <ul className="header__ul">
          <li className="header__li"><a href='/' className="header__link">so funktioniert's</a></li>
          <li className="header__li"><a href='/' className="header__link">sonderangebote</a></li>
          <li className="header__li">
            <div className="header__dropdown">
            <img className="userIcon" src={user} alt="user" /> 
            <div className="header__link">MEIN BEREICH</div>
              <img className="userIcon" src={arrow} alt="user" onClick={()=>setShow((prev)=> !prev)}/>
            <Dropdown show={show}/>
            </div>
          </li>
        </ul>
      </nav>
      <div className="header__container">
        <div className="header__box">
          <h2 className="header__main">The Joke Bible</h2>
          <p className="header__desc">Daily Laughs for you and yours</p>
          <SearchBar/>
        </div>
      </div>
    </header>
  )
}

export default Header