import React, { useState } from 'react';
import ss1 from '../resources/ss1.png';
import ss2 from '../resources/ss2.png';
import ss3 from '../resources/ss3.png';
import ss4 from '../resources/ss4.png';

const options = [
  {
    value: 'student',
    img: ss1,
    title: 'Arithmetic',
    description: 'Introductory'
  },
  {
    value: 'parent',
    img: ss2,
    title: 'Basic Algebra',
    description: 'Foundational'
  },
  {
    value: 'professional',
    img: ss3,
    title: 'Intermediate Algebra',
    description: 'Intermediate'
  },
  {
    value: 'teacher',
    img: ss4,
    title: 'Calculus',
    description: 'Advanced'
  }
];

const Step4 = ({ changeHandler }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [clicked, setClicked] = useState(false);

  const handleChange = (event) => {
    setClicked(true);
    setSelectedOption(event.target.value);
  };

  return (
    <div className="w-3/5 p-4 flex flex-col items-center justify-center">
      <h3 className="font-bold text-3xl mt-8">What is your math comfort level ?</h3>
      <p className="text-sm mt-3">Choose the highest level you feel confident in - you can always adjust later.</p>
      <form className="mt-12">
        <div className="flex flex-row flex-wrap bg-white gap-1">
          {options.map((option, index) => (
            <label key={index} className="flex-1 cursor-pointer mb-2">
              <input
                type="radio"
                name="role"
                value={option.value}
                checked={selectedOption === option.value}
                onChange={handleChange}
                className="hidden border-gray-300 rounded-md focus:ring-yellow-500 focus:ring-2"
              />
              <div className={`h-full border-2 flex flex-col items-center justify-center gap-1 rounded-md px-3 py-2 ${selectedOption === option.value ? 'border-yellow-500 shadow-md' : 'border-gray-300'} flex-grow`}>
                <img src={option.img} alt={option.title} className="max-w-full h-auto" />
                <p className="font-bold text-sm">{option.title}</p>
                <p className="text-gray-600 ">{option.description}</p>
              </div>
            </label>
          ))}
        </div>
      </form>
      <div className="w-full flex flex-col justify-center items-center mt-4">
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

export default Step4;

