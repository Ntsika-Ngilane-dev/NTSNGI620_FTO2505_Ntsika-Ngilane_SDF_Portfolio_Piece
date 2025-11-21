import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Portfolio from './Portfolio'

function App(){
  return <Portfolio />
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
