import React, { useState } from 'react';
import './App.css';
import NewCardButton from './components/NewCardButton/NewCardButton';
import CityCard from './components/CityCard/CityCard';

export default function App() {
  const [cards, setCards] = useState([{
    title: 'Evertree',
    type: 'flower',
    condition: '1 point per Unique Structure in your city',
    unique: true,
    baseValue: 4
  },
  {
    title: 'Judge',
    type: 'script',
    condition: '',
    unique: true,
    baseValue: 2
  },
  {
    title: 'Chip Sweep',
    type: '',
    condition: '',
    unique: false,
    baseValue: 1
  },
  {
    title: 'Wanderer',
    type: 'traveler',
    condition: '',
    unique: false,
    baseValue: 1
  },
  {
    title: 'University',
    type: 'production',
    condition: '',
    unique: true,
    baseValue: 3
  }
])

  return (
    <div className='App'>
      <div id="banner">
        <div id="banner-width-limiter">
        <h1>Everdell City Score Tracker</h1>
        </div>
      </div>
      <div id="body-container" >
        <div id="body">
          {cards.map(c => <CityCard {...c} />)}
          <NewCardButton />
        </div>
      </div>
    </div>
  )
}