import React,{useState} from 'react';
import { Progress, Button } from 'antd';
import flash from '../../assets/images/flash.svg'

const ProgressBar = ({text}) => {
  const [progressPercent, setProgressPercent] = useState(75)
  return (
    <div className="header-progress d-none">
      <div className="d-flex">
        <img src={flash} alt=""/> 
        <p className="header-progress__title ml-1">50 TL ürün daha ekleyin, kargonuz bedava!</p>
      </div>
      <>
      <Progress percent={progressPercent} strokeColor="#FFCE00" strokeWidth={5} trailColor="#D01D32" showInfo={false}/>
      </>
    </div>
  );
};


export default ProgressBar;