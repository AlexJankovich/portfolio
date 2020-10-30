import React from 'react';
import style from './Nav.module.css'

function Nav() {
    return (
        <div className={style.nav}>
            <a href="#main">Главная</a>
            <a href="#skills">Скилы</a>
            <a href="#projects">Проекты</a>
            <a href="#contacts">Контакты</a>
        </div>
    );
}

export default Nav;