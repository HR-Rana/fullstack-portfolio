
import Link from '@/comopnents/tags/atag'
import Image from 'next/image'
import React from 'react'

export default function projectsCard(path, parenCalss, cardCalass, imagelink, path) {
  return (
    <div className={`card-container cursor-pointer ${parenCalss}`}>
        <Link to={path}>
            <div className={`flex grid-cols-1 grid-cols-2 ${cardCalass} `}>
                <div className="image">
                    <Image src={imagelink} alt="project" />
                </div>
                <div className="project-des">
                    <h2>{title}</h2>
                    <p>{desc}</p>
                    <div className="techonology">
                        <ul>
                            {technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}
