<template>
	<Layout>
		<div class="container">
			<div class="journal-hero">
				<h1 class="journal-header">a wise person once said...</h1>
			</div>
		</div>
		<g-link
			:to="`/journal/${journal.node.id}`"
			class="journal-post"
			v-for="journal in $page.journal.edges"
			:key="journal.node.id"
		>
			<div class="container journal">
				<h2 class="journal-title">{{journal.node.title}}</h2>
				<p class="journal-excerpt">{{journal.node.subTitle}}</p>
			</div>
		</g-link>
	</Layout>
</template>

<page-query>
query{
    journal: allStrapiArticle(filter: { is_Journal: { eq: true } }) {
        edges {
            node {
                id
                title
                subTitle
            }
        }
  }
}
</page-query>

<script>
export default {
    metaInfo: {
		title: "Journals",
	},
};
</script>
<style scoped>
.container.journal {
	max-width: 720px;
}
.journal-hero {
	padding: 4rem 0;
	text-align: center;
	color: var(--color-base-1);
}
.journal-header {
	font-size: 3rem;
	font-weight: 700;
	padding: 0;
	margin: 0;
}
.journal-post {
	display: block;
	padding: 2rem 0;
	text-decoration: none;
	transition: background 0.5s ease;
}
.journal-post > div{
	transition: transform 0.5s ease;
}
.journal-post:hover {
	background-color: var(--color-base-1);
}
.journal-post:hover > div{
	transform: translateX(4rem);
}
.journal-post h1,
.journal-post h2 {
	margin: 0;
	padding: 0;
}
.journal-title {
	font-size: 2rem;
	color: var(--color-contrast);
}
.journal-excerpt {
	color: var(--color-contrast-1);
}
@media (min-width: 560px) {
	.journal-post {
		padding: 3rem 0;
	}
}
@media (min-width: 860px) {
	.journal-post {
		padding: 5rem 0;
	}
}
</style>