import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Bars3BottomRightIcon, XMarkIcon} from '@heroicons/react/24/solid'

const Header = () => {
  const [isMenuOpen, setIsMenuOPen] = useState(false);
  return (
    <div className='bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-12 lg:px-8'>
     <div className='flex items-center justify-between '>
      <span className='text-2xl font-bold'>
      <h3>Meal DB</h3>
      </span>
        <ul className='items-center hidden space-x-8 lg:flex font-bold'>
          <li><NavLink to ="/" title='Home' className={({isActive}) => isActive ? 'active' : 'default'}>Home</NavLink></li>
          <li><NavLink to="resturent" title='Restaurant' className={({isActive}) => isActive ? 'active' : 'default'}>Restaurant</NavLink></li>
          <li><NavLink to="about" title='About Us' className={({isActive}) => isActive ? 'active' : 'default'}>About Us </NavLink></li>
          <li><NavLink to="about" title='Contact' className={({isActive}) => isActive ? 'active' : 'default'}> Contact </NavLink></li>
        </ul>
       <div className='lg:hidden'>
       <button
        aria-level='Open Menu'
        title='Open Menu'
        onClick={()=> setIsMenuOPen(true)}
       >
     <Bars3BottomRightIcon className='w-5 text-gary-600'/>
        </button>
        {isMenuOpen && (
          <div className='absolute top-0 left-0 w-full z-10'>
            <div className='p-5 bg-yellow-50 border rounded shadow-sm'>
              {/* logo and Button Section  */}
              <div className='flex items-center justify-between '>
              <div>
                  <Link to="/"> <span className='text-2xl font-bold'>
                  <h3>Meal DB</h3>
                  </span></Link>
               </div>

                    {/* Dropdown menu close button  */}
                    <div>
                      <button 
                       aria-level='Close Menu'
                       title='Close Menu'
                       onClick={()=> setIsMenuOPen(false)}
                       >
                         <XMarkIcon className='w-5 text-gary-600'/> 
                      </button>
                    </div>
              </div>

              <nav>
        <ul className='space-y-2'>
        <li><NavLink to ="/" title='Home' className={({isActive}) => isActive ? 'active' : 'default'}/> Home</li>
          <li><NavLink to="resturent" title='Restaurant' className={({isActive}) => isActive ? 'active' : 'default'}/>Restaurant</li>
          <li><NavLink to="about" title='About Us' className={({isActive}) => isActive ? 'active' : 'default'}/>About Us</li>
          <li><NavLink to="about" title='Contact' className={({isActive}) => isActive ? 'active' : 'default'}/>Contact</li>
      </ul>
          </nav>
            </div>

          </div>
        )}
       </div>
     </div>
    </div>
  );
};

export default Header;