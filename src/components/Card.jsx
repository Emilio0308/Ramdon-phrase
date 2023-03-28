import React from "react";
import { useState } from "react";
import "./Card.css";

function Card({ info , ramdonNum}) {
  ramdonNum ? ramdonNum: ramdonNum= Math.floor(Math.random() * info.length)

  return (
    <div className="Card">
      <div className="title"> {`Phrase N° ${ramdonNum+1} `} </div>
      <p className="phrase">{info[ramdonNum].phrase}</p>
      <span className="author">Author : {info[ramdonNum].author}</span>
      <div className="alien">
        <img src="/imagenes/alien.png" alt="alien"  />
      </div>
    </div>
  );
}

export default Card;
