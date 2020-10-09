import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container +" " +style.mainContainer}>
                <div className={style.text}>
                    <span>Hi There!</span>
                    <h1>I am REACT-DEVELOPER</h1>
                    <p>FrontEnd developer</p>
                </div>
                    <img src='https://u24.ru/img/news/article_big_389791501756126.jpg'   className={style.img} />
            </div>
        </div>
    );
}

export default Main;