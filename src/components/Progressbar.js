import React from 'react'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
const Progressbar = ({step,len,changeHandler}) => {
  const part= 100/len;
  const width = `${(step + 1) * part}%`;
  return (
    <div className="w-screen flex justify-center item-center mt-8 mb-8">
    <div className="w-3/4 h-3 bg-white mb-50px flex flex-row relative">
  <div className="p-0 m-0">
    {step > 0 && (
      <button 
        onClick={() => {
          changeHandler("prev");
        }}
        className="absolute left-0 top-1/2 transform -translate-y-1/2"
      >
        <MdOutlineKeyboardArrowLeft className="text-3xl p-0 m-0" />
      </button>
    )}
  </div>
  <div className={`h-1/2 mt-1 w-full bg-gray-200 ${step > 0 ? 'ml-8' : 'ml-8'} rounded-lg`}>
    <div className="h-full w-full bg-green-800 mr-1 rounded-lg" style={{ width }}></div>
  </div>
</div>

      </div>
  

  )
}

export default Progressbar