<template>
	<Layout>
		<div class="project">
			<div class="container">
				<div class="project-header">
					<h1 class="project-title">{{article.title}}</h1>
					<div class="project-info">
						<div class="categories-container">
							<div class="categories">
								<span class="label">Categories</span>
								<span class="category"
                                    v-for="tag in article.tags"
                                    :key="tag.id"
                                >{{tag.title}}</span>
							</div>
						</div>
						<div class="year-container">
							<span class="label">Time</span>
							<div>{{article.created_at}}</div>
						</div>
					</div>
				</div>
				<div class="content" v-html="mdToHtml(article.content)"></div>
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
    tags{
      title
      id
    }
  }
}
</page-query>

<script>
export default {
    metaInfo() {
		return {
            title: this.article.title,
        }
	},
	computed: {
		article() {
			return this.$page.strapiArticle;
		},
	},
};
</script>
<style scoped>
.project-header {
	padding: 20vh 0 4rem;
}
.project-title {
	font-size: 4rem;
	margin: 0 0 4rem;
	padding: 0;
}
.project-info {
	display: flex;
	flex-wrap: wrap;
	font-size: 0.8rem;
}
.project-info > div {
	margin-right: 4rem;
}
.project-info > div:last-of-type {
	margin: 0;
}
.category:after {
	content: ", ";
}
.category:last-of-type:after {
	content: "";
}
p {
	line-height: 1.5;
	font-size: 1.15rem;
}
h2 {
	font-size: 2rem;
}
h3 {
	font-size: 1.5rem;
}
h4,
h5,
h6 {
	font-size: 1.15rem;
}
</style>