'use client';
import { useLocale } from "../i18n/LocaleContext";
import "./LanguageToggle.css";

const LanguageToggle = ({ className = "" }) => {
  const { locale, setLocale } = useLocale();

  return (
    <div className={`lang-toggle ${className}`} role="group" aria-label="Langue / Language">
      <button
        type="button"
        className={locale === "fr" ? "active" : ""}
        aria-pressed={locale === "fr"}
        onClick={() => setLocale("fr")}
      >
        FR
      </button>
      <button
        type="button"
        className={locale === "en" ? "active" : ""}
        aria-pressed={locale === "en"}
        onClick={() => setLocale("en")}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
