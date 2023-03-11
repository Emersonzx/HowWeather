import React from 'react'
import ReactDOM from 'react-dom/client'
import WeatherApp from './App'
import { GlobalStyle} from './indexstyles.js';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <GlobalStyle />
    <WeatherApp />
  </React.StrictMode>,
)
