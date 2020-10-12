import React from "react";
import style from './OnlineJob.module.scss'
import styleContainer from '../common/styles/Container.module.css'


export const OnlineJob =()=>{
    return(
        <div className={style.wrapper}>
            <div className={styleContainer.container+' '+ style.onlineJbBlock}>
                <div className={style.title}>
                    <span>Рассматриваю варианты удалённой работы <br/>
                    ( Но офис с печеньками лучше)) )
                    </span>
                </div>
                <div className={style.buttonWrapper}>
                    <button>Нанять меня</button>
                </div>
            </div>
        </div>
    )

}