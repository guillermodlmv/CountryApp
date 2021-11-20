import style from './CSS/Countries.module.css';
import Country from './Country.jsx';
import left from '../img/left.png';
import right from '../img/Right.png';
export default function Countries({data, onNext, onAfter, page}){
    const {noCountrie, btnDiv, btnHide, imgBtn, btn} = style

    if(data){
        return(
            <div className={noCountrie} >
                <Country page={page} data={data}/>
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