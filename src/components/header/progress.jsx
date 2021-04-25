import React,{useState, useEffect} from 'react';
import { Progress } from 'antd';
import {useSelector, useDispatch} from 'react-redux'
import flash from '../../assets/images/flash.svg'

let basketList;
let price;
const ProgressBar = () => {
  basketList = useSelector(state => state.basket.basketList)
  const [progressPercent, setProgressPercent] = useState()
  const [activeProgress, setActiveProgress] = useState(false)
  useEffect(() => { 
    setProgressPercent(((basketList.reduce((a,v) =>  a + v.product.price, 0).toFixed(3)) * 100) / 500);
    price = (500 - basketList.reduce((a,v) =>  a + v.product.price, 0).toFixed(2)).toFixed(2)
    price != 500 ? setActiveProgress(true) :  setActiveProgress(false)

  }, [basketList]);
  return (
    <div className={`header-progress ${activeProgress ? "active" : ""} ${progressPercent >= 100 ? "success" : ""}` }>
      <div className="d-flex">
      {progressPercent <= 100 ?
        <>
          <img src={flash} alt=""/> 
          <p className="header-progress__title ml-1">{price} TL ürün daha ekleyin, kargonuz bedava!</p>
        </>
        :
        <div className="d-flex-center">
          <img src={flash} alt=""/> 
          <p className="header-progress__title ml-1">Tebrikler, kargonuz bedava!</p>
        </div>
      }
      </div>
      <>
      {progressPercent <= 100 &&
       <Progress percent={progressPercent} strokeColor="#FFCE00" strokeWidth={5} trailColor="#D01D32" showInfo={false}/>
      }
     
      </>
    </div>
  );
};

export default ProgressBar;