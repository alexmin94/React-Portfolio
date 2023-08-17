import React from 'react'
import {Link,Outlet}from "react-router-dom"

export default function Root() {
  return (
    <div className='rootwrapper'>
        <ul className='nav'>
            <li className='navitem'>
                <Link to="/">
                <span>home</span>
                </Link>
            </li>
            <li className='navitem'>
                <Link to="/about">
                <span>about</span>
                </Link>
            </li>
            <li className='navitem'>
                <Link to="/work">
                <span>work</span>
                </Link>
            </li>
            <li className='navitem'>
                <Link to="/resume">
                <span>resume</span>
                </Link>
            </li>
            <li className='navitem'>
                <Link to="/contact">
                <span>contact</span>
                </Link>
            </li>
        </ul>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}
