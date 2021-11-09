import React from 'react';
import style from './CSS/SearchBar.module.css';


export default function SearchBar(){
    return(
        <form className={style.divBar}>
            <input
                type="text"
                placeholder=" Insert Country Name"
                className={style.input}
            />
            <input type="submit" value="Search"  className={style.add}/>
        </form>
    );
};
