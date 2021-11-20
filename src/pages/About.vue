<template>
  <Layout>
    <!-- Page Header-->
    <header
      class="masthead"
      style="background-image: url('assets/img/about-bg.jpg')"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="page-heading">
              <h1>About Me</h1>
              <span class="subheading">This is what I do.</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <main class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7" v-html="aboutUs"></div>
        </div>
      </div>
    </main>
  </Layout>
</template>
<static-query>
query{
  system:allStrapiSystem{
    edges{
      node{
        aboutus
      }
    }
  }
}
</static-query>
<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt({breaks:true,replaceLink:(link,env)=>{
  return process.env.GRIDSOME_API_URL+link
}}).use(require('markdown-it-replace-link'));
export default {
  metaInfo: {
    title: "About us",
  },
  computed:{
    aboutUs(){
      return md.render(this.$static.system.edges[0].node.aboutus)
    }
  }
};
</script>
