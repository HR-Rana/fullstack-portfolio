import React from 'react'
import Link from 'next/link'


export default function Link({path, Class,  name}) {
  return (
    <Link to={path} className={Class }>{name}</Link>
  )
}
