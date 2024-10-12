"use client"

import React from 'react'
import Link from 'next/link'

export default function Input({type, placeholder, id, Class}) {
  return (
   <input type={type} placeholder={placeholder} id={id} className={Class} />
  )
}




