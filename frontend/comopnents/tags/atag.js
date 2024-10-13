import React from 'react'
import Link from 'next/link'


export default function Links({path, Class,  name}) {
  return (
    <Link href={path} className={Class }>{name}</Link>
  )
}
