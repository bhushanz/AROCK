

import logo from '/logo.png'

const Navbar = (props) => {

  const menuBarOpens=()=>{
    console.log(props.menuOpen)
    props.setMenuOpne(true);
  }

 
  return (
    <div className='w-full navbar px-6 py-3 flex items-center justify-between fixed  '>
        <div className='Logo h-10 w-10'>
                         <img src={logo} alt="" className='w-full h-full object-cover ' />
        </div>

         <div  onClick={menuBarOpens} menuOpen={props.menuOpen} setMenuOpne={props.setMenuOpne} className='text-xs'>
            <h1 >MENU</h1>
         </div>
    </div>
  )
}

export default Navbar