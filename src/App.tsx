import React from 'react';
import s from './App.module.css';
import image from "./icons/Market.svg"

function App() {
  return (
    <div className="App">
      <div className={s.block}>\
          <div className={s.bigButton}>
              <div className={s.button}></div>
              <img className={s.marketIcons} src={image}/>
          </div>



      </div>

    </div>
  );
}

export default App;
