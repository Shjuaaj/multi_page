import React from 'react'
import { useState } from 'react';
import ss5 from '../resources/ss5.png'
const Step7 = () => {

    const [selectedOption, setSelectedOption] = useState('');
    const data=[
        {  value:"foundational math",
            pic: ss5,
            title: "Foundational Math",
            desc:"Build your foundational skills in  algebra ,geometry and probability."
        },
        {   value:"mathematical thinking",
            pic: ss5,
            title: "Mathematical Thinking",
            desc:"Build your foundational skills in  algebra ,geometry and probability."   
        }

    ]
    const handleChange = (event) => {
       
        setSelectedOption(event.target.value);
      };
  return (
    <div className="w-screen h-screen flex item-center justify-center">
    <div className="w-3/5 flex flex-col items-center justify-center gap-1">
    <p className="text-xl font-bold">Learning path based on your answers</p>
    <p>Choose one to get started. You can change anytime</p>
    
 <div className="w-full flex flex-row  gap-1 relative mt-2  justify-center items-center ">
  {data.map((info, index) => {
    return (
        <div className={`relative w-5/12 flex flex-row  gap-0 border pl-1 pr-1 border-gray-400 rounded ${selectedOption === `${info.value}` ? 'border-yellow-500' : 'border-black'}`}>
        <label key={index} className="block cursor-pointer mb-2">
            <input
            type="radio"
            name="role"
            value={info.value}
            checked={selectedOption === `${info.value}`}
            onChange={handleChange}
            className="hidden"
          />
         <div className="flex flex-row">
        <div className=" flex  items-center justify-center ">
          <p><span className="font-bold">{info.title} </span>{info.desc}</p>
        </div>
        <img src={info.pic} alt="ss5" />
        </div>
      </label>
      </div>
    );
  })}

  <span className="text-black bg-orange-300 absolute top-0 left-[30%] transform -translate-x-1/2 -translate-y-1/2 rounded-lg px-3 py-1">Most Popular</span>
</div>



  </div>
  </div>
  )
}

export default Step7