import React from 'react'
import '../styles/skills.css'
import Slider from './Slider'

const Skill = ({title, level, index}) => {
    return (
        <div className='skill'>
            <div className='skillTitle' style={{color:index%2!==0?'var(--secondary)':'var(--primary)'}}>{title}</div>
            <div className='skillLoadingContainer'>
                <div className='skillLoading' style={{width:`${level}%`, backgroundColor:index%2!==0?'var(--secondary)':'var(--primary)'}}/>
            </div>
        </div>
    )
}

const SkillGroup = ({title, skills, levels}) => {
    return (
        <div className='skillGroup'>
            <div className='sgTitle'>{title}</div>
            <div className='sgMain'>
                {skills.map((skill, index) => 
                    <Skill index={index} key={index} title={skill} level={levels[index]}/>
                )}
            </div>
        </div>
    )
}

const Skills = () => {
  return (
    <div className='skills'>
        <Slider title="Skills" variant="primary"/>
        <div className='skillsMain'>
            <SkillGroup title="Web Development" skills={['HTML', 'CSS', 'JavaScript', 'ReactJS']} levels={[90, 70, 50, 80]}/>
            <SkillGroup title="App Development" skills={['React Native']} levels={[20]}/>
            <SkillGroup title="Game Development" skills={['Unity', 'pygame']} levels={[30, 20]}/>
        </div>
    </div>
  )
}

export default Skills