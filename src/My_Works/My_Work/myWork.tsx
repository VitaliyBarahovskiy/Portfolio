import React from 'react';
import style from './myWork.module.scss'

type WorkPropsType = {
    title: string
    description: string,
    style: any
}

const MyWork = (props: WorkPropsType) => {

    return (
        <div className={style.work}>
            <div className={style.image} style={props.style}>
                <a className={style.viewBtn}>Check</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.workTitle}>{props.title}</h3>
                <span className={style.description}>
                {props.description}
            </span>
            </div>
        </div>
    );
}

export default MyWork;