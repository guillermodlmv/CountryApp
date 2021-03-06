import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { swapToCards, pages } from '../actions/actions.js'
import style from './CSS/Countries.module.css';
import Country from './Country.jsx';
import left from '../img/left.png';
import right from '../img/Right.png';

export  function Countries({country, cards, pages, filterState}){
    const {noCountrie, btnDiv, btnHide, imgBtn, btn, cardsStyle} = style
    const [page, setPage] = useState(0)   
    const [aux, setAux] = useState(filterState) //aux to look at a change into the filterState to set page to 0
    
    if(aux !== filterState){
        setPage(0)
        setAux(filterState)
    }
    function onNext(){
        setPage(prev => prev+1 )
    }
    function onAfter(){
        setPage(prev => prev-1 )
    }
    useEffect(() => {
        pages(page)
    }, [page])

    if(country){
        return(
            <div className={noCountrie} >
                <div className={cards ? cardsStyle :''}>
                <Country/>
                </div>
                <div className={btnDiv}>
                    <button className={page === 0 ? btnHide : btn} onClick={onAfter}>
                        <img  className={page === 0 ? btnHide :imgBtn} src={left} alt='left'/>
                    </button>
                        <h4>Page {page +1}</h4>
                    <button className={page < Math.floor(country.length / 10) ? btn  : btnHide} onClick={onNext}>
                        <img className={page < Math.floor(country.length / 10) ? imgBtn : btnHide } src={right} alt='left'/>
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
    return {
        cards:state.swapToCards,
        country: state.filter,
        pages:state.page,
        filterState:state.filterState
    }
}

export default connect(mapStateToProps,{swapToCards, pages})(Countries)
