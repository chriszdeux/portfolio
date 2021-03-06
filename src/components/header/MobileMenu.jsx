import React from 'react'
import { aboutMeData } from '../../utils/aboutData'
import { icons } from '../../utils/icons'
import { scrollTop } from '../../utils/scrollTop'


export const MobileMenu = ({ animation }) => {
  // const { handleShowComponent, animation } = values
  const { close_icon } = icons 
  const { resume } = aboutMeData
  // debugger
  return (
    <nav className={`navbar_mobile ${ animation }`}>
      {/* <div className='close' onClick={ handleShowComponent }>
        {
          close_icon
        }
      </div> */}
      <ul className='mobile_menu'>
        <li><a href="#main" onClick={ scrollTop }>Main</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a href="#">

            Resume
          </a>
          <a href={ resume } target="_blank" rel="noreferrer">
          { icons.link_icon }
          </a>
          <a href={ resume } download>
          { icons.download_icon }
          </a>
        </li>
      </ul>
      {/* <div className='block_menu_container'>
        <div className='menu-block-1'></div>
        <div className='menu-block-2'></div>
        <div className='menu-block-3'></div>
        <div className='menu-block'></div>
      </div> */}
    </nav>
  )
}
