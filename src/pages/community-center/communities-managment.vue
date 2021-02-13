<template>
  <Layout>
  <div>

  <Breadcrumb
    :page-path="$route.path"
  />

  <!-- Hero -->
  <div id="overview" class="page-hero">
    <picture>
      <source media="(min-width:768px)" srcset="/img/page/hero.jpg">
      <img src="/img/page/hero-mobile.jpg" alt="hero-img">
    </picture>
  </div>

  <!-- Page Content -->
  <div class="page-content page-content--sidebar">
    <div class="container">
      <!-- Content -->
      <div class="content">
        <h1 class="h2">
          We support communities all over the word 
       </h1>
        <p>Here you going to have the your full toolbox to engage with our community, channels, ethics, code of conduct, and many more. This page is constantly update, visit ofter.</p>
        <p>Firstly, we strongly recommend that you a registered a user name for your Telegram account. This will help you be able to chat with people privately and be invited to special focus groups and generally improve your experience in the community. </p>
        <p>These settings can be found in your main Telegram > settings. You have  been invited to this page by a member of the UBports welcoming team, lightly nicknamed the UBports First Responders. </p>
        <br/>

        <h3 class="h3">Telegram is our main communication channel</h3>

        <p><strong>Direct Message (DM)?</strong> If this is too much, you are also welcome to simply send a Private Message (PM) to the person who sent you this link and they may be able to help you one on one if they are available. UBports is a great community of users and developers. Please let us know if you need further assistance and we will do what we can. Thanks! UBports First Responder Team (UBFR)</p>

        <p> <strong>General groups</strong> (telegram) Most of our  communication stream happening on telegram on private or public groups, down below you'll fine all *known* channels. If new channel is opened by you or someone you know, please let us know, so we be able to document and channel volunteers to that group.</p>

        <p><strong>Newcomers Room</strong> - On top of the above starting points, we also invite you to join our "Newcomers Room' where all of the friendly UBports Welcoming Team are ready to help. You can exit this room at any point. You might have a few questions that you want to ask but don't want to speak in front of so many people. That's exactly what the newcomers room is for. As soon as you are rolling, just exit the room. To join the room all you have to do is click this invite link on Telegram.</p>




<!--
        <div class="d-flex align-items-start mb-4">
          <img src="/img/page/icon-1.svg" alt="icon" class="mr-4" style="width: 30px">
          <div>
            <h3 class="h4">Ubuntu Philosophy</h3>
            <p>Whatever your goals are, we're here to help you be successful, no matter your measure of success. Are you
              trying to learn a new skill or get better at something you already know how to do? Are you looking for
              something to add to your CV for volunteering and community engagement? Maybe you just really love the
              mobile platform and want to see it thrive. </p>
          </div>
        </div>
        <div class="d-flex align-items-start mb-4">
          <img src="/img/page/icon-2.svg" alt="icon" class="mr-4" style="width: 30px">
          <div>
            <h3 class="h4">Code of conduct</h3>
            <p>Whatever your goals are, we're here to help you be successful, no matter your measure of success. Are you
              trying to learn a new skill or get better at something you already know how to do? Are you looking for
              something to add to your CV for volunteering and community engagement? Maybe you just really love the
              mobile platform and want to see it thrive. </p>
          </div>
        </div>
        <div class="d-flex align-items-start mb-4">
          <img src="/img/page/icon-3.svg" alt="icon" class="mr-4" style="width: 30px">
          <div>
            <h3 class="h4">We are an Agile team</h3>
            <p>Whatever your goals are, we're here to help you be successful, no matter your measure of success. Are you
              trying to learn a new skill or get better at something you already know how to do? Are you looking for
              something to add to your CV for volunteering and community engagement? Maybe you just really love the
              mobile platform and want to see it thrive. </p>
          </div>
        </div>
        <div class="d-flex align-items-start">
          <img src="/img/page/icon-1.svg" alt="icon" class="mr-4" style="width: 30px">
          <div>
            <h3 class="h4">Recognition</h3>
            <p>Whatever your goals are, we're here to help you be successful, no matter your measure of success. Are you
              trying to learn a new skill or get better at something you already know how to do? Are you looking for
              something to add to your CV for volunteering and community engagement? Maybe you just really love the
              mobile platform and want to see it thrive. </p>
          </div>
        </div>

        -->

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
  allFaq (filter:  { displayInCommunities: { eq: true }}) {
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
      title: "Communities management",
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
    Sidebar,
    Faq,
    PageLinks,
  },
};
</script>
