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
          Do you have what's it take to promote us?
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
  allFaq (filter:  { displayInMarketing: { eq: true }}) {
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
      title: "Marketers",
      meta: [
        {
          name: "description",
          content: `Join the Ubuntu Touch marketing team`,
        },
        {
          property: "og:title",
          content: `Join the Ubuntu Touch marketing team`,
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
