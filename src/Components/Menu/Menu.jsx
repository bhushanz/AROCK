import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'
import gsap from 'gsap';
import Menuleft from './Menuleft'
import Menuright from './Menuright';

const Menu = (props) => {
     const menuRef =useRef(null);
   useGSAP(()=>{
    if(props.menuOpen){
      gsap.to(menuRef.current,{
        top:0,
      })
    }else{
         gsap.to(menuRef.current,{
        top:'100%',
      })
    }
   },[props.menuOpen])
  return (
    <div ref={menuRef} className='h-screen w-full fixed flex top-full z-50 bg-[#111] px-10 py-5'>
   <Menuleft/>
   <Menuright menuOpen={props.menuOpen} setMenuOpne={props.setMenuOpne} />
    </div>
  )
}

export default Menu