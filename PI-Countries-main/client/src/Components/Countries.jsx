import React, {useState} from 'react';
import style from './CSS/Countries.module.css';
import Country from './Country.jsx';
import left from '../img/left.png';
import right from '../img/Right.png';
export default function Countries({data, onNext, onAfter, page}){
    // console.log(props.countries[0][0])

    if(data){
        return(
            <div className={style.noCountrie} >
                <Country page={page} data={data}/>
                <div className={style.btnDiv}>
                    <button className={page === 0 ? style.btnHide : style.btn} onClick={onAfter}>
                        <img  className={page === 0 ? style.btnHide :style.imgBtn} src={left} alt='left'/>
                    </button>
                        <h4>Page {page +1}</h4>
                    <button className={page < Math.floor(data.length / 9) ?style.btn  :style.btnHide} onClick={onNext}>
                        <img className={page < Math.floor(data.length / 9) ? style.imgBtn:style.btnHide } src={right} alt='left'/>
                    </button>
                </div>
                
            </div>
        )
    } else{
        return(
            <div className={style.noCountrie}>Not countries found</div>
        )
    }
};