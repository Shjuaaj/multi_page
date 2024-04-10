import React from 'react'
import { useState } from 'react';
import icon11 from '../resources/icon11.png'
import icon12 from '../resources/icon12.png'
import icon13 from '../resources/icon13.png'
import icon14 from '../resources/icon14.png'
import icon15 from '../resources/icon15.png'
const Step2 = ({changeHandler}) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [clicked,setClicked] = useState(false);

  const handleChange = (event) => {
    setClicked(true);
    setSelectedOption(event.target.value);
  };
  const data=[{
    value:"learn",
    desc: "Learning Specific skills to enhance my carrier",
    icon: icon11

    },
    {
      value:"explore",
      desc: "Exploring new topics I am interested in ",
      icon: icon12
    },
    {
      value:"express",
      desc: "Refreshing my math foundations",
      icon: icon13
    },
    {
      value:"exercise",
      desc: "Exercising my brain to stay sharp",
      icon: icon14
    },
    {
      value:"other",
      desc: "Something else",
      icon: icon15

    }

]
  return (
    <div className="w-2/5 p-4">
    <h3 className="font-bold text-3xl">Which are you most insterested in ?</h3>
        <p className="text-sm mt-3 text-gray-600 ">Choose just once. This will help us get you started (but won't limit your experience).</p>
      <form className="mt-12">
        
      <div className="mt-3">
  {data.map((info, index) => {
    return (
      <label key={index} className="block cursor-pointer mb-4">
        <input
          type="radio"
          name="role"
          value={info.value}
          checked={selectedOption === `${info.value}`}
          onChange={handleChange}
          className="hidden border-gray-300 rounded-md focus:ring-yellow-500 focus:ring-2"
        />
        <div className={ ` flex flex-row items-center gap-2 border-2 text-sm rounded-md px-3 py-2 ${selectedOption === `${info.value}` ? 'border-yellow-500 shadow-md' : 'border-gray-300'}`}>
        <img src={info.icon} alt="icon" style={{ width: '40px', height: '40px' }} />
          <p> {info.desc}</p>
        </div>
      </label>
    );
  })}
</div>

       
      </form>
      <div className="w-full flex flex-col justify-center items-center mt-8">
     
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

export default Step2