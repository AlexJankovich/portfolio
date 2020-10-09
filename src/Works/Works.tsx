import React from 'react';
import style from './Works.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Work from "../work/Work";


function Works() {
    return (
        <div className={style.mainWorkBlock}>
            <div className={styleContainer.container + " " + style.workContainer}>
                <h2 className={style.title}>Мои работы</h2>
                <div className={style.works}>
                    <Work
                        title={"title"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi debitis dignissimos dolore eum fac"}
                    />
                    <Work
                        title={"title"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi debitis d."}
                    />

                </div>
            </div>
        </div>
    );
}

export default Works