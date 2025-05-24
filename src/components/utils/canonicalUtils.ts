import { pathMap } from './path';

export function getHrefLangUrls(urlPathname: string, baseURL: URL) {
  let hrefLangDe = '';
  let hrefLangEn = '';
  let canonicalURL = '';
  let hrefLangDefault = '';

  const isBlogDe = urlPathname.startsWith('/blog/') && urlPathname.includes('_de');
  const isBlogEn = urlPathname.startsWith('/en/blog/') && urlPathname.includes('_en');

  if (isBlogEn) {
    const slugBase = urlPathname.split('/en/blog/')[1].replace('_en', '');
    hrefLangDe = new URL(`/blog/${slugBase}_de`, baseURL).toString();
    hrefLangEn = new URL(urlPathname, baseURL).toString();
    canonicalURL = hrefLangEn;
    hrefLangDefault = hrefLangDe;
  } else if (isBlogDe) {
    const slugBase = urlPathname.split('/blog/')[1].replace('_de', '');
    hrefLangEn = new URL(`/en/blog/${slugBase}_en`, baseURL).toString();
    hrefLangDe = new URL(urlPathname, baseURL).toString();
    canonicalURL = hrefLangDe;
    hrefLangDefault = hrefLangDe;
  } else {
    let basePath = urlPathname.replace(/^\/en/, '').replace(/^\/de/, '').replace(/\/$/, '');

    const dePath = urlPathname.startsWith('/en') ? pathMap[urlPathname] ?? basePath : basePath;
    const enPath = urlPathname.startsWith('/en') ? basePath : pathMap[basePath] ?? `/en${basePath}`;

    canonicalURL = urlPathname.startsWith('/en')
      ? new URL(enPath, baseURL).toString()
      : new URL(dePath, baseURL).toString();

    hrefLangDe = new URL(dePath, baseURL).toString();
    hrefLangEn = new URL(enPath, baseURL).toString();
    hrefLangDefault = hrefLangDe;
  }

  return { hrefLangDe, hrefLangEn, canonicalURL, hrefLangDefault };
}