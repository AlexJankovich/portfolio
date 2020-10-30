import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import sixCorner from '../assets/image/6corner.png'
import Ball from '../assets/image/ball.png'
import smallBall from '../assets/image/smallball.png'
import square from '../assets/image/square.png'
import smallSweetBall from '../assets/image/smallsweetball.png'
import avatar from '../assets/image/avatar.jpg'

function Main() {
    return (
        <div className={style.mainBlock} id='main'>
            <div className={styleContainer.container +" " +style.mainContainer}>
                <div className={style.sixCorner}>
                    <img src={sixCorner} alt="figure"/>
                </div>
                <div className={style.Ball}>
                    <img src={Ball} alt="figure"/>
                </div>
                <div className={style.smallBall}>
                    <img src={smallBall} alt="figure"/>
                </div>
                <div className={style.square}>
                    <img src={square} alt="figure"/>
                </div>
                <div className={style.smallSweetBall}>
                    <img src={smallSweetBall} alt={"figure"}/>
                </div>

                <div className={style.text}>
                    <span>Hi There!</span>
                    <h1>I am REACT-DEVELOPER</h1>
                    <span>FrontEnd developer</span>
                </div>
                    <img src={avatar}   className={style.img} alt={'avatar'} />
            </div>
        </div>
    );
}

export default Main;