import React from 'react'
import './Dropdown.css'

function Dropdown({show}) {
    const items = ['My saves jokes','My published jokes', 'Account Information', 'Publish new joke']
  return (
    <ul className={`dropdown ${show ? "show" : ""}`}>
        {items.map((item, index) => {
            return <li key={index} className="menu-item">{item}</li>
        })}
  </ul>
  )
}

export default Dropdown