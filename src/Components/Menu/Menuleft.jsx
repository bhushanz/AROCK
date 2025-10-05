import React from 'react'
import Tilt from "react-parallax-tilt";
const menuLeft = () => {
  return (
    <div className=' h-full w-2/3  '>
          <div
  className="h-full relative w-full overflow-hidden  bg-[url('https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop')]
  bg-cover bg-center bg-no-repeat"
>                      
 <Tilt
    tiltMaxAngleX={25}
    tiltMaxAngleY={35}
    glareEnable={true}
    glareMaxOpacity={0.1}
    scale={1}
    perspective={1000}
  >
        <div className='relative h-[100vh] w-full  object-center object-cover  bg-transparent '>
             <img className=' absolute pr-8 top-0 left-0 scale-0.8 opacity-40 w-full h-full object-center object-cover' src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="" />
             <img className=' absolute pr-12 top-0 left-0 scale-0.7 opacity-40 w-full h-full object-center object-cover' src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="" />
             <img className=' absolute pr-16 top-0 left-0 scale-0.6 opacity-40 w-full h-full object-center object-cover' src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="" /> 
           </div> 

  </Tilt>

        </div>

    </div>
  )
}

export default menuLeft