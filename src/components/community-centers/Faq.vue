<template>
  <!-- FAQ's -->
  <div id="faqs" class="page-faq">
    <div class="container">
      <h2 class="h2">Take a second to read common answers</h2>
      <!-- Questions -->
      <div class="questions">
        <ul id="pageFaqs">
          <!-- Question -->
          <li v-for="( question, index ) in faqContent" :key="index">
            <!-- Toggler -->
            <a v-b-toggle="'collapse'+index" role="button" aria-expanded="false" aria-controls="collapse1">
              {{question.question}}
              <img class="angle-icon" src="/img/icons/angle-icon.svg" alt="angle-icon">
            </a>
            <!-- Collapse -->
            <b-collapse :id="'collapse'+index" accordion="faq-accordion" data-parent="#pageFaqs" v-html="question.content">
            </b-collapse>
          </li>
        </ul>
        <p><span class="bold">Have question?</span> Email Joe.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { BCollapse, VBToggle } from "bootstrap-vue";

export default {
  name: "Faq",
  components: {
    BCollapse,
  },
  directives: {
    "b-toggle": VBToggle,
  },
  props: {
    faqContent: {
      default: function () {
        return [];
      },
      type: Array,
    },
  },
};
</script>
