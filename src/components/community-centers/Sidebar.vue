<template>
  <!-- Sidebar -->
  <div class="sidebar">
    <a v-b-toggle.sidebarCollapse class="sidebar-toggler h3 light d-lg-none" data-toggle="collapse" role="button"
      aria-expanded="false" aria-controls="sidebarCollapse">
      Jump Section <img src="/img/icons/angle-icon-gradient.svg" alt="angle-icon" class="angle-icon-gradient">
    </a>
    <b-collapse id="sidebarCollapse" class="collapse">
      <!-- Banner -->

      <div class="sidebar-banner">
        <p class="bold">Hub Center Can help to decide where you belong in our community</p>
        <a href="/community/community-center/"><button class="btn btn-secondary btn-block rounded-0">Go To Community Center!</button></a>
      </div>
      <!-- Navigation -->
      <div v-if="anchors.length" class="sidebar-navigation">
        <h3 class="h3 light">Navigation</h3>
        <b-nav id="sidebarNavigation" v-b-scrollspy>
          <b-nav-item
            v-for="(heading, index) in anchors"
            :key="index"
            :href="heading.target"
          >{{ heading.text }}
          </b-nav-item>
        </b-nav>
      </div>
    </b-collapse>
  </div>
</template>

<script>
import {
  BNav,
  BNavItem,
  BCollapse,
  VBToggle,
  VBScrollspy,
} from "bootstrap-vue";

export default {
  name: "Sidebar",
  components: {
    BNav,
    BNavItem,
    BCollapse,
  },
  directives: {
    "b-toggle": VBToggle,
    "b-scrollspy": VBScrollspy,
  },
  props: {
    anchors: {
      default: function () {
        return [];
      },
      type: Array,
    },
  },
};
</script>
