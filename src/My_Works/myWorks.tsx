import React from 'react';
import styles from './myWorks.module.css'
import styleContainer from '../Common/Styles/Container.module.css'
import MyWork from './My_Work/myWork';

const MyWorks = () => {
    return (
        <div id={'progect'} className={styles.MyWorksBlock}>
            <div className={`${styleContainer.container} ${styles.MyWorksContainer}`}>
                <h2 className={styles.title}>My works</h2>
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