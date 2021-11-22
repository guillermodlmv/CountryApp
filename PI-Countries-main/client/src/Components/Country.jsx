import React from 'react';
import style from './CSS/Country.module.css';
import { Link } from 'react-router-dom';
export default function Country(props){

    const { country, subDiv, flag, link } = style
    const { page, Name } = props
    
    return(
        <div>
        {props.data.map((e, index) => {
            const {id, imgFlag, name, continent } = e
            if(page === 0){
                if(index < 9 ){
                    return(
                        <Link  to={`/Country/${id}` } style={{ textDecoration: 'none' }} className={link}>
                            <div  className={ country} >
                                <div className={ subDiv }> 
                                    <img src={imgFlag} alt={`${ Name } Flag`} className={ flag }/>
                                </div>
                                <div className={ subDiv }>
                                    <h1>{ name }</h1>
                                </div>
                                <div className={ subDiv }>
                                    <h1>{ continent }</h1>
                                </div>
                            </div>
                        </Link>
                    ) 
                }
            }else{
                if(index > (page * 9) && index <= ((page * 9 ) + 10)){
                return(
                    <Link to={`/Country/${e.id}` } style={{ textDecoration: 'none' }} className={ link }>
                        <div className={ country } >
                            <div className={ subDiv }> 
                                <img src={ imgFlag } alt={`${ Name }Flag`} className={ flag }/>
                            </div>
                            <div className={ subDiv }>
                                <h1>{ name }</h1>
                            </div>
                            <div className={ subDiv }>
                                <h1>{ continent }</h1>
                            </div>
                        </div>
                    </Link>
                )}
            }
        })}
        </div>
    );
};

