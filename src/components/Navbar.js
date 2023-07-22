import React from 'react'

import butterfly from "../icons/butterfly.png";
import search from "../icons/magnifying-glass.png";

import home from "../icons/home.png";
import card from "../icons/credit-card.png";
import todo from "../icons/to-do-list.png";
import profile from "../icons/user.png";

import notification from "../icons/notification.png";
import exit from "../icons/exit.png";

const Navbar = () => {
  return (
    <nav className='flex flex-col h-screen justify-between p-4 bg-[#ffffff]'>
      <div className='flex flex-col space-y-8'>
        <span><img className='w-7' src={butterfly} alt="logo" /></span>
        <span><img className='w-7' src={search} alt="search bar" /></span>
      </div>
      <div className='flex flex-col space-y-8'>
        <span><img className='w-7' src={home} alt="home" /></span>
        <span><img className='w-7' src={card} alt="card" /></span>
        <span><img className='w-7' src={todo} alt="todo" /></span>
        <span><img className='w-7' src={profile} alt="profile" /></span>
      </div>
      <div className='flex flex-col space-y-8'>
        <span><img className='w-7' src={notification} alt="notification" /></span>
        <span><img className='w-7' src={exit} alt="exit" /></span>
      </div>
    </nav>
  )
}

export default Navbar;
