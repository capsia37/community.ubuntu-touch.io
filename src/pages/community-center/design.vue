<template>
  <Layout>
  <div>

  <Breadcrumb
    :page-path="$route.path"
  />

  <!-- Page Content -->
  <div class="page-content page-content--sidebar">
    <div class="container">
      <!-- Content -->
      <div class="content">
        <h1 class="h2">
          We need all kind of designers
       </h1>
       <p>
          It's doesn't matter if you are coming from Linux, Mac or Windows environment, proficient Adobe Suit or Inscape. What is the most important you will make the best our of you skills set in the following areas:
       </p>



          <h2 class="h3">Design for OS</h2>
          <p>It's doesn't matter if you are coming from Linux, Mac or Windows environment, proficient Adobe Suit or Inscape. What is the most important you will make the best our of you skills set in the following areas:</p>

          <h3 class="h4">Design UT Apps with QT</h3>
          <p>It's doesn't matter if you are coming from Linux, Mac or Windows environment, proficient Adobe Suit or Inscape. What is the most important you will make the best our of you skills set in the following areas:</p>

          <h2 class="h3">Design for Marketing</h2>
          <p>It's doesn't matter if you are coming from Linux, Mac or Windows environment, proficient Adobe Suit or Inscape. What is the most important you will make the best our of you skills set in the following areas:</p>
          <p>It's doesn't matter if you are coming from Linux, Mac or Windows environment, proficient Adobe Suit or Inscape. What is the most important you will make the best our of you skills set in the following areas:</p>



      <PageLinks/>
      </div>
      <Sidebar/>
    </div>
  </div>

  <Faq
    :faq-content="this.$page.allFaq.edges.map((n) => n.node)"
  />

  </div>
  </Layout>
</template>

<page-query>
query {
  allFaq (filter:  { displayInDesign: { eq: true }}) {
    edges {
      node {
        question
        content
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
  metaInfo() {
    return {
      title: "Design",
      meta: [
        {
          name: "description",
          content: `Join the Ubuntu Touch design team`,
        },
        {
          property: "og:title",
          content: `Join the Ubuntu Touch design team`,
        },
      ],
    };
  },
  components: {
    Breadcrumb,
    Sidebar,
    Faq,
    PageLinks,
  },
};
</script>
