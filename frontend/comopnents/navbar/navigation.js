"use client"
import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';
import Links from '../tags/atag';

import logo from '@/assist/images/logo/logo (2).png'



export default function Navigation() {
  const navItems = [
        {
          path: '/',
          name: 'home',
        }, {
          path: '/about',
          name: 'about',
        },
        {
          path: '/skills',
          name: 'skills',
        },
        {
          path: '/projects',
          name: 'projects',
        },
        {
          path: '/contact',
          name: 'contact',
        }
  ];




  return (
    <>
        <div className='header-container'>
           <div className="slogan-social-container">
              <p>Share your thoughts, it's will implement by me..</p>
              <div className="top-socials flex items-center justify-between">
                  <li> <BsLinkedin/> </li>
                  <li> <FaFacebookSquare/> </li>
                  <li> <FaInstagramSquare/> </li>
                  <li> <FaGithub/> </li>
              </div>
           </div>

           <div className="navigaton">
              <div className="logo-site">
                  <Links  path={'/'} Class={''}> <Image src={logo} /> </Links>
              </div>
              <div className="navItems">
                  <nav>
                     <ul className='flex items-center justify-between w-1/3'>
                        {
                         navItems.map((items, index)=>{
                          return(
                            <li key={index} > <Links path={items.path} Class={''} name={items.name} /> </li>
                          )
                         })
                        }
                     </ul>
                  </nav>
              </div>
           </div>
        </div>
    </>
  )
}
