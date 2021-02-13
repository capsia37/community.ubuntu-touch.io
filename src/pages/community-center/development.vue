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
            Welcome to Ubuntu Touch OS development in the <span class="underline">nutshell</span>
          </h1>

          <h2 id="content-overview" class="h3">Overview</h2>
          <p>To easy on you, we originized all UT layers so you also know how its works from the inside. </p>


          <img class="layers" src="/img/development/layers.svg" alt="angle-icon">
          <br/><br/>
          <div class="row">
            <div class="boxed">
              <h2 class="h4">Porting Project</h2>
              <p>Featuring a slick and easy-to-use interface based on the design of its predecessor, Canonical's Unity desktop environment, lomiri is the new name of Unity8 and all its related projects. Additionally, the interface that developers use to call on these projects will change. However, developers will only need to update to the new API when they'd like to package their apps for other distributions.</p>
              <span>[<a href="#">Git</a>] | [<a href="http://docs.ubports.com/en/latest/porting/Intro.html">Docs</a>]</span>
            </div>

            <div class="boxed">
              <h2 class="h4">Core Development</h2>
              <p>Whatever your goals salfmslkf sldfk lkj afjasd;l gvnasldgvnasldgvnasldgvnasld gjnasdlkfgas ;lfdjjslkjaldmalmd almdlamd.ams.,m, we're here to helyoe you trying to learn a new skill or get better at something you already know how to
                do? Are you looking for something to add to your CV for volunteering and community engagement? Maybe you just really love the mobile platform and want to see it thrive. </p>
              [<a href="">Git</a>] | [<a href="">Git</a>]
            </div>

            <div class="boxed">
              <h2 class="h4">Core Apps</h2>
              <p> your measure of success. Are you trying to learn a new skill or get better at something you already know how to do? Are you looking for something to add to your CV for volunteering and community engagement? Maybe you just really
                love the mobile platform and want to see it thrive. </p>
              [Git] | [Docs]
            </div>


            <div class="boxed">
              <h2 class="h4">Halium Project</h2>
              <p>Whatever y Are you trying to learn a new skill or get better at something you already know how to do? Are you looking for something to add to your CV for volunteering and community engagement? Maybe you just really love the mobile
                platform and want to see it thrive. </p>
              [Git] | [Docs]
            </div>

            <div class="boxed">
              <h2 class="h4">Clickable-ut.dv</h2>
              <p>Whatever your goals are, we're here to help you be successful, no matter your measure of success. Are you trying to learn a new skill or get better at something you already know how to do? Are you looking for something to add to your
                CV for volunteering and community engagement? Maybe you just really love the mobile platform and want to see it thrive. </p>
              [Git] | [Docs]
            </div>

          </div>
          <br/><br/>
          <h2 id="content-core" class="h3">Core Development</h2>
          <p>
            Our mission is to make Ubuntu Touch available on as many devices as possible
          </p>

          <p>We create and maintain the behind-the-scenes components of Ubuntu Touch, taking care of all technical tasks and programming.</p>
          <p>Our main responsibility is to improve the working features of Ubuntu Touch, fixing bugs, releasing new features and of course the ongoing work in Convergence.</p>


          <h2 id="content-app" class="h3">App Development</h2>

          <h3 class="h4">What we do</h3>

          <p>We create Ubuntu Touch's core set of applications, and the tools and frameworks to allow people in the community to create apps for Ubuntu Touch.</p>

          <p>We also hold the relationship with external app store services.<p>

          <h3 class="h4">What we are working on</h3>

          <p>Our goal is to make Ubuntu Touch available for as many devices as possible. Building a flawlessly working Operating System, Porting Ubuntu Touch for as many devices as possible</p>



      <PageLinks
        :links="pageLinks"
      />
      </div>
      <Sidebar
        :anchors="sidebarAnchors"
      />
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
  allFaq (filter:  { displayInDevelopment: { eq: true }}) {
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
      title: "Development",
      meta: [
        {
          name: "description",
          content: `Join the Ubuntu Touch developers team`,
        },
        {
          property: "og:title",
          content: `Join the Ubuntu Touch developers team`,
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
  data: function () {
    return {
      pageLinks: {
        resources: [
          {
            text: "Introduction to Clickable - Miguel Menéndez Carrion",
            category: "Blog",
            target: "#",
          },
          {
            text: "Ubuntu Touch safety architecture",
            category: "Blog",
            target: "#",
          },
        ],
        media: [
          {
            text: "Florian Interview Episode #57",
            category: "Audiocast",
            target: "#",
          },
          {
            text: "Dalton Interview Episode #56",
            category: "Audiocast",
            target: "#",
          },
          {
            text: "Joan Ubucon Europ 19",
            category: "Youtube",
            target: "#",
          },
        ],
        people: [
          {
            name: "Dalton",
            target: "#",
          },
          {
            name: "Florian",
            target: "#",
          },
          {
            name: "Joan",
            target: "#",
          },
        ],
        discussions: [
          {
            groupIcon: "yumi",
            content: [
              {
                text: "Forum OS Selection",
                target: "#",
              },
              {
                text: "Forum Porting",
                target: "#",
              },
            ],
          },
          {
            groupIcon: "telegram",
            content: [
              {
                text: "Porting",
                target: "#",
              },
              {
                text: "Lomiri Dev",
                target: "#",
              },
              {
                text: "Core Dev",
                target: "#",
              },
              {
                text: "Halium project",
                target: "#",
              },
            ],
          },
          {
            groupIcon: "irc",
            content: [
              {
                text: "UBports core",
                target: "#",
              },
              {
                text: "UBports Core Apps",
                target: "#",
              },
            ],
          },
        ],
      },
      sidebarAnchors: [
        {
          text: "Overview",
          target: "#content-overview",
        },
        {
          text: "Core Development",
          target: "#content-core",
        },
        {
          text: "App Development",
          target: "#content-app",
        },
        {
          text: "Resources",
          target: "#content-resources",
        },
        {
          text: "Media",
          target: "#content-media",
        },
        {
          text: "People",
          target: "#content-people",
        },
        {
          text: "Discussions",
          target: "#content-discussions",
        },
        {
          text: "FAQ",
          target: "#faqs",
        },
      ],
    };
  },
};
</script>
