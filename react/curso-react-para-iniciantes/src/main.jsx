import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import PrimeiroComponente from './components/primeiroComponents/index'
import ComponentePai from './components/componentePai'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ComponentePai />
  </React.StrictMode>
)
