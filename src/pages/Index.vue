<template>
	<Layout>
		<div class="container">
			<div class="hero">
				<h1 class="hero-title">Simplicity. Aesthetics. Value.</h1>
				<h2
					class="hero-subtitle"
				>Hi there, I'm an independent Digital Designer &amp; Art Director focused on digital design for brands that like to have fun.</h2>
			</div>
			<article-list></article-list>
		</div>
		<journal-list></journal-list>
	</Layout>
</template>

<script>
import ArticleList from '@/components/ArticleList.vue';
import JournalList from '../components/JournalList.vue';
export default {
    components: {
        ArticleList,
        JournalList
    },
	metaInfo: {
		title: "GridSome",
	},
};
</script>