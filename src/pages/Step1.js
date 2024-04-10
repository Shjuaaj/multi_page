import React, { useState } from 'react';
import icon1 from '../resources/icon1.png';
import icon2 from '../resources/icon2.png';
import icon3 from '../resources/icon3.png';
import icon4 from '../resources/icon4.png';
import icon5 from '../resources/icon5.png';
import icon6 from '../resources/icon6.png';

const Step1 = ({ changeHandler }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [clicked, setClicked] = useState(false);

  const handleChange = (event) => {
    setClicked(true);
    setSelectedOption(event.target.value);
  };

  const data = [
    {
      icon: icon1,
      value: "student",
      desc: "Student",
      desc1: "or soon to be enrolled"
    },
    {
      icon: icon2,
      value: "professionals",
      desc: "Professionals",
      desc1: "pursuing a career"
    },
    {
      icon: icon4,
      value: "parent",
      desc: "Parent",
      desc1: "of a school-age child"
    },
    {
      icon: icon3,
      value: "lifelong learner",
      desc: "Lifelong Learner",
      desc1: ""
    },
    {
      icon: icon5,
      value: "teacher",
      desc: "Teacher",
      desc1: ""
    },
    {
      icon: icon6,
      value: "other",
      desc: "Other",
      desc1: ""
    }
  ];

  return (
    <div className="w-2/5 p-4">
      <h2 className="font-bold text-3xl">Which Describes You Best?</h2>
      <p className="text-sm mt-3 text-gray-600">This will help us personalize your experience</p>

      <form className="mt-12">
        <div className="mt-3">
          {data.map((info, index) => (
            <label key={index} className="block cursor-pointer mb-2">
              <input
                type="radio"
                name="role"
                value={info.value}
                checked={selectedOption === `${info.value}`}
                onChange={handleChange}
                className="hidden border-gray-300 rounded-md focus:ring-yellow-500 focus:ring-2"
              />
              <div className={`flex items-center flex-wrap p-0 gap-1 border-2 rounded-md px-3 py-2 ${selectedOption === `${info.value}` ? 'border-yellow-500 shadow-md' : 'border-gray-300'}`}>
                <img src={info.icon} alt="icon" style={{ width: '40px', height: '40px' }} />
                <p classname="flex flex-row ">{info.desc} </p>
                <p className="text-gray-400 text-sm">{info.desc1}</p>
                
              </div>
            </label>
          ))}
        </div>
      </form>

      <div className="w-full flex flex-col justify-center items-center mt-8">
        <button
          onClick={() => {
            changeHandler("next");
          }}
          className={`rounded ${clicked ? "bg-black text-white" : "bg-gray-200"} px-4 py-2`}
          disabled={!clicked}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Step1;
