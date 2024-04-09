import React from 'react'
import img2 from '../resources/img2.png'

import Rating from '../resources/ratings.jpg'

const Step5 = ({changeHandler}) => {
  return (
    <div>
    <div className="w-3/5 flex flex-row flex-wrap">

    <div className="w-1/2">
        <img src={img2} alt="my_img"/>
    </div>
    
<div className="w-1/2 h-full flex flex-col  justify-center pl-0">
 <div className="ml-0 pl-0">
<h2 className=" w-full font-bold text-left ml-0 pl-0 text-3xl ">You are on your way!</h2>
</div>
<br/>  
<div className="flex flex-row gap-0">
<img src={Rating} alt="rating" className="m-0 p-0" style={{ width: '10%', height: 'auto' }} />
<img src={Rating} alt="rating" className="m-0 p-0" style={{ width: '10%', height: 'auto' }} />
<img src={Rating} alt="rating" className="m-0 p-0" style={{ width: '10%', height: 'auto' }} />
<img src={Rating} alt="rating" className="m-0 p-0" style={{ width: '10%', height: 'auto' }} />

</div>
 <br/>
  
<p className="text-left">Brilliant get your hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.</p>
</div>


    </div>
    <div className="w-full flex flex-row items-center justify-center">
     
     <button
       onClick={() => {
         changeHandler("next");
       }}
       className={"rounded  bg-black text-white px-4 py-2"}
     >
       Continue
     </button>

 </div>
    </div>
  )
}

export default Step5