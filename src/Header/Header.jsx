import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.png'
import {BiMenu} from 'react-icons/bi';
import './Header.css'



const Header = () => {
  const [open,setOpen] = useState(false)
  return (
    <>
    <nav className='w-container'>
      <div className="navbar-container">
          <div className="logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="navbar-menu" onClick={() => setOpen(!open)}>
          <div className="navbar-icon" >
            <BiMenu/>
          </div>
        </div>
      </div>
      {
            open ? <div className="navbar-links">
                  
                      <ul>
                          <li className='menu-links'>
                            <a> Intro</a>
                          </li>
                          <li  className='menu-links'>
                          <a> HOMEPAGE</a>
                          </li>
                          <li  className='menu-links'>
                          <a> ABOUT </a>
                          </li>
                          <li className='menu-links'>
                          <a> FEATURES </a>
                              
                          </li>
                          <li className='menu-links'>
                          <a> PRICING</a>
                              
                          </li>
                          <li className='menu-links'>
                          <a>  BLOG</a>
                             
                          </li>
                          <li className='menu-links'>
                          <a>  CONTACT</a>
                          </li>
                        </ul>
                  </div>
            : null
          }
        
    </nav>
    </>
  )
}


export default Header