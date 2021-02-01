<template>
	<Layout>
		<div class="journal">
			<div class="container journal-container">
				<div class="journal-header">
					<h1 class="journal-title">{{journal.title}}</h1>
					<div class="journal-meta">
						<div class="journal-author">
							<span class="label">Author</span>
							<span class="author-name" v-if="journal.author">{{journal.author.username}}</span>
						</div>
						<div class="journal-date">
							<span class="label">Date</span>
							<div>{{journal.created_at}}</div>
						</div>
						<div class="journal-time">
							<span class="label">Time</span>
							<span>{{journal.readTime}} read</span>
						</div>
					</div>
				</div>
				<div class="journal-content" v-html="mdToHtml(journal.content)"></div>
			</div>
		</div>
	</Layout>
</template>

<page-query>
query($id: ID!){
  strapiArticle(id: $id){
    id
    title
    content
    created_at
    readTime
    author{
      username
    }
  }
}
</page-query>

<script>
export default {
    metaInfo() {
		return {
            title: this.journal.title,
        }
	},
	computed: {
		journal() {
			return this.$page.strapiArticle;
		},
	},
};
</script>
<style scoped>
.journal-container {
	max-width: 840px;
}
.journal-header {
	padding: 2rem 0 4rem;
}
.journal-title {
	font-size: 4rem;
	margin: 0 0 4rem;
	padding: 0;
}
.journal-meta {
	display: flex;
	flex-wrap: wrap;
	font-size: 0.8rem;
}
.journal-meta > div {
	margin-right: 4rem;
}
.journal-meta > div:last-of-type {
	margin: 0;
}
</style>