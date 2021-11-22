import React from 'react';
import { connect } from 'react-redux';
import {swapToCards} from '../actions/actions.js'
import style from './CSS/Countries.module.css';
import Country from './Country.jsx';
import left from '../img/left.png';
import right from '../img/Right.png';

export  function Countries({data, onNext, onAfter, page, cards}){
    const {noCountrie, btnDiv, btnHide, imgBtn, btn, cardsStyle} = style
    console.log(cards)
    if(data){
        return(
            <div className={noCountrie} >
                <div className={cards ? cardsStyle :''}>
                <Country page={page} data={data}/>
                </div>
                <div className={btnDiv}>
                    <button className={page === 0 ? btnHide : btn} onClick={onAfter}>
                        <img  className={page === 0 ? btnHide :imgBtn} src={left} alt='left'/>
                    </button>
                        <h4>Page {page +1}</h4>
                    <button className={page < Math.floor(data.length / 9) ? btn  : btnHide} onClick={onNext}>
                        <img className={page < Math.floor(data.length / 9) ? imgBtn : btnHide } src={right} alt='left'/>
                    </button>
                </div>
                
            </div>
        )
    } else{
        return(
            <div className={noCountrie}>Not countries found</div>
        )
    }
};


const mapStateToProps = (state) =>  {
    console.log(state)
    return {
        cards:state.swapToCards

    }
}

export default connect(mapStateToProps,{swapToCards})(Countries)
