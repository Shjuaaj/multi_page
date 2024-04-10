import React from 'react';
import '../App.css';

const Step6 = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <span className="loader" style={{ color: 'lightorange', width: '96px', height: '96px' }}></span>

      <p className="w-full md:w-1/2 font-bold text-xl lg:text-2xl xl:text-3xl mt-8 text-center">
        Finding learning path recommendations for you based on your responses.
      </p>
    </div>
  );
};

export default Step6;
