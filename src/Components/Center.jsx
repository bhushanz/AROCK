import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { FaPlay } from "react-icons/fa6";
const Center = () => {
   const textH1 =useRef(null);

useGSAP(() => {
  const splitText = textH1.current.textContent.split(''); 

  let clutter = '';
  splitText.forEach((char) => {
    clutter += `<span>${char}</span>`; 
  });

  textH1.current.innerHTML = clutter;

gsap.from('h1 span', {
  y: 100,
  opacity:0,
  duration: 1, 
  delay:2,   
  stagger: 0.1,   
});

});

  return (
    <div className=' absolute w-[82%] mt-4 m-auto  h-fit  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  '>

         <h1 ref={textH1} className='center overflow-hidden text-center  tracking-tight   leading-[.8] text-[21vw]'>AROCK</h1>  
 
         <div className=' w-full  px-4 flex justify-between items-center'>
            <div className='w-fit flex items-start gap-2' >
                <div className='px-2 py-2 border  flex items-center justify-center rounded-full'>
                  <FaPlay className=' text-sm text-white'/>
                </div>
                 <h1 className='text-[.8vw] font-[a4]'>Play <br />The Film</h1>
            </div>
               <div className=' flex gap-20 justify-between items-center ' >
                 <div>
                    <h1 className='text-[.8vw] font-[a4] font-medium uppercase leading-3 '>creator <br />curetor</h1>
                 </div>
                 <div className='text-[.8vw] font-[a4] font-medium leading-3 flex flex-col  uppercase '>
                    <h1>New &nbsp; York</h1>
                    <h1>Los &nbsp;Angles</h1>
                 </div>
                 

            </div>
        </div>     
        
    </div>
  )
}

export default Center