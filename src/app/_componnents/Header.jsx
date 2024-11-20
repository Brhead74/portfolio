'use client'
import React from 'react'

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
            <div className="logo">
                <h1 className="text-xl font-semibold">My Website</h1>
            </div>
            <button onClick={toggleMenu} className="block">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
            <nav className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-gray-800 md:static md:w-auto`}>
                {/* <ul className="flex flex-col md:flex-row md:space-x-6">
                    <li><a href="/" className="hover:text-gray-400">Home</a></li>
                    <li><a href="/about" className="hover:text-gray-400">About</a></li>
                    <li><a href="/services" className="hover:text-gray-400">Services</a></li>
                    <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
                </ul> */}
            </nav>
        </header>
    );
}

export default Header