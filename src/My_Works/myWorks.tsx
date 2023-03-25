import React from 'react';
import styles from './myWorks.module.scss'
import styleContainer from '../Common/Styles/Container.module.scss'
import MyWork from './My_Work/myWork';
import Title from "../Common/Components/Titile/Title";
import todoImage from './../assert/image/todolist.png'
import socialImage from './../assert/image/social.png'
import ultraCounter from './../assert/image/ultraCounter.png'

const MyWorks = () => {

    const social = {
        backgroundImage: `url(${socialImage})`
    }
    const todolist = {
        backgroundImage: `url(${todoImage})`
    }
    const ultraCounters = {
        backgroundImage: `url(${ultraCounter})`
    }

    return (
        <div className={styles.MyWorksBlock}>
            <div className={`${styleContainer.container} ${styles.MyWorksContainer}`}>
                <Title text={"MyWorks"}/>
                <div className={styles.work}>
                    <MyWork style={social} title={'Social network'}
                          description={'https://github.com/VitaliyBarahovskiy/samurai'}/>
                    <MyWork style={todolist} title={'To do list'}
                          description={'https://github.com/VitaliyBarahovskiy/todolist'} />
                    <MyWork style={ultraCounters} title={'UltraCounter'}
                          description={'https://github.com/VitaliyBarahovskiy/UltraCounter'} />

                </div>
            </div>
        </div>
    );
};

export default MyWorks;