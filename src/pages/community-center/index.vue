<template>
  <Layout>
  <div>

  <Breadcrumb
    :page-path="$route.path"
  />

  <!-- Community Centers -->
  <div class="community-centers">
    <div class="container">
      <!-- Header -->
      <div class="community-centers__header">
        <h1 class="h1"> Choo, Choo! all aboard... </h1>
        <h2 class="h4">We want you to join us to make difference, and leave your mark on the Ubuntu Touch operating system. </h2>
        <p>We have a set of topics that you may be interested in. Click on one to read more about that subject. Learn how to get started. What people you can contact if you have questions. See links to more information. </p>
      </div>
      <!-- Body -->
      <div class="community-centers__body ">
        <!-- Center -->
        <a href="/community/community-center/development/" class="center">
          <img src="/img/community-center/developers.jpg" alt="community-center-icon">
          <h2 class="h4">Development</h2>
          <p>Help us build the Core product, Develop Ports, Loomri and many more projects</p>
        </a>
        <!-- Center -->
        <a href="/community/community-center/design/" class="center">
          <img src="/img/community-center/designers.jpg" alt="community-center-icon">
          <h2 class="h4">Any Designers</h2>
          <p>Marketing and UI/UX Designers</p>
        </a>
        <!-- Center -->
        <a href="/community/community-center/testers-writers/" class="center">
          <img src="/img/community-center/testers-and-writers.jpg" alt="community-center-icon">
          <h2 class="h4">Testers and Writers</h2>
          <p>Help to improve Apps and Core</p>
        </a>
        <!-- Center -->
        <a href="/community/community-center/marketers/" class="center">
          <img src="/img/community-center/marketers.jpg" alt="community-center-icon">
          <h2 class="h4">Marketers</h2>
          <p>Podcasts, Youtubers and Social Media</p>
        </a>
        <!-- Center -->
        <a href="/community/community-center/communities-managment" class="center">
          <img src="/img/community-center/communities.jpg" alt="community-center-icon">
          <h2 class="h4">Communities</h2>
          <p>Managers and regions</p>
        </a>
      </div>
    </div>
  </div>

  </div>
  </Layout>
</template>

<script>
import Breadcrumb from "~/components/global/Breadcrumb.vue";

export default {
  metaInfo() {
    return {
      title: "Community center",
      meta: [
        {
          name: "description",
          content: `Help Ubuntu Touch grow`,
        },
        {
          property: "og:title",
          content: `Help Ubuntu Touch grow`,
        },
      ],
    };
  },
  components: {
    Breadcrumb,
  },
};
</script>
