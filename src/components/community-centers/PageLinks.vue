<template>
  <!-- Page Links -->
  <div class="page-links">
    <!-- Resources -->
    <div v-if="links.resources.length" id="resources" class="page-resources">
      <!-- Resources -->
      <div>
        <h2 id="content-resources" class="h3 light">Resources</h2>
        <ul>
          <li v-for="(link, index) in links.resources" :key="index">
            <a :href="link.target">
              <span class="arrow">⟶</span>
              <span class="bold">{{ link.category }}: </span>
              {{ link.text }}
            </a>
          </li>
        </ul>
      </div>
      <!-- Media -->
      <div v-if="links.media.length">
        <h2 id="content-media" class="h3 light">Media</h2>
        <ul>
          <li v-for="(link, index) in links.media" :key="index">
            <a :href="link.target">
              <span class="arrow">⟶</span>
              <span class="bold">{{ link.category }}: </span>
              {{ link.text }}
            </a>
          </li>
        </ul>
      </div>
      <!-- Go to Person -->
      <div v-if="links.people.length">
        <h2 id="content-people" class="h3 light">Go to Person</h2>
        <ul>
          <li v-for="(link, index) in links.people" :key="index">
            <a :href="link.target">
              <span class="arrow">⟶</span>
              <span class="bold">{{ link.name }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- Discussions -->
    <div v-if="links.join.length" id="discussions" class="page-discussions">
      <h2 id="content-discussions" class="h3 light">Discussions</h2>
      <!-- Group -->
      <ul>
        <li v-for="(link, index) in links.join" :key="index">
          <a :href="link.target">
            <img :src="'/img/icons/' + link.icon + '.svg'" :alt="link.icon + '-icon'" class="social-media-icon">
            {{ link.text }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageLinks",
  props: {
    links: {
      default: function () {
        return {
          resources: [],
          media: [],
          people: [],
          join: [],
        };
      },
      type: Object,
    },
  },
};
</script>
