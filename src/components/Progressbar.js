import React from 'react'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
const Progressbar = ({step,len,changeHandler}) => {
  const part= 100/len;
  const width = `${(step + 1) * part}%`;
  return (
    <div className="w-screen flex justify-center item-center mt-4 mb-5">
    <div className="w-1/2 h-3 bg-white mb-50px flex flex-row ">
      <div>
      {
       step > 0 ?
        <button 
        
        onClick={()=>{
            changeHandler("prev");
        }}>
        <MdOutlineKeyboardArrowLeft className="text-2xl p-0 m-0"/>
        </button>
         : <div></div>
    }</div>
      <div className="h-1/2 mt-2 bg-blue-200 mr-1 rounded-lg "  style={{width}}></div>
      </div>
      </div>
  

  )
}

export default Progressbar