<template>
  <Layout>

    <Breadcrumb
      v-if="!$page.currentPage.hideBreadcrumb"
      :page-path="$route.path"
    />

    <!-- Hero -->
    <div v-if="$page.currentPage.showHeaderImage" id="overview" class="page-hero">
      <picture>
        <source media="(min-width:768px)" srcset="/img/page/hero.jpg">
        <img src="/img/page/hero-mobile.jpg" alt="hero-img">
      </picture>
    </div>

    <!-- Community Centers -->
    <div v-if="$page.currentPage.layout == 'categories'" class="community-centers">
      <div class="container">
        <!-- Header -->
        <div class="community-centers__header">
          <h1 class="h1">{{ $page.currentPage.title }}</h1>
          <h2 class="h4">{{ $page.currentPage.excerpt }}</h2>
          <p>{{ $page.currentPage.details }}</p>
        </div>
        <!-- Body -->
        <div class="community-centers__body ">
          <!-- Center -->
          <a v-for="(article, index) in $page.related.edges.map(n => n.node)" :key="index" :href="article.path" class="center">
            <img :src="article.icon" alt="community-center-icon">
            <h2 class="h4">{{ article.title }}</h2>
            <p>{{ article.excerpt }}</p>
          </a>
        </div>
      </div>
    </div>

    <!-- Page Content -->
    <div class="page-content" :class="{ 'page-content--sidebar': !$page.currentPage.hideSidebar }">
      <div class="container">
        <div class="content">
          <div v-html="$page.currentPage.content"/>
          <div v-if="$page.currentPage.layout == 'article'" class="row">
            <div v-for="(article, index) in $page.related.edges.map(n => n.node)" :key="index" class="boxed">
                <h2 class="h4">{{ article.title }}</h2>
                <p>{{ article.excerpt }}</p>
              <a :href="article.path">⟶ Find out more...</a>
            </div>
          </div>
          <p><a class="btn btn-secondary btn-block rounded-0 d-inline" @click="newSubproject">Add a new subproject</a></p>
          <PageLinks
            v-if="$page.currentPage.externalLinks"
            :links="$page.currentPage.externalLinks"
          />
          <p><a class="btn btn-secondary btn-block rounded-0 d-inline" :href="'/admin/#/collections/pages/entries/'+$page.currentPage.fileInfo.path.split('.')[0]">Edit this page</a></p>
        </div>
        <Sidebar
          v-if="!$page.currentPage.hideSidebar"
          :anchors="$page.currentPage.onThisPage || []"
        />
      </div>
    </div>

    <Faq
      v-if="$page.currentPage.faq.length"
      :faq-content="$page.currentPage.faq"
    />

  </Layout>
</template>

<page-query>
query ($id: ID!, $category: String) {
  currentPage: pages(id: $id) {
    title excerpt details
    layout category
    hideBreadcrumb hideSidebar showHeaderImage
    content
    externalLinks {
      resources { text category target }
      media { text category target }
      people { name target }
      join { text icon target }
    }
    onThisPage { text target }
    faq { question content }
    fileInfo { path }
  }
  related: allPages(filter: { subcategory: { eq: $category }}) {
    edges {
      node {
        title
        layout
        icon
        excerpt
        path
      }
    }
  }
}
</page-query>

<script>
import Breadcrumb from "~/components/global/Breadcrumb.vue";
import Faq from "~/components/community-centers/Faq.vue";
import Sidebar from "~/components/community-centers/Sidebar.vue";
import PageLinks from "~/components/community-centers/PageLinks.vue";

export default {
  components: {
    Breadcrumb,
    Sidebar,
    Faq,
    PageLinks,
  },
  methods: {
    newSubproject() {
      console.log("Adding...");
      let pageName = prompt(
          "Enter page name, it should be lowercase and dash separated",
          "new-page"
        ),
        currentPath = this.$page.currentPage.fileInfo.path.split(".")[0],
        targetPath = currentPath.endsWith("index")
          ? currentPath.slice(0, -6)
          : currentPath;

      if (pageName) {
        window.location.href =
          "/admin/#/collections/pages/entries/" + targetPath + "/" + pageName;
      }
    },
  },
};
</script>
