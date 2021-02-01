<template>
	<div class="projects">
		<div class="project" v-for="article in $static.article.edges" :key="article.node.id">
			<g-link :to="`/article/${article.node.id}`" class="project-link">
				<img
					alt="Banana"
					:src="GRIDSOME_API_URL + article.node.cover.url"
					width="2560"
					class="thumbnail"
				/>
				<h3 class="project-title">{{article.node.title}}</h3>
				<div class="categories">
					<span class="category" v-for="tag in article.node.tags" :key="tag.id">{{tag.title}}</span>
				</div>
			</g-link>
		</div>
	</div>
</template>

<static-query>
query {
  article: allStrapiArticle(filter: { is_Journal: { eq: false } }) {
    edges {
      node {
        id
        title
        cover {
          url
        }
        tags {
          id
          title
        }
      }
    }
  }
}
</static-query>

<script>
export default {
    
};
</script>
<style scoped>
.projects {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 4rem;
}
.project {
	grid-column: auto/span 2;
	text-align: center;
}
.project-link {
	text-decoration: none;
}
.thumbnail {
	height: 560px;
	-o-object-fit: cover;
	object-fit: cover;
	transition: all 0.15s ease;
	box-shadow: 0 0 40px -20px rgba(0, 0, 0, 0.25);
}
.project-title {
	font-size: 1rem;
	color: var(--color-contrast);
	margin: 2rem 0 1rem;
}
.categories {
	font-size: 0.8rem;
	color: var(--color-contrast-1);
}
.category {
	margin-right: 0.8rem;
}
.category:last-of-type {
	margin: 0;
}
.project:hover .thumbnail {
	transform: scale(1.02);
	box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.25);
}
@media (min-width: 920px) {
	.project {
		grid-column: auto/span 1;
	}
	.project:nth-child(3n + 1) {
		grid-column: auto/span 2;
	}
}
</style>