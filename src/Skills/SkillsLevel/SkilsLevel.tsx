import React from "react";
import s from './SkilsLevel.module.scss'
import styled from 'styled-components'
const levelStyle='nth-child(-n+5){background-color: red}'

type SkillsLevelType={
    n:0|1|2|3|4|5|6
}

export const SkillsLevel = (props:SkillsLevelType) =>{
    const Div =styled.div`
  Div:nth-child(-n+${props.n}){background-color: red};
`
    return(
        <Div className={s.levelWrapper}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </Div>
    )
}

