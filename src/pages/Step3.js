import React from 'react'
import img1 from '../resources/img1.png'

const Step3 = ({changeHandler}) => {
    
    
  return (
    <div className="flex flex-col items-center justify-center">
  <div className="w-full md:w-3/5 flex flex-col md:flex-row">
    <div className="w-full md:w-1/2 mb-4 md:mb-0">
      <img src={img1} alt="my_img" className="w-full" />
    </div>
    <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
      <h2 className="font-bold text-center text-3xl mb-4">You are in the right place</h2>
      <p className="text-center">Brilliant get your hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.</p>
    </div>
  </div>
  <div className="w-full flex items-center justify-center">
    <button
      onClick={() => {
        changeHandler("next");
      }}
      className="rounded bg-black text-white px-4 py-2"
    >
      Continue
    </button>
  </div>
</div>

  )
}

export default Step3