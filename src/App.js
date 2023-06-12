import CarForm from './Components/CarForm';
import CarList from './Components/CarList';
import CarSearch from './Components/CarSearch';
import CarValue from './Components/CarValue';

import React from 'react'

function App() {
  return (
    <div className='container is-fluid'>
        <CarForm/>
        <CarSearch/>
        <CarList/>
        <CarValue/>
    </div>
  )
}

export default App