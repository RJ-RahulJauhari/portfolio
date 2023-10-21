import React from 'react'
import "./NavBar.css"
import { SocialIcon } from 'react-social-icons'


const NavBar = () => {
    const pages = ['home','about','skills','projects','contact']
  return (
    <div className='navbar'>
      <div className='logo-text  flex1'>
        <h1>Rahul Jauhari</h1>
      </div>
      <div className='tab-container flex3 '>
        <ul className='tabs'>
            {
                pages.map((label,index) =>{
                    return <li className='tab-item'><a key={index} href={`#${label}`}>{label.charAt(0).toUpperCase() + label.slice(1)}</a></li>
                })
            }
        </ul>
      </div>
      <div className='social-container flex1 '>
        <SocialIcon url="https://github.com/RJ-RahulJauhari" />
        <SocialIcon url="https://www.linkedin.com/in/rahul-jauhari-596520214/" />
        <SocialIcon url="https://www.youtube.com/channel/UCfpdWwc-tJWelwcVcNbwGug" />
      </div>
    </div>
  )
}



export default NavBar
