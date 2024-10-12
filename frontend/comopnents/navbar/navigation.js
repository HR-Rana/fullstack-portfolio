
import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from '../tags/atag';
import Image from 'next/image';


export default function navigation() {
  return (
    <>
        <div className='header-container'>
           <div className="slogan-social-container">
              <p>Share your thoughts, it's will implement by me..</p>
              <div className="top-socials">
                  <li> <BsLinkedin/> </li>
                  <li> <FaFacebookSquare/> </li>
                  <li> <FaInstagramSquare/> </li>
                  <li> <FaGithub/> </li>
              </div>
           </div>

           <div className="navigaton">
              <div className="logo-site">
                  <Link  path={'/'} Class={''}> <Image src={''} /> </Link>
              </div>
           </div>
        </div>
    </>
  )
}
