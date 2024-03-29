import React from 'react';
import style from './Contacts.module.css'
import styleContainer from '../Common/Styles/Container.module.scss'


const Contacts = () => {
    return (
        <div id={'contacts'} className={style.contactsBlock}>
            <div className={styleContainer.container}>
                <div className={style.content}>
                    <h2>contacts</h2>
                    <form className={style.form} action="">
                        <input className={style.input} type="text"/>
                        <input className={style.input} type="text"/>
                        <textarea className={style.textarea}/>
                        <button type="submit" className={style.button}>Send</button>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default Contacts;