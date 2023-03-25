import React from 'react';
import style from './RemoteWork.module.css'
import styleContainer from '../Common/Styles/Container.module.scss'


const RemoteWork = () => {
    return (
        <div className={style.remoteWorkBlock}>
            <div className={styleContainer.container}>
                <div className={style.content}>
                    <h2>Considering remote work options</h2>
                    <button className={style.button}>hire me</button>
                </div>

            </div>

        </div>
    );
};

export default RemoteWork;