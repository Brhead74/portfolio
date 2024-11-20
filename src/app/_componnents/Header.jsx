'use client'
import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-white text-gray-800 p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-md">
            {/* Logo */}
            <div className="logo">
                <h1 className="text-lg font-semibold">My Website</h1>
            </div>

            {/* Burger Menu Button */}
            <button
                onClick={toggleMenu}
                className="block ml-auto"
                aria-label="Toggle Menu"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                </svg>
            </button>

            {/* Full-Screen Menu */}
            <div
                className={`fixed inset-0 bg-gray-800 bg-opacity-90 text-white flex flex-col items-center justify-center transition-transform duration-300 ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
                style={{ zIndex: 100 }}
            >
                <button
                    onClick={toggleMenu}
                    className="absolute top-4 right-4 text-gray-100"
                    aria-label="Close Menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>
                <nav className="w-full px-8">
                    <ul className="space-y-8 text-center">
                        <li className="text-lg font-medium transform transition-transform duration-500 md:translate-x-0 md:text-xl lg:translate-x-10 lg:text-2xl">
                            <a href="#" className="hover:underline">
                                Home
                            </a>
                        </li>
                        <li className="text-lg font-medium transform transition-transform duration-500 md:translate-x-0 md:text-xl lg:translate-x-20 lg:text-2xl">
                            <a href="#" className="hover:underline">
                                About
                            </a>
                        </li>
                        <li className="text-lg font-medium transform transition-transform duration-500 md:translate-x-0 md:text-xl lg:translate-x-40 lg:text-2xl">
                            <a href="#" className="hover:underline">
                                Services
                            </a>
                        </li>
                        <li className="text-lg font-medium transform transition-transform duration-500 md:translate-x-0 md:text-xl lg:translate-x-60 lg:text-2xl">
                            <a href="#" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
