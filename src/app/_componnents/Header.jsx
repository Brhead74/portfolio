import React from 'react'

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="logo">
                <h1 className="text-xl font-semibold">My Website</h1>
            </div>
            <nav>
                <ul className="flex space-x-6">
                    <li><a href="/" className="hover:text-gray-400">Home</a></li>
                    <li><a href="/about" className="hover:text-gray-400">About</a></li>
                    <li><a href="/services" className="hover:text-gray-400">Services</a></li>
                    <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header