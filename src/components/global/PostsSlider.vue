<template>
  <!-- Posts -->
  <div class="home-posts">
    <div class="container">
      <!-- Heading -->
      <h2 class="h3">Latest updates</h2>
      <!-- Slider -->
      <div class="home-posts__slider">
        <!-- Swiper -->
        <hooper :settings="postsSliderOptions">
          <!-- Slide -->
          <hooper-slide v-for="(feed, index) in feedContent.items" :key="index">
            <!-- Post -->
            <a :href="feed.link" target="_blank" class="home-post">
              <p>{{ feed.author }}</p>
              <h3 class="h3 light">{{ feed.title }}</h3>
              <div class="line"></div>
              <p>Read More</p>
            </a>
          </hooper-slide>
        </hooper>
      </div>
    </div>
  </div>
</template>

<script>
import "hooper/dist/hooper.css";

import { Hooper, Slide as HooperSlide } from "hooper";

import RSSParser from "rss-parser";

export default {
  name: "PostsSlider",
  components: {
    Hooper,
    HooperSlide,
  },
  data: function () {
    return {
      feedContent: [],
      postsSliderOptions: {
        infiniteScroll: true,
        itemsToShow: 4,
        breakpoints: {
          0: {
            itemsToShow: 1.5,
          },
          575: {
            itemsToShow: 2,
          },
          992: {
            itemsToShow: 3,
          },
          1200: {
            itemsToShow: 4,
          },
        },
      },
    };
  },
  async mounted() {
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    let parser = new RSSParser();
    let feed = await parser.parseURL(
      CORS_PROXY + "https://ubports.com/blog/ubports-blog-1/feed"
    );
    this.feedContent = feed;
  },
};
</script>
