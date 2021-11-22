import React from 'react';
import { connect } from 'react-redux';
import {swapToCards} from '../actions/actions.js'
import style from './CSS/Country.module.css';
import { Link } from 'react-router-dom';

export  function Country({ page, Name, cards, data }){

    const { country, subDiv, flag, link, cardsStyle,divCards,FlagCard } = style

    console.log(cards)
    return(
        <div  className={cards ? divCards : 0 }>
        {data.map((e, index) => {
            const {id, imgFlag, name, continent } = e
            if(page === 0){
                if(index < 9 ){
                    return(
                        <Link  to={`/Country/${id}` } style={{ textDecoration: 'none' }} className={link}>
                            <div  className={cards ? cardsStyle : country } >
                                <div className={ subDiv }> 
                                    <img src={imgFlag} alt={`${ Name } Flag`} className={cards ? FlagCard : flag }/>
                                </div>
                                <div className={ subDiv }>
                                    <h1><span>Name: </span>{ name }</h1>
                                </div>
                                <div className={ subDiv }>
                                    <h1><span>Continent: </span>{ continent }</h1>
                                </div>
                            </div>
                        </Link>
                    ) 
                }
            }else{
                if(index > (page * 9) && index <= ((page * 9 ) + 10)){
                return(
                    <Link to={`/Country/${e.id}` } style={{ textDecoration: 'none' }} className={ link }>
                        <div className={cards ? cardsStyle : country } >
                            <div className={ subDiv }> 
                                <img src={ imgFlag } alt={`${ Name }Flag`} className={ cards ? FlagCard : flag }/>
                            </div>
                            <div className={ subDiv }>
                                <h1> <span>Name: </span> { name }</h1>
                            </div>
                            <div className={ subDiv }>
                                <h1><span>Continent: </span> { continent }</h1>
                            </div>
                        </div>
                    </Link>
                )}
            }
        })}
        </div>
    );
};

const mapStateToProps = (state) =>  {
    return {
        cards:state.swapToCards
    }
}

export default connect(mapStateToProps,{swapToCards})(Country)
