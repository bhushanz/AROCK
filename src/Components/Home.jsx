import React, { useRef } from 'react'
import Navbar from './Navbar'
import gsap from 'gsap';
import Center from './Center'
import { useGSAP } from '@gsap/react';

const Home = (props) => {
    const UpLift=useRef(null);
    const Load=useRef(null);
      const tl=gsap.timeline()
    useGSAP(()=>{
      tl.to(Load.current,{
        width: '100%',
        duration:1.5,
        ease:'linear',
      })
      .to(Load.current,{
        opacity:0,
        duration:0.6 ,
      })
      .to(UpLift.current,{
        height:0,
        duration:0.7,
        ease:"power2.inOut",
        onComplete: () => {
    UpLift.current.style.display = "none";
  }
      },"<")
      
    })
    
  return (
      <div>
    
    <div ref={UpLift}  className='w-full h-screen rounded-md absolute z-20 bg-[#111]' >
       <div className='w-full h-1 bg-transparent'>
             <div ref={Load}  className='w-[0%] h-1 bg-white rounded-full'></div>
       </div>
    </div>

    <div className=' h-screen w-full '>
       <Navbar menuOpen={props.menuOpen} setMenuOpne={props.setMenuOpne} />
       <Center/>
    </div>

    </div>
  )
}

export default Home