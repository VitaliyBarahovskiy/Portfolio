import React from 'react';
import styles from './myWorks.module.css'
import styleContainer from '../Common/Styles/Container.module.css'
import MyWork from './My_Work/myWork';
import Title from "../Common/Components/Titile/Title";

const MyWorks = () => {
    return (
        <div className={styles.MyWorksBlock}>
            <div className={`${styleContainer.container} ${styles.MyWorksContainer}`}>
                <Title text={"MyWorks"}/>
                <div className={styles.work}>
                    <MyWork title={'Todolist'} image={'img'}
                          description={'description'}/>
                    <MyWork title={'Todolist'} image={'img'}
                          description={'description'}/>

                </div>
            </div>
        </div>
    );
};

export default MyWorks;