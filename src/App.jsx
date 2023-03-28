import "./App.css";
import React, { useState, useEffect } from 'react';
import CardContainer from "./components/CardContainer";

function App({ base }) {
  // const [data, setData] = useState(null)
  // useEffect(() => {


    
  // }, [])
  
  return (
    <div className="App">
      <main>
        <CardContainer base={base}></CardContainer>
      </main>
    </div>
  );
}

export default App;
