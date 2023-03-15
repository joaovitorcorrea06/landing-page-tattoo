import React from 'react'

const Navbar = () => {
  return (
      <div className="navbar bg-secondary fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><strong><a href='#section1'>Section 1</a></strong></li>
            <li><strong><a href='#section2'>Section 2</a></strong></li>
            <li><strong><a href='#section3'>Section 3</a></strong></li>
            <li><strong><a href='#section4'>Section 4</a></strong></li>
            <li><strong><a href='#section6'>Section 6</a></strong></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl">Example</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-xl ">
            <li><strong><a href='#section1'>Section 1</a></strong></li>
            <li><strong><a href='#section2'>Section 2</a></strong></li>
            <li><strong><a href='#section3'>Section 3</a></strong></li>
            <li><strong><a href='#section4'>Section 4</a></strong></li>
            <li><strong><a href='#section5'>Section 5</a></strong></li>
            <li><strong><a href='#section6'>Section 6</a></strong></li>
          </ul>
        </div>
        {/* <div className="navbar-end">
          <button className="btn gap-2">
            Venha conhecer meu trabalho
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
          </button>
        </div> */}
      </div>
  )
}

export default Navbar