import React, { useState } from 'react';
import './ColorBox.scss';

ColorBox.propTypes = {}
function getRandomColor(){
  const COLOR_LIST = ['deeppink', 'yellow', 'black','red', 'blue'];
  const randomIndex = Math.trunc(Math.random() * 5);

  return COLOR_LIST[randomIndex];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem('box-color') || 'blue';
    console.log(initColor);
    return initColor;
  });


  function handleBoxClick(){  
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem('box-color', newColor);
  }

  return (
    <div
      className='color-box'
      style={{backgroundColor: color} }
      onClick = {handleBoxClick}
    >
      Hello Vinh đẹp trai
    </div>
  )
}

export default ColorBox
