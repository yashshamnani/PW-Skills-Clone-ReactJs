

import React from "react";
import redBus from '../assets/images/redbus.png';
import wipro from '../assets/images/wipro.png';
import oracle from '../assets/images/oracle.png';
import kpmg from '../assets/images/kpmg.png';
import ms100 from '../assets/images/ms100.png';


const AchiversSection = () => {
  return (
    <div className="mt-24 bg-slate-300"> 
        <p className="text-center text-5xl font-semibold text-indigo-800 pt-14">Our Achiever's Work with</p>
        <div className="flex py-14 mt-12 justify-evenly">
            <img src={wipro} alt="wipro" className="w-[30%]" />
            <img src={redBus} alt="redBus" className="w-[30%]"  />
            <img src={oracle} alt="oracle"  className="w-[10%]" />
            <img src={kpmg} alt="kpmg"   />
            <img src={ms100} alt="ms100" className="w-[20%]"   />
        </div>
    </div>
  )
}

export default AchiversSection