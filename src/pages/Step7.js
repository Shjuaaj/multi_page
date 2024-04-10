import React, { useState, useEffect } from 'react';
import ss5 from '../resources/ss5.png';

const Step7 = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  const data = [
    {
      value: "foundational math",
      pic: ss5,
      title: "Foundational Math",
      desc: "Build your foundational skills in algebra, geometry, and probability."
    },
    {
      value: "mathematical thinking",
      pic: ss5,
      title: "Mathematical Thinking",
      desc: "Build your foundational skills in algebra, geometry, and probability."
    }
  ];

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-3/5 flex flex-col items-center justify-center gap-1">
        <p className={`text-3xl font-bold text-center mb-8 ${isMobile ? 'text-lg' : ''}`}>Learning path based on your answers</p>
        <p className={`text-center text-sm text-gray-500 mb-8 ${isMobile ? 'text-xs' : ''}`}>Choose one to get started. You can change anytime</p>

        <div className={`w-full flex ${isMobile ? 'flex-col gap-4' : 'flex-nowrap gap-4 justify-center'} relative mt-2 items-center`}>
          {data.map((info, index) => (
            <div key={index} className={`relative ${isMobile ? 'w-full' : 'w-1/2'} flex gap-0 border pl-1 pr-1 border-gray-400 rounded ${selectedOption === info.value ? 'border-yellow-500' : 'border-black'}`}>
              <label className="block cursor-pointer mb-2 w-full">
                <input
                  type="radio"
                  name="role"
                  value={info.value}
                  checked={selectedOption === info.value}
                  onChange={handleChange}
                  className="hidden"
                />
                <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} w-full items-center`}>
                  <div className={`mb-2 flex items-center justify-center ${isMobile ? 'mb-2' : 'mr-2'}`}>
                    <p><span className="font-bold">{info.title}</span> {info.desc}</p>
                  </div>
                  <img src={info.pic} alt="ss5" className={` ${isMobile ? 'h-auto max-w-xs' : 'w-1/8'}`} />
                </div>
              </label>
            </div>
          ))}
          <span className="text-black bg-orange-300 absolute top-0 left-[25%] transform -translate-x-1/2 -translate-y-1/2 rounded-lg px-3 py-1 text-sm">Most Popular</span>
        </div>
      </div>
    </div>
  );
};

export default Step7;









