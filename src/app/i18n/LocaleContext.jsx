'use client';
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { dictionary } from "./dictionary";

const LocaleContext = createContext({
  locale: "fr",
  setLocale: () => {},
  t: (key) => key,
});

const STORAGE_KEY = "locale";

export function LocaleProvider({ children }) {
  // Always start on "fr" so the very first client render matches the
  // server-rendered HTML exactly — the stored preference (if any) is
  // applied a moment later, after mount, instead of at initial render.
  // Reading localStorage synchronously here would make the client's first
  // render diverge from the server's and trigger a hydration mismatch.
  const [locale, setLocaleState] = useState("fr");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "fr" || stored === "en") setLocaleState(stored);
    } catch (e) {
      // localStorage unavailable (privacy mode, etc.) — just stay on fr.
    }
  }, []);

  // Keep <html lang="..."> honest for screen readers/browsers once we know
  // the real locale — this runs after mount, so it never disagrees with
  // the server-rendered "fr" during hydration.
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = useCallback((next) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      // ignore — preference just won't persist across visits
    }
  }, []);

  const t = useCallback(
    (path) => {
      const lookup = (dict) =>
        path.split(".").reduce((cur, part) => (cur == null ? undefined : cur[part]), dict);

      const value = lookup(dictionary[locale]);
      if (value !== undefined) return value;

      // Fall back to French for any key not yet translated, rather than
      // showing a raw dictionary key on screen.
      const fallback = lookup(dictionary.fr);
      return fallback !== undefined ? fallback : path;
    },
    [locale]
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}

// Pull the right string out of a { fr, en } field on a data.js entry.
// Falls through to plain strings/arrays unchanged, so fields that don't
// need translation (titles, links, image paths) can be used the same way.
export function localize(field, locale) {
  if (field && typeof field === "object" && !Array.isArray(field)) {
    return field[locale] ?? field.fr;
  }
  return field;
}
