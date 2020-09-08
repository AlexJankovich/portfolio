import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Skill from "../skill/Skill";

function Skills() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container + " "+ style.skillsContainer}>
                <h2 className={style.title}>Мои скилы</h2>
                <div className={style.skills}>
                    <Skill
                        title={"title"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi debitis dignissimos dolore eum fac"}
                    />
                    <Skill
                        title={"title"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi debitis d."}
                    />
                    <Skill
                        title={"title"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi debitis dignissimos dolore eum facere fugit impedit maxime modi officiis optio praesentium quam quas quasi, soluta sunt tenetur, voluptas voluptatibus."}
                    />
                </div>
            </div>
        </div>
    );
}

export default Skills