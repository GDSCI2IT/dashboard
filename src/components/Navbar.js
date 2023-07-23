import React from 'react';
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
    <nav className='fixed bottom-0 left-0 rounded-md w-screen bg-[#ffffff] z-10 sm:w-16 sm:h-screen sm:flex-col sm:justify-between p-4'>
      {/* Navbar for small screens */}
      <div className='flex px-2 sm:hidden justify-between'>
        <span><img className='w-5  pb-3' src={home} alt="home" /></span>
        <span><img className='w-5 pb-3' src={card} alt="card" /></span>
        <span><img className='w-5 pb-3' src={todo} alt="todo" /></span>
        <span><img className='w-5 pb-3' src={profile} alt="profile" /></span>
        <span><img className='w-5 pb-3' src={search} alt="search bar" /></span>
      </div>

      {/* Navbar for big screens */}
      <div className='hidden sm:h-screen sm:flex sm:flex-col sm:justify-between sm:py-8 sm:space-y-8'>
        <div className='flex flex-col space-y-8 '>
          <span><img className='w-7' src={butterfly} alt="logo" /></span>
          <span><img className='w-7' src={search} alt="search bar" /></span>
        </div>
        <div className='flex flex-col  space-y-8 '>
          <span><img className='w-7' src={home} alt="home" /></span>
          <span><img className='w-7' src={card} alt="card" /></span>
          <span><img className='w-7' src={todo} alt="todo" /></span>
          <span><img className='w-7' src={profile} alt="profile" /></span>
        </div>
        <div className='flex flex-col space-y-8 '>
          <span><img className='w-7' src={notification} alt="notification" /></span>
          <span><img className='w-7' src={exit} alt="exit" /></span>
        </div>
      </div>
      {/*top part*/}
      <div className='fixed top-1 right-1 flex px-2 sm:hidden '>
        <span><img className='w-7' src={notification} alt="notification" /></span>
      </div>
    </nav>
  );
};

export default Navbar;
