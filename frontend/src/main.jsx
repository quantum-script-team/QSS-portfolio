import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import WebFont from 'webfontloader';
import './index.css'

WebFont.load({
  google: {
    families: ['Exo', 'sans-serif'], // Reemplaza con las fuentes que elijas
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
