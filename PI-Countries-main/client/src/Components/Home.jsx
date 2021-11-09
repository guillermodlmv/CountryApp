import React from 'react';
import style from './CSS/Home.module.css';
import TableBar from './TableBar';
import Countries from './Countries.jsx';
import Filter from './Filter.jsx';
export default function Home({filter, onClose, onSearch, onSort, onClick,filterState}){
    
    return(
        <div className={style.home}>
            <TableBar 
            onClose={onClose} 
            onSearch={onSearch} 
            filter={filter}
            filterState={filterState}
            />
            <div className={style.filters}>
                <Filter onClick={onClick} filterState={filterState}  />
                <Countries filterState={filterState} />
            </div>
        </div>
    );
};
