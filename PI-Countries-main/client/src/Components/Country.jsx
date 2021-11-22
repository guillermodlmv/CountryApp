import React from 'react';
import { connect } from 'react-redux';
import {swapToCards} from '../actions/actions.js'
import style from './CSS/Country.module.css';
import { Link } from 'react-router-dom';

export  function Country({ pages, Name, cards, countries }){
    // console.log(countries)
    const { country, subDiv, flag, link, cardsStyle,divCards,FlagCard, hide } = style
    return(
        <div  className={cards ? divCards : 0 }>
        {countries.map((e, index) => {
            console.log(e)
            const {id, imgFlag, name, continent } = e
            if(pages === 0){
                if(index < 9 ){
                    return(
                        <Link  to={`/Country/${id}` } style={{ textDecoration: 'none' }} className={link}>
                            <div  className={cards ? cardsStyle : country } >
                                <div className={ subDiv }> 
                                    <img src={imgFlag} alt={`${ Name } Flag`} className={cards ? FlagCard : flag }/>
                                </div>
                                <div className={ subDiv }>
                                    <h1><span className={cards ? 0 : hide }>Name: </span>{ name }</h1>
                                </div>
                                <div className={ subDiv }>
                                    <h1><span className={cards ? 0 : hide }>Continent: </span>{ continent }</h1>
                                </div>
                            </div>
                        </Link>
                    ) 
                }
            }else{
                if(index > (pages * 9) && index <= ((pages * 9 ) + 10)){
                return(
                    <Link to={`/Country/${e.id}` } style={{ textDecoration: 'none' }} className={ link }>
                        <div className={cards ? cardsStyle : country } >
                            <div className={ subDiv }> 
                                <img src={ imgFlag } alt={`${ Name }Flag`} className={ cards ? FlagCard : flag }/>
                            </div>
                            <div className={ subDiv }>
                                <h1> <span className={cards ? 0 : hide }>Name: </span> { name }</h1>
                            </div>
                            <div className={ subDiv }>
                                <h1><span className={cards ? 0 : hide }>Continent: </span> { continent }</h1>
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
        cards:state.swapToCards,
        countries: state.filter,
        pages :state.page
    }
}

export default connect(mapStateToProps,{ swapToCards })(Country)
