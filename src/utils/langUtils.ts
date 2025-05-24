const pathMap: Record<string, string> = {
  '/ki-kurse': '/en/ai-courses',
  '/en/ai-courses': '/ki-kurse',
  '/ki-kurse/ai-appetizers': '/en/ai-courses/ai-appetizers',
  '/en/ai-courses/ai-appetizers': '/ki-kurse/ai-appetizers',
  '/ki-kurse/prompt-engineering': '/en/ai-courses/prompt-engineering',
  '/en/ai-courses/prompt-engineering': '/ki-kurse/prompt-engineering',
  '/ki-kurse/music-generation': '/en/ai-courses/music-generation',
  '/en/ai-courses/music-generation': '/ki-kurse/music-generation',
};

export function getSwitchLangPath(pathname: string): string {
  if (pathname.startsWith('/en/blog/') && pathname.includes('_en')) {
    const slugBase = pathname.split('/en/blog/')[1].replace('_en', '');
    return `/blog/${slugBase}_de`;
  } else if (pathname.startsWith('/blog/') && pathname.includes('_de')) {
    const slugBase = pathname.split('/blog/')[1].replace('_de', '');
    return `/en/blog/${slugBase}_en`;
  }

  const cleanPath = pathname.replace(/\/$/, '');
  return pathMap[cleanPath] ?? (
    pathname.startsWith('/en') ? cleanPath.replace(/^\/en/, '') || '/' : '/en' + cleanPath
  );
} 