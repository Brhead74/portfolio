import React from 'react';
import './Breadcrumb.css';

const Breadcrumb = ({ items = [] }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav className="breadcrumb" aria-label="Fil d'ariane">
      <ol className="breadcrumb-list">
        {items.map((it, idx) => (
          <li key={idx} className={`breadcrumb-item ${idx === items.length - 1 ? 'breadcrumb-current' : ''}`}>
            {idx === items.length - 1 ? (
              <span aria-current="page">{it.label}</span>
            ) : (
              <a href={it.href || '#'}>{it.label}</a>
            )}
            {idx < items.length - 1 && (
              <span className="breadcrumb-sep" aria-hidden>
                ›
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
