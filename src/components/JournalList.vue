<template>
	<div>
		<div class="latest-journals-heading container">
			<span class="label">Latest and greatest</span>
		</div>
		<div class="latest-journals">
			<div class="container">
				<g-link :to="`/journal/${journal.node.id}`" class="journal" v-for="journal in $static.journal.edges" :key="journal.node.id">
					<h3 class="journal-title">{{journal.node.title}}</h3>
				</g-link>
			</div>
		</div>
	</div>
</template>
<static-query>
query{
    journal: allStrapiArticle(filter: { is_Journal: { eq: true } }) {
        edges {
            node {
                id
                title
            }
        }
    }
}
</static-query>

<script>
export default {};
</script>
<style scoped>
.latest-journals-heading {
	margin-top: 6rem;
	margin-bottom: 1rem;
	font-size: 0.6rem;
	font-weight: 400;
	text-transform: uppercase;
}
.latest-journals {
	max-width: 100%;
	margin: 0 2rem;
	border: 1px solid var(--color-base-1);
}
.latest-journals > .container {
	display: flex;
	flex-wrap: wrap;
}
.journal {
	flex: 0 0 100%;
	display: block;
	padding: 2rem;
	transition: background 0.25s ease;
	text-decoration: none;
	border-bottom: 1px solid var(--color-base-1);
}
.journal:last-of-type {
	border-bottom: 0;
}
.journal:hover {
	background: var(--color-base-1);
}
.journal-title {
	font-size: 1rem;
	line-height: 1.35;
}
@media (min-width: 580px) {
	.journal {
		flex: 0 0 50%;
	}
	.journal:first-child {
		border-right: 1px solid var(--color-base-1);
	}
	.journal:first-child,
	.journal:nth-child(2) {
		border-bottom: 1px solid var(--color-base-1);
	}
	.journal:nth-child(3) {
		border-right: 1px solid var(--color-base-1);
		border-bottom: 0;
	}
}
@media (min-width: 920px) {
	.journal {
		flex: 0 0 25%;
	}
	.journal:first-child,
	.journal:nth-child(2),
	.journal:nth-child(3) {
		border: 0;
		border-right: 1px solid var(--color-base-1);
	}
	.latest-journals {
		margin: 0;
		border-left: 0;
		border-right: 0;
		border-top: 1px solid var(--color-base-1);
		border-bottom: 1px solid var(--color-base-1);
	}
}
</style>