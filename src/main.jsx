import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import getInfo from './components/getInfo'
import getInfo2 from './components/getInfo2'
import getInfo3 from './components/getInfo3'
import './index.css'

const {data} = await getInfo()
// const {data2} = await getInfo2()
// const {data3} = await getInfo3()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App base = {data} />
  </React.StrictMode>,
)
