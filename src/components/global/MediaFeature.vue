<template>
  <div 
    :id="'f'+featureContent.id" 
    :class="{
      'home-media': featureContent.image && context == 'home',
      'home-design' : !featureContent.image && context == 'home',
      'features-media': featureContent.image && context == 'features',
      'home-media--alt': imageLeft && featureContent.image
    }"
  >
    <div class="container">
      <!-- Text -->
      <div 
        :class="{
          'home-media__text': featureContent.image && context == 'home',
          'features-media__text': featureContent.image && context == 'features',
        }"
      >
        <h2 
          :class="{
            'h1': featureContent.image && context == 'home',
            'h3' : !featureContent.image || context == 'features'
          }"
          :data-aos="fadeDirection"
          :data-aos-anchor="'#f'+featureContent.id"
        >{{ featureContent.title }}</h2>
        <a
          v-if="featureContent.link"
          :href="featureContent.link.target"
          class="link"
          :data-aos="fadeDirection"
          :data-aos-anchor="'#f'+featureContent.id"
          data-aos-delay="150"
        >{{ featureContent.link.label }}</a>
        <p
          v-for="( text, index ) in featureContent.text"
          :key="index"
          :data-aos="fadeDirection"
          :data-aos-anchor="'#f'+featureContent.id"
          :data-aos-delay="150*index+300"
        >{{ text.content }}</p>
      </div>
      <!-- Img -->
      <div 
        v-if="featureContent.image"
        :class="{
          'home-media__img': context == 'home',
          'features-media__img': context == 'features',
        }"
      >
        <picture>
          <img :src="featureContent.image" alt="media-img">
        </picture>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MediaFeature",
  props: {
    imageLeft: Boolean,
    context: {
      default: function () {
        return "home";
      },
      type: String,
    },
    featureContent: {
      default: function () {
        return {};
      },
      type: Object,
    },
  },
  computed: {
    fadeDirection() {
      return this.imageLeft ? "fade-left" : "fade-right";
    },
  },
};
</script>
