import { useState } from 'react'
import './App.css'
import Countries from './components/Countries'
import React from 'react';
import CountriesProvider from './providers/CountriesProvider';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountriesProvider>
        <Countries />
      </CountriesProvider>
    </>
  )
}

export default App;
