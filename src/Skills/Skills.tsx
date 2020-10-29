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
              description=
                  'Создатели React скромно наывают его библиотекой, но разработчики обсуждают его без пяти мунут фреймворком. Имею опыт использования React для создания  SPA - приложений в связке с Redux'
            level={4}
            />
            {/*<SkillsLevel n={4} />*/}
          </div>
          <div className={style.skillItem}>
            <Skill
              icon={faHtml5}
              iconColor='#FF6D00'
              iconSize='10x'
              title='HTML5'
              description='Немного прокачан как верстальщик)'
            level={3}
            />
            {/*<SkillsLevel n={3} />*/}
          </div>
          <div className={style.skillItem}>
            <Skill
              iconColor='#04AFF3'
              iconSize='10x'
              icon={faCss3}
              title='CSS3'
              description='Использую в работе как CSS, так и SCSS, а так же "Styled components" в связке с React. Ну а для быстрого оформления есть "Material UI"'
              level={3}
            />
            {/*<SkillsLevel n={3} />*/}
          </div>
          <div className={style.skillItem}>
            <Skill
              title='TypeScript'
              description='React и TypeScript созданы друг для друга (но это не точно)'
              imgURL={tsIcon}
level={3}
            />
            {/*<SkillsLevel n={4} />*/}
          </div>
          <div className={style.skillItem}>
            <Skill
              title='Redux'
              description='Redux - библиотека стейт-менеджмента, используемая в React для построения полноценного SPA.
              Я использую её вместе с Redux-thunk'
              imgURL={ReduxIcon}
              level={4}
            />
            {/*<SkillsLevel n={4} />*/}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
