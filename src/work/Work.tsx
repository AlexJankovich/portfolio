import React from 'react';
import style from './Work.module.css'

type WorkType={
    title:string
    description:string
}

function Work(props:WorkType) {
    return (
        <div className={style.work}>
            <div className={style.icon}>
                <button>Смотреть</button>
            </div>
            <h3>{props.title}</h3>
            <div className={style.description}>
                {props.description}
            </div>
        </div>
    );
}

export default Work;