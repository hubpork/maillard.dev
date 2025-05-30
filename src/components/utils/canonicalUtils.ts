import { pathMap } from './path';

export function getHrefLangUrls(urlPathname: string, baseURL: URL) {
  let hrefLangDe = '';
  let hrefLangEn = '';
  let canonicalURL = '';
  let hrefLangDefault = '';

  const isBlogDe = urlPathname.startsWith('/blog/') && urlPathname.endsWith('_de');
  const isBlogEn = urlPathname.startsWith('/en/blog/') && urlPathname.endsWith('_en');

  if (isBlogEn) {
    // Slug extrahieren und _en am Ende entfernen
    const slug = urlPathname.replace('/en/blog/', '');
    const slugBase = slug.replace(/_en$/, '');
    hrefLangDe = new URL(`/blog/${slugBase}_de`, baseURL).toString();
    hrefLangEn = new URL(urlPathname, baseURL).toString();
    canonicalURL = hrefLangEn;       // Canonical auf EN setzen
    hrefLangDefault = hrefLangDe;   // Default auf DE
  } else if (isBlogDe) {
    // Slug extrahieren und _de am Ende entfernen
    const slug = urlPathname.replace('/blog/', '');
    const slugBase = slug.replace(/_de$/, '');
    hrefLangEn = new URL(`/en/blog/${slugBase}_en`, baseURL).toString();
    hrefLangDe = new URL(urlPathname, baseURL).toString();
    canonicalURL = hrefLangDe;       // Canonical auf DE setzen
    hrefLangDefault = hrefLangDe;   // Default auf DE
  } else {
    const isEnglish = urlPathname.startsWith('/en');

    const dePath = isEnglish
      ? pathMap[urlPathname] ?? (urlPathname.replace(/^\/en/, '') || '/')
      : urlPathname;

    const enPath = isEnglish
      ? urlPathname
      : pathMap[urlPathname] ?? `/en${urlPathname}`;

    canonicalURL = new URL(urlPathname, baseURL).toString();
    hrefLangDe = new URL(dePath, baseURL).toString();
    hrefLangEn = new URL(enPath, baseURL).toString();
    hrefLangDefault = hrefLangDe;
  }

  return { hrefLangDe, hrefLangEn, canonicalURL, hrefLangDefault };
}