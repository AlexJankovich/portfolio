import React from 'react';
import style from './Work.module.scss'

type WorkType={
    title:string
    description:any
    imgUrl:string
}

function Work(props:WorkType) {
    return (
        <div className={style.work}>
            <div className={style.icon}>
                <img src={props.imgUrl} alt='workImage'/>
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