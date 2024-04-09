import React, { useState } from 'react';

const Step1 = ({changeHandler}) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [clicked,setClicked] = useState(false);
  const handleChange = (event) => {
    setClicked(true);
    setSelectedOption(event.target.value);
  };
  const data=[{
      value:"student",
      desc: "Student"
      },
      {
        value:"parent",
        desc: "Parent"
      },
      {
        value:"teacher",
        desc: "Teacher"
      },
      {
        value:"professionals",
        desc: "Professionals"
      },
      {
        value:"life learner",
        desc: "Life Learner"
      }

]
  return (
    <div className="w-2/5 bg-slate-400 p-4">
      <form>
        <h3 className="font-bold">Which Describe You Best ?</h3>
        <p className="text-sm">This will help us personalize your experience</p>
        <div>{
            data.map((info,index)=>{
                return (
            <label key={index} className="block cursor-pointer mb-2">
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
        
        }</div>
        
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
  );
};

export default Step1;