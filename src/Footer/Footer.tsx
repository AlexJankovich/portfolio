import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'

function Footer() {
    return (
        <div className={style.footer}>
            <div className={styleContainer.container}>
                <div className={style.wrapper}>
                    <div className={style.contentWrapper}>
                        <div>имя</div>
                        <div className={style.content}>some content</div>
                        <div>2020 Все права защищены, но это не точно</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;