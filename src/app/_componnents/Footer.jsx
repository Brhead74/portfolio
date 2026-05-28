import { Instagram, LinkedinIcon } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <footer className="mx-auto max-w-7xl px-6 pb-8 pt-4 text-[var(--muted)] sm:px-8 lg:px-10">
            <div className="flex flex-col gap-4 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm">&copy; {new Date().getFullYear()} Maxime Constantineau. Tous droits réservés.</p>
                <div className="flex items-center gap-4">
                    <a className="transition-opacity hover:opacity-70" href="https://www.linkedin.com/in/max-const" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <LinkedinIcon size={18} />
                    </a>
                    <a className="transition-opacity hover:opacity-70" href="https://www.instagram.com/half_alive_artist/" target="_blank" rel="noreferrer" aria-label="Instagram">
                        <Instagram size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
