import React from 'react';
import style from './Landing.module.css';

export default function Landing(){
    return(
        <div className={style.landing}>
            <img className={style.picture} src={'https://i.pinimg.com/originals/d8/f5/69/d8f5691f6f5ec6c172f74cfc72537d1e.gif'} alt='LandingPicture'/>
            <div className={style.buttonAndTitle}>
                <div className={style.Title}>
                    <h1 className={style.One}>Travel</h1>
                    <h1 className={style.Two}>Visit</h1>
                    <h1 className={style.Three}>Learn</h1>
                </div>
                <button className={style.Button} onClick={console.log('redirecting...')}>I Want Travel with One Click!</button>
            </div>
        </div>
    );
};
