import React from "react";
import style from './OnlineJob.module.css'
import styleContainer from '../common/styles/Container.module.css'


export const OnlineJob =()=>{
    return(
        <div className={style.wrapper}>
            <div className={styleContainer.container+' '+ style.onlineJbBlock}>
                <div className={style.title}>
                    <span>Рассматриваю варианты удалённой работы</span>
                </div>
                <div>
                    <button>Нанять меня</button>
                </div>
            </div>
        </div>
    )

}