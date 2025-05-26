import { pathMap } from './path';

export function getSwitchLangPath(pathname: string): string {
  const isEnglish = pathname.startsWith('/en');

  // Englischer Blogbeitrag z. B. /en/blog/luma-reframing-2025-04-12_en
  if (pathname.startsWith('/en/blog/') && pathname.endsWith('_en')) {
    const slug = pathname.replace('/en/blog/', '');
    const slugBase = slug.replace(/_en$/, '');
    return `/blog/${slugBase}_de`;

  // Deutscher Blogbeitrag z. B. /blog/luma-reframing-2025-04-12_de
  } else if (pathname.startsWith('/blog/') && pathname.endsWith('_de')) {
    const slug = pathname.replace('/blog/', '');
    const slugBase = slug.replace(/_de$/, '');
    return `/en/blog/${slugBase}_en`;

  // Alle anderen Seiten – Navigation mit pathMap oder Umkehrlogik
  } else {
    const cleanPath = pathname.replace(/\/$/, '');
    return pathMap[cleanPath] ?? (
      isEnglish ? cleanPath.replace(/^\/en/, '') || '/' : '/en' + cleanPath
    );
  }
}