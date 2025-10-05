import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white font-mono text-sm ">
      <div className=" flex flex-col flex-wrap gap-2  ">

        {/* FOLLOW */}
        <div className='flex gap-40 justify-between text-[.8vw]'>
          <h3 className="">FOLLOW<br />(AROCK®)</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">INSTAGRAM</a></li>
            <li><a href="#" className="hover:underline">YOUTUBE</a></li>
          </ul>
        </div>

        {/* LISTEN */}
        <div className='flex  gap-40 justify-between text-[.8vw]'>
          <h3 className="mb-2">LISTEN<br />(AROCK®)</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">SPOTIFY</a></li>
            <li><a href="#" className="hover:underline">MIXCLOUD</a></li>
          </ul>
        </div>

        {/* GET IN TOUCH */}
        <div className="flex  justify-between  items-center    gap-40 text-xs">
          <h3 className=" w-1/2">GET IN TOUCH</h3>
          <button className="border w-1/2   uppercase  hover:bg-white hover:text-black transition">
            Email →
          </button>
        </div>

        {/* ADDRESS */}
        <div className="  flex  text-[.8vw]  justify-between ">
          <div>
            <p className="mb-1">SAN DIEGO</p>
            <p>3PM MUSIC</p>
            <p>1600 NATIONAL AVE</p>
            <p>SAN DIEGO, CA 92123</p>
          </div>
          <div className='flex flex-col text-right'>
            <p className="mb-1">LOS ANGELES</p>
            <p>6255 SUNSET BLVD.</p>
            <p>SUITE #700</p>
            <p>LOS ANGELES, CA 90028</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
