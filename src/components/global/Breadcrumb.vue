<template>
  <!-- Breadcrumbs -->
  <div class="breadcrumbs breadcrumbs--bordered">
    <div class="container">
      <span>
        <a href="/">Home</a>
        <img
          class="angle-icon r-270"
          src="/img/icons/angle-icon.svg"
          alt="angle-icon"
        />
      </span>
      <span v-for="(item, index) in breadcrumbItems" :key="index">
        <a :href="item.path">{{ item.text }}</a>
        <img
          v-if="index < breadcrumbItems.length - 1"
          class="angle-icon r-270"
          src="/img/icons/angle-icon.svg"
          alt="angle-icon"
        />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: {
    pagePath: {
      default: function () {
        return "/";
      },
      type: String,
    },
  },
  computed: {
    breadcrumbItems() {
      let items = [],
        pathSubstrings = this.pagePath.split("/");
      for (let i = 0; i < pathSubstrings.length; i++) {
        let el = pathSubstrings[i];
        if (el) {
          let elText = el
              .replace(/-./g, (x) => " " + x.toUpperCase()[1])
              .replace(/^./, (x) => x[0].toUpperCase()),
            elPath = this.pagePath.substring(
              0,
              this.pagePath.split("/", i + 1).join("/").length
            );
          items.push({
            text: elText,
            path: elPath,
          });
        }
      }
      return items;
    },
  },
};
</script>
