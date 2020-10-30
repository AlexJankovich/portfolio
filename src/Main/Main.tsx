import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import sixCorner from '../assets/image/6corner.png'
import Ball from '../assets/image/ball.png'
import smallBall from '../assets/image/smallball.png'
import square from '../assets/image/square.png'
import smallSweetBall from '../assets/image/smallsweetball.png'

function Main() {
    return (
        <div className={style.mainBlock} id='main'>
            <div className={styleContainer.container +" " +style.mainContainer}>
                <div className={style.sixCorner}>
                    <img src={sixCorner} alt=""/>
                </div>
                <div className={style.Ball}>
                    <img src={Ball} alt=""/>
                </div>
                <div className={style.smallBall}>
                    <img src={smallBall} alt=""/>
                </div>
                <div className={style.square}>
                    <img src={square} alt=""/>
                </div>
                <div className={style.smallSweetBall}>
                    <img src={smallSweetBall} alt=""/>
                </div>

                <div className={style.text}>
                    <span>Hi There!</span>
                    <h1>I am REACT-DEVELOPER</h1>
                    <span>FrontEnd developer</span>
                </div>
                    <img src='https://u24.ru/img/news/article_big_389791501756126.jpg'   className={style.img} />
            </div>
        </div>
    );
}

export default Main;