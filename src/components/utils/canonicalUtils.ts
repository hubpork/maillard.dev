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
    const isEnglish = urlPathname.startsWith('/en');

    const dePath = isEnglish
      ? pathMap[urlPathname] ?? urlPathname.replace(/^\/en/, '')
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
