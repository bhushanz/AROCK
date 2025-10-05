import React from 'react'
import logo from '/logo.png'
import { easeInOut, motion } from 'motion/react'
import Footer from './Footer'
easeInOut
const Menuright = (props) => {

    const navLinks = [
        { href: "#home", text: "About" },
  { href: "#about", text: "Storys" },
  { href: "#project", text: "Projects" }, 
  { href: "#contact", text: "Releases" },
];




    const menuBarCloses =()=>{
        props.setMenuOpne(false)
    }
  return (
    <div className='w-1/2 h-full text-white  '>
        <div onClick={menuBarCloses}  className='font-[a4] text-[.8vw] uppercase text-right'>Close</div>
        <div className='w-full h-[98%] px-25 py-15 '>
            <div className='Logo h-10 w-10'>
                 <img src={logo} alt="" className='w-full h-full object-cover ' />
            </div>

            <div className='navitems h-60  flex  flex-col  justify-center text-2xl  uppercase text-white'>
                      {navLinks.map((link , i)=>(
              <motion.div  key={i}
  className="      hover:not-italic py-1 h-8 flex flex-col   overflow-hidden cursor-pointer w-fit"
  initial="initial"

  whileHover="hover"   
>
  <motion.span
    className=" navbar  font-medium inline-block "
    variants={{
      initial: { y: "0%",opacity:1 },
      hover: { y: "-105%",opacity:0 },
    }}
    transition={{ duration: 0.3,ease:easeInOut}}
  >
    <a href={link.href} className="font-[u7]  ">
  {link.text}
    </a>
  </motion.span>

  <motion.span
    className=" heading inline-block"
    variants={{
      initial: { y: "0%" },
      hover: { y: "-100%" },
    }}
    transition={{ duration: 0.3 ,ease:easeInOut }}
  >
    <a href={link.href} className=" font-[u7]">
     {link.text}
    </a>
  </motion.span>

</motion.div>
         ))}
            </div>
            <Footer/>
        </div>
    </div>
  )
}

export default Menuright