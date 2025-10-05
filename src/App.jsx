import React, { useState } from 'react'
import Home from './Components/Home'
import Menu from './Components/Menu/Menu'


const App = () => {
  const [menuOpen, setMenuOpne] = useState(false)
  return (
    <div className=' w-full text-white bg-cover bg-center  bg-[url(https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop)]'>
      <Menu menuOpen={menuOpen} setMenuOpne={setMenuOpne} />
       <Home menuOpen={menuOpen} setMenuOpne={setMenuOpne}  />

    </div>
  )
}

export default App