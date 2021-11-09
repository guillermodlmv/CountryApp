import React from 'react';
import style from './CSS/Nav.module.css';
import { Link } from 'react-router-dom';
import world from '../img/world.png';
import SearchBar from './SearchBar.jsx'

export default function Nav(){
    return(
        <nav className={style.nav}>
            <div className={style.textAndLogo}>
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <div className={style.navTitle}>
                        <img className={style.navImg} src={world}/>
                        <span>Travel App</span>
                        
                    </div>
                </Link>
                <div className={style.navOptions}>
                    <Link to ='/home' style={{ textDecoration: 'none' }}>
                        <p className={style.option}>Home</p>
                    </Link>
                    <Link to='/NewActivity' style={{ textDecoration: 'none' }}>
                        <p className={style.option}>Add Activity</p>
                    </Link>  
                </div>
            </div>
            <SearchBar />
        </nav>
    );
};
