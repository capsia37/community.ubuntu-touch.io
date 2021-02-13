<template>
  <!-- Contributors -->
  <div class="home-contributors">
    <div class="container">
      <!-- Heading -->
      <h2 class="h3">Team & Individual Contributers</h2>
      <!-- Slider -->
      <div class="home-contributors__slider">
        <!-- Swiper -->
        <hooper :settings="contributorsSliderOptions">
          <!-- Slide -->
          <hooper-slide v-for="device in $static.allDevice.edges.map((n) => n.node)" :key="device.path">
            <!-- Card -->
            <a :href="device.path" class="card">
              <!-- Text -->
              <div class="card__text">
                <h4 class="h4">{{ device.name.replace(/ *\([^)]*\) */g, "") }}</h4>
                <p v-if="device.contributors.length">By {{ device.contributors[0].name }}</p>
              </div>
              <!-- Icon -->
              <div class="card__icon">
                <img class="angle-icon-gradient" src="/img/icons/angle-icon-gradient.svg" alt="angle-icon">
              </div>
            </a>
          </hooper-slide>
          <hooper-progress slot="hooper-addons"></hooper-progress>
        </hooper>
      </div>
      <!-- Line -->
    </div>
  </div>
</template>

<static-query>
query {
  allDevice (sortBy: "maturity", order: DESC, perPage: 15, page: 0) {
    edges {
      node {
        path
        name
        contributors {
          name
        }
      }
    }
  }
}
</static-query>

<script>
import "hooper/dist/hooper.css";

import {
  Hooper,
  Slide as HooperSlide,
  Progress as HooperProgress,
} from "hooper";

export default {
  name: "DevicesSlider",
  components: {
    Hooper,
    HooperSlide,
    HooperProgress,
  },
  data: function () {
    return {
      contributorsSliderOptions: {
        trimWhiteSpace: true,
        breakpoints: {
          0: {
            itemsToShow: 1.5,
            centerMode: true,
          },
          575: {
            itemsToShow: 2,
            centerMode: false,
          },
          768: {
            itemsToShow: 3,
          },
          992: {
            itemsToShow: 4,
          },
          1200: {
            itemsToShow: 6,
          },
        },
      },
    };
  },
};
</script>
