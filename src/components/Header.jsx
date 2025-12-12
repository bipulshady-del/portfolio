import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-slate-900/60 backdrop-blur sticky top-0 z-20">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-xl font-bold">Bipul Chandra Rijal </Link>
        <nav className="space-x-4">
          <NavLink to="/" end className={({isActive})=>isActive? 'text-cyan-300':'text-slate-300'}>Home</NavLink>
          <NavLink to="/bio" className={({isActive})=>isActive? 'text-cyan-300':'text-slate-300'}>Bio</NavLink>
          <NavLink to="/projects" className={({isActive})=>isActive? 'text-cyan-300':'text-slate-300'}>Projects</NavLink>
          <NavLink to="/contact" className={({isActive})=>isActive? 'text-cyan-300':'text-slate-300'}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
