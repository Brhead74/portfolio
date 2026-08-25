'use client';
import { useRef, useEffect } from "react";
import Link from 'next/link';
import { data } from "../data";
import "./AsymmetricalGallery.css";
import { normalizeSrc, videoPattern, slugify } from './utils';
import { useLocale } from "../i18n/LocaleContext";

const MediaPreview = ({ source, alt }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (el && el.tagName === "VIDEO") {
      // make sure videos are paused by default in previews
      el.pause();
      el.muted = true;
      el.playsInline = true;
    }
  }, [source]);

  const handleMouseEnter = () => {
    const el = ref.current;
    if (el && el.tagName === "VIDEO") el.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (el && el.tagName === "VIDEO") {
      el.pause();
      try { el.currentTime = 0; } catch (e) {}
    }
  };

  if (!source) return null;

  const src = normalizeSrc(source);

  if (videoPattern.test(src)) {
    return (
      <video
        ref={ref}
        src={src}
        loop
        muted
        playsInline
        preload="metadata"
        aria-label={alt}
        title={alt}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
      />
    );
  }

  return <img src={src} alt={alt} loading="lazy" />;
};

// Structured grid card — real title, one index badge, a plain body with the
// tech-stack pills. Reveals on scroll via IntersectionObserver, using the
// `translate` property (not `transform`) so a reveal-in-progress card and a
// hovered card never fight over the same CSS property.
const GalleryCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const { t } = useLocale();

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (typeof window === "undefined" || !("IntersectionObserver" in window) || reduced) {
      el.classList.add("in-view");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const slug = slugify(project.titre || `project-${index + 1}`);
  const num = String(index + 1).padStart(2, "0");
  const isVideo = videoPattern.test(normalizeSrc(project.src) || "");

  return (
    <Link
      ref={cardRef}
      href={`/projects/${slug}`}
      className="card"
      style={{ transitionDelay: `${Math.min(index, 5) * 70}ms` }}
      aria-label={`Open project ${project.titre || slug}`}
    >
      <div className="card-media">
        <MediaPreview source={project.src} alt={project.titre} />
        {isVideo && (
          <span className="card-play" aria-hidden>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="12" cy="12" r="10" fill="rgba(21,24,29,0.45)" />
              <path d="M10 8.5v7l6-3.5-6-3.5z" fill="#fff" />
            </svg>
          </span>
        )}
        <span className="card-index">{num}</span>
      </div>
      <div className="card-body">
        <h3 className="card-title">{project.titre || "Untitled"}</h3>
        {project.stack && project.stack.length > 0 && (
          <div className="card-stack">
            {project.stack.filter(Boolean).map((s, i) => {
              const tag = String(s).trim();
              const label = tag === "Jeu" ? t("common.jeuTag") : tag;
              return <span key={`${tag}-${i}`}>{label}</span>;
            })}
          </div>
        )}
      </div>
    </Link>
  );
};

const AsymmetricalGallery = ({ limit } = {}) => {
  const images = Number.isInteger(limit) && limit > 0 ? data.slice(0, limit) : data;

  return (
    <section id="work" className="gallery-section">
      <div className="gallery">
        {images.map((project, idx) => (
          <GalleryCard project={project} index={idx} key={project.titre || idx} />
        ))}
      </div>
    </section>
  );
};

export default AsymmetricalGallery;
