import React from 'react'
import '../App.css'

function Card({ imageSrc, title, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="card-title">
        <h3>{title}</h3>
      </div>
    </div>
  )
}

export default Card

