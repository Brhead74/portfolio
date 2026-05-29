import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-grid">
        <div className="contact-copy">
          <p className="contact-kicker">Contact</p>
          <h2 className="contact-title">Travaillons sur quelque chose de clair et utile.</h2>
          <p className="contact-description">Créateur multimédia, je peux aider sur du design, du jeu vidéo, du visuel 3D ou des interfaces simples à comprendre.</p>

          <div className="contact-actions">
            <a href='mailto:constantineau.max@gmail.com' className="button button-primary">
              Contactez-moi
            </a>
            <a
              href='maxconst_cv.pdf'
              target='_blank'
              rel='noreferrer'
              className="button button-secondary">
              Télécharger mon CV
            </a>
          </div>
        </div>

        <div className="contact-visual">
          <img src="contact.png" alt="Illustration de contact" className="contact-image" />
        </div>
      </div>
    </section>
  );
};

export default Contact;

