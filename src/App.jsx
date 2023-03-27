import "./App.css";
import { useState } from "react";
import CardContainer from "./components/CardContainer";

function App({ base }) {
  return (
    <div className="App">
      <main>
        <CardContainer base={base}></CardContainer>
      </main>
    </div>
  );
}

export default App;
