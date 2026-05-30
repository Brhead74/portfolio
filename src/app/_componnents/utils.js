export const videoPattern = /\.(mp4|webm|ogg)(\?.*)?$/i;

export const normalizeSrc = (src) => {
  if (!src) return '';
  if (typeof src !== 'string') return '';
  if (src.startsWith('http') || src.startsWith('/') || src.startsWith('data:')) return src;
  return `/${src}`;
};

export const slugify = (text = '') =>
  text
    .toString()
    .toLowerCase()
    .normalize('NFKD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
