import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '@/consts';

export async function get(context) {
	const posts = await getCollection('blog');
	const enPosts = posts.filter(post => post.data.lang === 'en');

	return rss({
		title: `${SITE_TITLE} (EN)`,
		description: `${SITE_DESCRIPTION} - English feed`,
		site: context.site,
		items: enPosts.map((post) => ({
			...post.data,
			link: `/en/blog/${post.slug}/`, // oder nur `/blog/` je nach Routing
		})),
	});
}
