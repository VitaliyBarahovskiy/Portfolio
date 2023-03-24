import React from 'react'
import style from './Title.module.css'

type propsTextType = {
    text: string
}

function Title(props: propsTextType) {
    return (
        <div className={style.title}>
            <h2>{props.text}</h2>
        </div>
    )
}

export default Title