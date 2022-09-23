import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";
// the one in the comment where use to change parent color when child is click
function Child({ onChangeColor, color }) {
  //console.log(onChangeColor);

  function handleClick(){
    const newColor = getRandomColor();
    onChangeColor(newColor)
  }
  return(
    <div 
      //onClick={onChangeColor}
      onClick={handleClick}
       className="child" 
      style={{ backgroundColor: color }} 
     />
  ); 
   
}

export default Child;
