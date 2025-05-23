import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '@/consts';

export async function get(context) {
	const posts = await getCollection('blog');
	const dePosts = posts.filter(post => post.data.lang === 'de');

	return rss({
		title: `${SITE_TITLE} (DE)`,
		description: `${SITE_DESCRIPTION} - Deutscher Feed`,
		site: context.site,
		items: dePosts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}
