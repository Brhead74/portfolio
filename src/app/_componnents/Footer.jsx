// Footer.js
import { Instagram, LinkedinIcon } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="text-sm">
                        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="www.linkedin.com/in/max-const"><LinkedinIcon /></a>
                        <a href="www.instagram.com/half_alive_artist/"><Instagram /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
