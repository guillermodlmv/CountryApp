import React from 'react';
import style from './CSS/Landing.module.css';
import { Link } from 'react-router-dom';
import travel from '../img/Travel.gif';
export default function Landing(){
    return(
        <div className={style.landing}>
            <img className={style.picture} src={travel} alt='LandingPicture'/>
            <div className={style.buttonAndTitle}>
                <div className={style.Title}>
                    <h1 className={style.One}>Travel</h1>
                    <h1 className={style.Two}>Visit</h1>
                    <h1 className={style.Three}>Learn</h1>
                </div>
                <Link to='/home'>
                    <button className={style.Button}>I Want Travel with One Click!</button>
                </Link>
            </div>
        </div>
    );
};
