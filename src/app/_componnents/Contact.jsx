'use client';
import "./Contact.css";
import { useLocale } from "../i18n/LocaleContext";

const CV_DRIVE_URL = "https://drive.google.com/file/d/1LHhnnAPkLyHLLT4CPVDdiTSbexwvX4OU/view?usp=drive_link";

const Contact = () => {
  const { t } = useLocale();

  return (
    <section id="contact" className="contact-section">
      <div className="contact-blob-ring" aria-hidden="true" />
      <div className="contact-blob" aria-hidden="true" />
      <div className="contact-copy">
        <p className="kicker contact-kicker">{t("contact.kicker")}</p>
        <h2 className="contact-title">{t("contact.title")}</h2>
        <p className="contact-description">{t("contact.description")}</p>

        <div className="contact-actions">
          <a href='mailto:constantineau.max@gmail.com' className="button button-primary">
            {t("contact.contactMe")}
          </a>
          <a
            href={CV_DRIVE_URL}
            target='_blank'
            rel='noopener noreferrer'
            className="button button-secondary"
            title={t("contact.viewCvTitle")}>
            {t("contact.viewCv")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
