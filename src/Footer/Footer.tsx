import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../Common/Styles/Container.module.css'


const Footer = () => {
    return (
        <div  className={style.footerBlock}>
            <div className={styleContainer.container}>
                <div className={style.content}>
                    <h2>Barakhouski Vitali</h2>
                    <div className={style.contacts}>
                        <div className={style.divBlock}></div>
                        <div className={style.divBlock}></div>
                        <div className={style.divBlock}></div>
                        <div className={style.divBlock}></div>
                    </div>
                    <p>@ 2023 Все права защищены</p>
                </div>

            </div>

        </div>
    );
};

export default Footer;