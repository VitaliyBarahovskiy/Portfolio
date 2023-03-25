import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../Common/Styles/Container.module.scss'
import Skill from "./Skill/Skill";
import Title from "../Common/Components/Titile/Title";


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={"Skills"}/>
                <div className={style.skills}>
                    <Skill className={style.title} title={"REACT"} description={"My love better than mother"}/>
                    <Skill title={"TypeScript"} description={"All projects on TS"}/>
                    <Skill title={" JS "} description={"Check rep with codes Codewars "}/>
                    <Skill title={" REDUX "} description={"I'm having got reducers in another project"}/>
                    <Skill title={" HTML "} description={"Div this king web"}/>
                    <Skill title={" SASS "} description={"Transfer styles with CSS to SASS"}/>
                    <Skill title={" CSS "} description={"Great styles for CSS"}/>
                    <Skill title={" GIT"} description={"Pushing to git"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;


