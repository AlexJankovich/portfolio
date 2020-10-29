import React from 'react'
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Skill from './skill/Skill'
import { faReact, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons'
import tsIcon from '../assets/image/tsIcon.png'
import ReduxIcon from '../assets/image/redux-seeklogo.com.svg'
import { SkillsLevel } from './SkillsLevel/SkilsLevel'

function Skills () {
  return (
    <div className={style.mainBlock}>
      <div className={styleContainer.container + ' ' + style.skillsContainer}>
        <h2 className={style.title}>Мои скилы</h2>
        <div className={style.skills}>
          <div className={style.skillItem}>
            <Skill
              icon={faReact}
              iconColor='#48D6FF'
              iconSize='10x'
              title='ReactJS'
              description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi debitis dignissimos dolore eum fac'
            />
            <SkillsLevel n={4} />
          </div>
          <div className={style.skillItem}>
            <Skill
              icon={faHtml5}
              iconColor='#FF6D00'
              iconSize='10x'
              title='HTML5'
              description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi debitis d.'
            />
            <SkillsLevel n={3} />
          </div>
          <div className={style.skillItem}>
            <Skill
              iconColor='#04AFF3'
              iconSize='10x'
              icon={faCss3}
              title='CSS3'
              description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi debitis dignissimos dolore eum facere fugit impedit maxime modi offic'
            />
            <SkillsLevel n={3} />
          </div>
          <div className={style.skillItem}>
            <Skill
              title='TypeScript'
              description='This is type script'
              imgURL={tsIcon}

            />
            <SkillsLevel n={4} />
          </div>
          <div className={style.skillItem}>
            <Skill
              title='Redux'
              description='This is Redux'
              imgURL={ReduxIcon}
            />
            <SkillsLevel n={4} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
