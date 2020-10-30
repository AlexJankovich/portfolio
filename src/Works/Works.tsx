import React from 'react';
import style from './Works.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Work from "./work/Work";
import social from '../assets/image/social.jpg'
import todolist from '../assets/image/todolist.jpg'

function Works() {

    const socialDescription = <>
        <b>Проект сделан с использованием:</b><br/>
        React,<br/>
        React-router<br/>
        React-hooks<br/>
        React-Redux,<br/>
        Redux-thunk,<br/>
        Redux-form<br/>
        Axios,<br/>
        Node-SASS,<br/>
        TypeScript<br/>
        <br/>
        <b>Готовность проекта:</b> 95%<br/>
        <br/>
        <b>Планируется:</b> jest, react-hook-form, deploy on gh-pages, Redux-toolkit
    </>
    const todoListDescription = <>
        <b>Проект сделан с использованием:</b><br/>
        React,<br/>
        React-router<br/>
        React-hooks<br/>
        React-Redux,<br/>
        Redux-thunk,<br/>
        Redux-form<br/>
        Axios,<br/>
        Material UI,<br/>
        TypeScript,<br/>
        Jest-test<br/>
        <br/>
        <b>Планируется:</b> deploy on gh-pages, Redux-toolkit
    </>


    return (
        <div className={style.mainWorkBlock} id='projects'>
            <div className={styleContainer.container + " " + style.workContainer}>
                <h2 className={style.title}>Мои работы</h2>
                <div className={style.works}>
                    <Work
                        imgUrl={social}
                        title={"Социальная сеть"}
                        description={socialDescription}
                    />
                    <Work
                        imgUrl={todolist}
                        title={"ToDoList"}
                        description={todoListDescription}
                    />

                </div>
            </div>
        </div>
    );
}

export default Works