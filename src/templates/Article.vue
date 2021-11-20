<template>
  <Layout>
    <!-- Page Header-->
    <header
      class="masthead"
      :style="{backgroundImage:`url('${ENV_API_URL+$page.article.cover.url}')`}"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="post-heading">
              <h1>{{$page.article.title}}</h1>
              <span class="meta">
                Posted by
                <g-link to="/">todo!!!!</g-link>
                <a href="#!">Start Bootstrap</a>
                {{$page.article.create_at}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Post Content-->
    <article class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7" v-html="content"></div>
        </div>
      </div>
    </article>
  </Layout>
</template>
<page-query>
query($id:ID!){
  article:strapiArticle(id:$id){
    id
    title
    body
    cover{
      url
    }
    created_at
  }
}
</page-query>
<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt({breaks:true,replaceLink:(link,env)=>{
  return process.env.GRIDSOME_API_URL+link
}}).use(require('markdown-it-replace-link'));
export default {
  name:"Article",
  computed:{
    content(){
      return md.render(this.$page.article.body)
    }
  }
};
</script>

<style>
</style>