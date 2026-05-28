const Contact = () => {
  return (
    <section
      id="contact"
      className="mx-auto mt-10 max-w-7xl rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] px-4 py-8 shadow-[0_18px_70px_rgba(15,23,42,0.08)] sm:px-8 lg:px-10 lg:py-10"
    >
      <div className='grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center'>
        <div className='space-y-4 text-center lg:text-left'>
          <p className='text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[var(--muted)] sm:text-xs'>Contact</p>
          <h2 className='text-[1.9rem] font-black tracking-tight text-[var(--foreground)] sm:text-4xl'>Travaillons sur quelque chose de clair et utile.</h2>
          <p className='mx-auto max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base lg:mx-0'>Créateur multimédia, je peux aider sur du design, du jeu vidéo, du visuel 3D ou des interfaces simples à comprendre.</p>

          <div className='flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start'>
            <a 
              href='mailto:Bhread74@gmail.com'
              className='inline-flex w-full items-center justify-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-black sm:w-auto'>
              Contactez-moi
            </a>
            <a 
              href='maxconst_Cv.pdf'
              target='_blank'
              rel='noreferrer'
              className='inline-flex w-full items-center justify-center rounded-full border border-[var(--border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--foreground)] shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-50 sm:w-auto'>
              Télécharger mon CV
            </a>
          </div>
        </div>

        <div className='overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-white shadow-sm'>
          <img src="contact.png" alt="Illustration de contact" className='h-full w-full object-cover' />
        </div>
      </div>
    </section>
  );
};

export default Contact;

