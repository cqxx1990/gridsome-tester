<template>
  <Layout>
    <!-- Page Header-->
    <header
      class="masthead"
      :style="{backgroundImage:`url('${ENV_API_URL+system.homeBg.url}')`}"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>{{system.siteName}}</h1>
              <span class="subheading">{{system.brief}}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <template v-for="article in $page.articles.edges">
          <!-- Post preview-->
          <div class="post-preview" :key="article.node.id">
            <g-link :to="article.node.path">
              <h2 class="post-title">
                {{article.node.title}}
              </h2>
            </g-link>
            <p class="post-meta">
              Posted by
              <a href="#!">Start Bootstrap</a>
              {{article.node.create_at}}
            </p>
          </div>
          <!-- Divider-->
          <hr class="my-4" :key="'hr-'+article.node.id" />
          </template>
          <!-- Pager-->
          <Pager :info="$page.articles.pageInfo"/>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query($page: Int) {
  articles:allStrapiArticle(perPage:5,page:$page) @paginate{
    pageInfo{
      totalPages
      currentPage
    }
    edges{
      node{
        id
        title
        path
        created_at
      }
    }
  }
  system:allStrapiSystem{
    edges{
      node{
        siteName
        brief
        homeBg{
          url
        }
      }
    }
  }
}
</page-query>
<script>
import {Pager} from 'gridsome'
export default {
  name:"Index",
  components:{ Pager },
  metaInfo: {
    title: "Hello, world!",
  },
  computed:{
    system(){
      return this.$page.system.edges[0].node
    }
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
