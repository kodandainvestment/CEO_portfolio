import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <div>
            <nav className="relative bg-black after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
                <div className="mx-auto max-w-7xl px-2 shadow-lg sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button
                                type="button"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
                            >
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className={`size-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}>
                                    <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className={`size-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                                    <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center justify-start sm:items-stretch sm:justify-start">
                            <h1 className='text-2xl font-bold text-orange-700'>C<span className='text-white'>EO</span></h1>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <Link to="/" className="rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white">Home</Link>
                                    <Link to="/expertise" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Expertise</Link>
                                    <Link to="/about" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">About</Link>
                                    <Link to="/achievement" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Achievement</Link>
                                    <Link to="/leadership" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Leadership</Link>
                                    <Link to="/contact" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Contact</Link>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className="relative ml-3 bg-orange-700 rounded-lg">
                                <button className="relative flex rounded-full px-3 py-2 text-sm font-medium text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Visit Company</button>
                            </div>
                        </div>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="block sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            <Link to="/" className="block rounded-md bg-gray-950/50 px-3 py-2 text-base font-medium text-white">Home</Link>
                            <Link to="/about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">About</Link>
                            <Link to="/expertise" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Expertise</Link>
                            <Link to="/achievement" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Achievement</Link>
                            <Link to="/leadership" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Leadership</Link>
                            <Link to="/contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Contact</Link>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    )
}
