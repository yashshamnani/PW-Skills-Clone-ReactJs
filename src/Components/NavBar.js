 
import React from 'react'
import PwLogo from '../assets/images/PWSkills-logo.png'
import searchImg from "../assets/images/search-icon.svg";
import NavList from './NavList';
const NavBar = () => {
  return (
     <>
      <nav className='mt-[20px] flex justify-around items-center'>
        <img className='w-44' src={PwLogo} alt='logo' />
        <div className='flex basis-2/4 justify-center items-center rounded-md border-2 border-[#0D0D0D] m-2'>
          <img className='w-6 h-fit mr-3 ml-3' src={searchImg} alt='Search'/>
          <input className='w-full h-fit outline-none p-2' type='text' placeholder='What Do you want to learn' name='search' id='search'/>
        </div>

        <button className='text-white bg-blue-600 p-2 text-lg px-5 font-semibold rounded-lg m-5 mr-20'>Login / Register</button>
      </nav>

      <NavList />
     </>
  )
}

export default NavBar
