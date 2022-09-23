import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [ childrenColor, setChildrenColor ] = useState("#FFF");


  function handleChangeColor(newChildColor){
    const newRandomColor= getRandomColor();
    setColor(newRandomColor);  // update color state to a new value
    setChildrenColor(newChildColor); 
  }




  /* when clicking the child the parent changes to random color
  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child  onChangeColor={handleChangeColor}  />
      <Child   onChangeColor={handleChangeColor} />
    </div>
  );
  */
  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childrenColor}  onChangeColor={handleChangeColor}  />
      <Child color={childrenColor}   onChangeColor={handleChangeColor} />
    </div>
  );

  
}

export default Parent;
