// Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="text-sm">
                        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
                        <a href="/terms" className="hover:text-gray-400">Terms of Service</a>
                        <a href="/contact" className="hover:text-gray-400">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
