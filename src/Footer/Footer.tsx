import React from 'react';
import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Nav from "../Nav/Nav";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faTelegram, faGithub} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";

function Footer() {
    return (
        <>
            <div className={style.footer} >
                <div className={styleContainer.container}>
                    <div className={style.wrapper}>
                        <div className={style.contentWrapper}>
                            {/*<div>имя</div>*/}
                            <div className={style.content}>
                                <Nav/>
                            </div>
                            <div className={style.linksWrapper}>
                                <div>
                                    <a href="https://www.linkedin.com/in/aleksandryankovich/">
                                        <FontAwesomeIcon
                                            icon={faLinkedin}
                                            color='#6FB3E8'
                                            size={"2x"}
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://t.me/AleksandrX83">
                                        <FontAwesomeIcon
                                            icon={faTelegram}
                                            color='#1A9DD9'
                                            size={"2x"}
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://github.com/AlexJankovich">
                                        <FontAwesomeIcon
                                            icon={faGithub}
                                            color='white'
                                            size={"2x"}
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="#online">
                                        <FontAwesomeIcon
                                            icon={faEnvelope}
                                            color='#FFCC00'
                                            size={"2x"}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={style.allRightReserved}>2020 Все права защищены, но это не точно</div>
        </>
    );
}

export default Footer;