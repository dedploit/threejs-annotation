import React, { useState } from 'react'
import { F35Main, BmwMain } from './Model'
import Card from './Components/Card'
import './App.css'
import bmwimage from '../src/assets/bmwhd.jpg'
import f35 from '../src/assets/f35hd.jpg'

const App = () => {
  const [selectedCar, setSelectedCar] = useState(null)

  const handleCardClick = (car) => {
    setSelectedCar(car)
  }

  const handleGoBack = () => {
    setSelectedCar(null)
  }

  return (
    <>
      {!selectedCar && (
        <div className="app-container">
          <Card 
            imageSrc= {bmwimage}
            title="BMW M4 Competition" 
            onClick={() => handleCardClick('bmw')}
          />
          <Card 
            imageSrc={f35} 
            title="F35 Lightning 2" 
            onClick={() => handleCardClick('f35')}
          />
          
        </div>
      )}
      
      {selectedCar === 'bmw' && <BmwMain onBack={handleGoBack}/>}
      {selectedCar === 'f35' && <F35Main onBack={handleGoBack}/>}
      
    </>
  )
}

export default App

