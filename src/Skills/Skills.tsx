import React from 'react';
import style from './Skills.module.css'
import styleContainer from './../Common/Styles/Container.module.css'
import Skill from "./Skill/Skill";


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"Js"} description={"The first step in understanding React JS " +
                        "requires you to go back to the basics  HTML, CSS, and JavaScript are the " +
                        "building blocks for any web and each individual webpage."}/>
                    <Skill title={"Css"} description={"If you have a question about who manages the library function," +
                        " the answer is redux manages the state library function."}/>
                    <Skill title={"React "} description={"Choosing one quality in your potential React developer or a " +
                        "React development team is not easy."}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;


