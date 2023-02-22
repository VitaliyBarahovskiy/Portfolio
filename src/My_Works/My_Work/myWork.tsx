import React from 'react';
import style from './myWork.module.css'

type WorkPropsType = {
    title: string
    image: string
    description: string
}

const MyWork: React.FC<WorkPropsType> = ({title, image, description}) => {

    return (
        <div className={style.work}>
            <img className={style.img} src={image} alt="img work"/>
            <h3>{title}</h3>
            <span className={style.description}>
                {description}
            </span>
        </div>
    );
}

export default MyWork;