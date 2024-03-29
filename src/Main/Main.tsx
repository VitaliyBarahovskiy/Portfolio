import style from './Main.module.css'
import styleContainer from '../Common/Styles/Container.module.scss'

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I'm Vitali Barakhouski</h1>
                    <p>Frontend Developer.</p>
                </div>
                <div className={style.photo}></div>
            </div>


        </div>
    );
}

export default Main;
