import React from 'react'
import { useState } from 'react';
import ss1 from '../resources/ss1.png'
import ss2 from '../resources/ss2.png'
import ss3 from '../resources/ss3.png'
import ss4 from '../resources/ss4.png'
const Step4 = ({changeHandler}) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [clicked,setClicked] = useState(false);
  const handleChange = (event) => {
    setClicked(true);
    setSelectedOption(event.target.value);
  };
  return (
    <div className="w-3/5 bg-slate-400 p-4">
      <form>
        <h3 className="font-bold">What is your math comfort level ?</h3>
        <p className="text-sm">Choose the highest level you feel confident in - you can always adjust later.</p>
        <div className="flex flex-row flex-wrap bg-white gap-1">
  <label className="flex-1 cursor-pointer mb-2  ">
    <input
      type="radio"
      name="role"
      value="student"
      checked={selectedOption === 'student'}
      onChange={handleChange}
      className="hidden"
    />
    <div className={` h-full border-2 flex flex-col items-center justify-center gap-1    rounded-md px-3 py-2 ${selectedOption === 'student' ? 'border-yellow-500' : 'border-black'} flex-grow`}>
      <img src={ss1} alt="ss1" className="max-w-full h-auto"/>
      <p className="font-bold">Arithmetic</p>
      <p>Introductory</p>
    </div>
  </label>
  <label className="flex-1 cursor-pointer mb-2  ">
    <input
      type="radio"
      name="role"
      value="parent"
      checked={selectedOption === 'parent'}
      onChange={handleChange}
      className="hidden"
    />
    <div className={` h-full border-2 flex flex-col items-center justify-center gap-1 rounded-md px-3 py-2 ${selectedOption === 'parent' ? 'border-yellow-500' : 'border-black'} flex-grow`}>
      <img src={ss2} alt="ss2" className="max-w-full h-auto" />
      <p className="font-bold">Basic Algebra</p>
      <p>Foundational</p>
    </div>
  </label>
  <label className="flex-1 cursor-pointer mb-2">
    <input
      type="radio"
      name="role"
      value="professional"
      checked={selectedOption === 'professional'}
      onChange={handleChange}
      className="hidden"
    />
    <div className={`h-full border-2 flex flex-col items-center justify-center gap-1 rounded-md px-3 py-2 ${selectedOption === 'professional' ? 'border-yellow-500' : 'border-black'} flex-grow`}>
      <img src={ss3} alt="ss3" className="max-w-full h-auto"/>
      <p className="font-bold">Intermediate Algebra</p>
      <p>Intermediate</p>
    </div>
  </label>
  <label className="flex-1 cursor-pointer mb-2 ">
    <input
      type="radio"
      name="role"
      value="teacher"
      checked={selectedOption === 'teacher'}
      onChange={handleChange}
      className="hidden"
    />
    <div className={` h-full border-2 flex flex-col items-center justify-center gap-1 rounded-md px-3 py-2 ${selectedOption === 'teacher' ? 'border-yellow-500' : 'border-black'} flex-grow`}>
      <img src={ss4} alt="ss4" className="max-w-full h-auto" />
      <p className="font-bold">Calculus</p>
      <p>Advanced</p>
    </div>
  </label>
</div>


      </form>
      <div className="w-full flex flex-col justify-center items-center">
     
     <button
 onClick={() => {
   changeHandler("next");
 }}
 className={`rounded ${
   clicked ? "bg-black text-white" : "bg-gray-200"
 } px-4 py-2`}
 disabled={!clicked}
>
 Continue
</button>


</div>
    </div>
  )
}

export default Step4