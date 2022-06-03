import React from 'react';
import style from './App.module.scss';
import MarketIcons from "./icons/Market.svg"
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function App() {
    return (
        <div className={style.appWrapper}>
            <div className={style.navBar}>
                <div>
                    {/*верхние кнопки 3 шт*/}
                    <div className={style.bigButton}>
                        <div className={style.button}></div>
                        <img className={style.buttonsIcon} src={MarketIcons}/>
                    </div>
                    <div className={style.bigButton}>
                        <div className={style.button}></div>
                        <img className={style.buttonsIcon} src={MarketIcons}/>
                    </div>
                    <div className={style.bigButton}>
                        <div className={style.button}></div>
                        <img className={style.buttonsIcon} src={MarketIcons}/>
                    </div>
                </div>

                <div>
                    {/*нижние кнопки 3 шт*/}
                </div>

            </div>
            <Header/>
            <Footer/>
        </div>
    );
}

export default App;
