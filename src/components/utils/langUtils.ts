import { pathMap } from './path';

export function getSwitchLangPath(pathname: string): string {
  const isEnglish = pathname.startsWith('/en');

  if (pathname.startsWith('/en/blog/') && pathname.includes('_en')) {
    const slugBase = pathname.split('/en/blog/')[1].replace('_en', '');
    return `/blog/${slugBase}_de`;
  } else if (pathname.startsWith('/blog/') && pathname.includes('_de')) {
    const slugBase = pathname.split('/blog/')[1].replace('_de', '');
    return `/en/blog/${slugBase}_en`;
  } else {
    const cleanPath = pathname.replace(/\/$/, '');
    return pathMap[cleanPath] ?? (
      isEnglish ? cleanPath.replace(/^\/en/, '') || '/' : '/en' + cleanPath
    );
  }
}