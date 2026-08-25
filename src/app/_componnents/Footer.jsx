'use client';
import { Instagram, LinkedinIcon } from 'lucide-react';
import "./Footer.css";
import { useLocale } from "../i18n/LocaleContext";

const Footer = () => {
    const { t } = useLocale();

    return (
        <footer className="site-footer">
            <div className="site-footer-inner">
                <p className="site-footer-copy">&copy; {new Date().getFullYear()} Maxime Constantineau. {t("footer.rights")}</p>
                <div className="site-footer-links">
                    <a className="site-footer-link" href="https://www.linkedin.com/in/max-const" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <LinkedinIcon size={18} />
                    </a>
                    <a className="site-footer-link" href="https://www.instagram.com/half_alive_artist/" target="_blank" rel="noreferrer" aria-label="Instagram">
                        <Instagram size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
