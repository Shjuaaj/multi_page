import React from 'react';
import img2 from '../resources/img2.png';
import Rating from '../resources/ratings.jpg';

const Step5 = ({ changeHandler }) => {
  return (
    <div className="flex flex-col items-center justify-center max-h-screen">
      <div className="w-full  md:w-3/5 lg:w-4/5 xl:w-3/5 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-1/2">
          <img src={img2} alt="my_img" className="w-full h-auto mb-4" />
        </div>
        <div className="w-full md:w-1/2">
          <div className="ml-0 pl-0 mb-4">
            <h2 className="font-bold text-left text-3xl">You are on your way!</h2>
          </div>
          <div className="flex flex-row gap-2 mb-4">
            <img src={Rating} alt="rating" className="w-6 h-auto" />
            <img src={Rating} alt="rating" className="w-6 h-auto" />
            <img src={Rating} alt="rating" className="w-6 h-auto" />
            <img src={Rating} alt="rating" className="w-6 h-auto" />
          </div>
          <p className="text-left italic mb-4 text-sm text-gray-800">
          "Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand . I now feel confident approaching both technical and real world problem solving situations." </p>
          <p className="italic text-sm text-left">- Jacob S.</p>
        </div>
      </div>
      <div className="w-full flex justify-center mt-4">
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
  );
};

export default Step5;


