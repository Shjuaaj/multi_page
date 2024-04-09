import React from 'react'
import { useState } from 'react';
const Step2 = ({changeHandler}) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [clicked,setClicked] = useState(false);

  const handleChange = (event) => {
    setClicked(true);
    setSelectedOption(event.target.value);
  };
  const data=[{
    value:"learn",
    desc: "Learning Specific skills to enhance my carrier"
    },
    {
      value:"explore",
      desc: "Exploring new topics I am interested in "
    },
    {
      value:"express",
      desc: "Refreshing my math foundations"
    },
    {
      value:"exercise",
      desc: "Exercising my brain to stay sharp"
    },
    {
      value:"other",
      desc: "Something else"
    }

]
  return (
    <div className="w-2/5 bg-slate-400 p-4">
      <form>
        <h3 className="font-bold">Which are you most insterested in ?</h3>
        <p className="text-sm">Choose just once. This will help us get you started (but won't limit your experience).</p>
        <div>{
            data.map((info,index)=>{
                return(
        <label className="block cursor-pointer mb-2">
          <input
            type="radio"
            name="role"
            value={info.value}
            checked={selectedOption === `${info.value}`}
            onChange={handleChange}
            className="hidden"
          />
          <div className={`border-2 rounded-md px-3 py-2 ${selectedOption === `${info.value}` ? 'border-yellow-500' : 'border-black'}`}>
          {info.desc}
          </div>
        </label>
                )
            })
        }
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

export default Step2