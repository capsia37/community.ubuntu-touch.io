<template>
  <div :class="{ backdrop: appBackdrop }" @click="closeNavbar">
    <Header />

    <slot />

    <Footer />
  </div>
</template>

<script>
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";

export default {
  metaInfo: {
    meta: [
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:creator",
        content: "@ubports",
      },
    ],
  },
  components: {
    Header,
    Footer,
  },
  data: function () {
    return {
      appBackdrop: false,
      headerOpenedSection: "",
    };
  },
  mounted() {
    this.$root.$on("bv::collapse::state", (collapseId, isShown) => {
      if (
        collapseId == "getUbuntuTouchCollapse" ||
        collapseId == "getUbuntuTouchDesktopCollapse" ||
        collapseId == "contributorsCollapse" ||
        collapseId == "communityCollapse" ||
        collapseId == "aboutUsCollapse" ||
        collapseId == "headerNav"
      ) {
        this.appBackdrop =
          this.headerOpenedSection == collapseId ||
          this.headerOpenedSection == ""
            ? isShown
            : true;
        this.headerOpenedSection = isShown
          ? this.headerOpenedSection == "headerNav"
            ? "headerNav"
            : collapseId
          : this.headerOpenedSection == collapseId
          ? ""
          : this.headerOpenedSection;
      }
    });
  },
  methods: {
    closeNavbar(e) {
      if (!e.target.closest(".header")) {
        this.$root.$emit("bv::toggle::collapse", this.headerOpenedSection);
      }
    },
  },
};
</script>
