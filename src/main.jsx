import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import db from "./components/db.json"


console.log(db)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App base = {db} />
  </React.StrictMode>,
)

