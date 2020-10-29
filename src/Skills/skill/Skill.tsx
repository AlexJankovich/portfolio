import React from 'react';
import style from './Skill.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {SkillsLevel} from "../SkillsLevel/SkilsLevel";

type SkillType = {
    level: 1 | 2 | 3 | 4 | 5 | 6
    title: string
    description: string
    icon?: IconProp
    imgURL?: string
    iconColor?: string
    iconSize?: "xs" | "lg" | "sm" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x" | undefined
}

function Skill(props: SkillType) {
    return (
        <div className={style.skill}>
            <div className={style.icon}>
                {props.icon ? <FontAwesomeIcon color={props.iconColor}
                                               size={props.iconSize}
                                               icon={props.icon}
                /> : <img src={props.imgURL} alt="Icjn"/>}
            </div>
            <div className={style.descriptionWrapper}>
                <h1>{props.title}</h1>
                <span className={style.description}>
                    {props.description}
                </span>
            </div>
            <SkillsLevel n={props.level}/>
        </div>
    );
}

export default Skill;