import React from "react";
import Card from "./Card";
import { useState } from "react";
import "./CardContainer.css";

function CardContainer({ base }) {
  let backGroundNum = Math.floor(Math.random() * 4 + 1);

  const [ramdonNum, setRamdonNum] = useState(Math.floor(Math.random() * base.length));
  const [backgroundImage, setBackgroundImage] = 
  useState( `url(src/assets/imagenes/espacio/espacio_img${backGroundNum}.webp)`);

  const generateRandon = () => {
    let s = Math.floor(Math.random() * base.length);
    setRamdonNum(s);
    setBackgroundImage(`url(src/assets/imagenes/espacio/espacio_img${backGroundNum}.webp)`);
  };
  return (
    <>
      <div role="img" loading="lazy" className="cardContainer" style={{ backgroundImage: backgroundImage }}>
        <h1 className="cardContainerTitle">facts that maybe you didn't know about space`</h1>
        <ion-icon name="planet"></ion-icon>
        <Card info={base} ramdonNum={ramdonNum} />
        <button onClick={generateRandon}><ion-icon name="caret-forward-outline"></ion-icon></button>
      </div>
    </>
  );
}
export default CardContainer;
