import React from "react";

const Modal = ({ selectedImage, closeModal }) => {
  // Return null if no image is selected
  if (!selectedImage) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-slate-950/70 p-4"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div
        className="relative w-full max-w-4xl cursor-default overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-white text-3xl text-[var(--foreground)] transition-transform hover:scale-105"
          onClick={closeModal}
          aria-label="Close Modal"
        >
          &times;
        </button>

        <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="bg-slate-50 p-3 sm:p-4">
            <div className="overflow-hidden rounded-[1.25rem] bg-white">
              <img
                src={selectedImage.src}
                alt={selectedImage.titre || "Modal Image"}
                className="h-[44vh] w-full object-contain sm:h-[52vh] lg:h-[68vh]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 p-5 sm:p-6 lg:p-7">
            <div className="space-y-3">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">Projet</p>
              {selectedImage.titre && (
                <h2 id="modal-title" className="text-2xl font-black tracking-tight text-[var(--foreground)] sm:text-3xl">
                  {selectedImage.titre}
                </h2>
              )}

              {selectedImage.details && (
                <p id="modal-description" className="text-sm leading-7 text-[var(--muted)] sm:text-base">
                  {selectedImage.details}
                </p>
              )}
            </div>

            {Array.isArray(selectedImage.stack) && selectedImage.stack.length > 0 && (
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {selectedImage.stack.map((item) => (
                    <span key={item} className="rounded-full border border-[var(--border)] bg-slate-50 px-3 py-1 text-sm text-[var(--foreground)]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-auto flex flex-col gap-3 sm:flex-row">
              {selectedImage.link ? (
                <a
                  href={selectedImage.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-black"
                >
                  Ouvrir le projet
                </a>
              ) : (
                <span className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-slate-50 px-5 py-3 text-sm font-semibold text-[var(--muted)]">
                  Aperçu uniquement
                </span>
              )}

              <button
                type="button"
                onClick={closeModal}
                className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-50"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
