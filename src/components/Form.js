import React from 'react'

import { useState,useEffect, useRef } from 'react';

import Progressbar from './Progressbar';


import Step2 from '../pages/Step2';
import Step3 from '../pages/Step3';
import Step1 from '../pages/Step1'
import Step4 from '../pages/Step4';
import Step5 from '../pages/Step5';
import Step6 from '../pages/Step6';
import Step7 from '../pages/Step7';
const Form = () => {
    const [step, setStep]= useState(0);

    const pageTitle=["step 1", "step 2","step 3","step 4","step 5"];
    const len= pageTitle.length;

   const [check,setCheck] = useState(true);
   const [loading, setLoading] = useState(false);
   const timerId = useRef(null);
    
    function changeHandler(move){
        if(move==="next"){
           if(step<len-1) {
            setStep((currStep)=>currStep+1);
             
        }
        else if(step===4){
          setLoading(true);
          setCheck(false);
        }
        
      }
        else if(move==="prev"){
             setStep((currStep)=>currStep-1);
        }
        
    }
    
    const PageDisplay=()=>{
        if(step===0){
            return <Step1 changeHandler={changeHandler}/>;
        }
        else if(step===1){
          
            return <Step2 changeHandler={changeHandler}/>;
        }
        else if(step===2){
          
          return <Step3 changeHandler={changeHandler} />;
        }
        else if(step===3){
        
          return <Step4 changeHandler={changeHandler}/>;
        }
        else if(step===4){
           
          return <Step5 changeHandler={changeHandler} />;
        }
    }

    
    
     
   
    useEffect(() => {
      if(loading){
      
      
      timerId.current = setTimeout(() => {
          
          
            setLoading(false);
           

        }, 2000);

      }

        return () => clearTimeout(timerId.current);
    }, [loading]);
  

    
  return (
    <div>
    {
      check?
      <div>
      <Progressbar step={step} len={len} changeHandler={changeHandler}/>
    <div>
    <div className="w-full max-h-fit flex justify-center items-center">
    <div className=" w-full h-full flex justify-center">
        {PageDisplay()}

    </div>
    </div>
    {/* <div><Footer changeHandler={changeHandler} step={step} pageTitle={pageTitle} clicked={clicked}/></div> */}
    </div>
    </div>
    :
    loading ? <Step6/>: <Step7/>
    }
    </div>
  )
}

export default Form