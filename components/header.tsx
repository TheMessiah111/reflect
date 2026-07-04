"use client";
import React, { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navlinks = [
    { name: "Product",   href: "#" },
    { name: "Pricing",   href: "#" },
    { name: "Company",   href: "#" },
    { name: "Blog",      href: "#" },
    { name: "Changelog", href: "#" },
  ]

  return (
    <header>
      {/* Top bar */}
      <div className='flex justify-between items-center mt-4 px-4'>

        {/* Logo */}
        <div className='flex items-center gap-2'>
          <img src="/Logo.jpeg" alt="Logo Image" className='w-9 h-9 object-cover' />
          <a href="/" className='text-2xl'>Reflect</a>
        </div>

        {/* Desktop nav */}
        <nav className='hidden md:flex items-center opacity-70 rounded-3xl border border-[#4D2F8C] px-2 py-1 gap-0'>
          {navlinks.map((link) => 
          <div>
            <a
              key={link.name}
              href={link.href}
              className='px-5 py-2 text-sm hover:text-lg transition-all ease-linear'
            >
              {link.name}
            </a>
          
          </div>
          )}
        </nav>

        {/* Desktop CTAs */}
        <div className='hidden md:flex items-center gap-2 m-2'>
          <a href="#" className='text-xl px-3'>Login</a>
          <a
            href="/"
            className='border-2 px-4 py-2 bg-[linear-gradient(0deg,rgba(113,47,255,0.12),rgba(113,47,255,0.12)),linear-gradient(180deg,rgba(60,8,126,0)_0%,rgba(60,8,126,0.32)_100%)]'
          >
            Start Free Trial
          </a>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className='md:hidden flex flex-col gap-[5px] p-1'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Toggle menu'
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden  transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <nav className='flex flex-col px-4 border-t border-[#4D2F8C33] mt-1 '>
          {navlinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='py-3 opacity-75 hover:opacity-100 hover:cursor-pointer hover:font-bold border-b border-[#4D2F8C22] text-base '
            >
              {link.name}
            </a>
          ))}
          <div className='flex items-center py-4 justify-around gap-'>
            <a href="#" className='text-base opacity-80 hover:border-b-4 transition-all duration-100 ease-in'>Login</a>
            <a
              href="/"
              className='border-2 px-4  py-2 text-sm bg-[linear-gradient(0deg,rgba(113,47,255,0.12),rgba(113,47,255,0.12)),linear-gradient(180deg,rgba(60,8,126,0)_0%,rgba(60,8,126,0.32)_100%)] hover:scale-110 transition-transform duration-300'
            >
              Start Free Trial
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}