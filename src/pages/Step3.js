import React from 'react'
import img1 from '../resources/img1.png'

const Step3 = ({changeHandler}) => {
    
    
  return (
    <div>
    <div className="w-3/5 flex flex-row">
    <div className="w-1/2">
        <img src={img1} alt="my_img"/>
    </div>
    <div className="w-1/2 h-full flex flex-col items-center justify-center">
  <h2 className="font-bold text-center text-3xl">You are in the right place</h2>
  <br/>
  <br/>
  <p className="text-center">Brilliant get your hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.</p>
</div>
  
    </div>
    <div className="w-full flex flex-row items-center justify-center">
     
     <button
       onClick={() => {
         changeHandler("next");
       }}
       className={"rounded  bg-black text-white px-4 py-2"}
     >
       Continue
     </button>

 </div>
    </div>
  )
}

export default Step3