<template>
<section>
  <Header />
  <Content />
  <Footer />
</section>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Content from "@/components/Content.vue";

export default Vue.extend({   

    components: {
      Header,
      Content,
      Footer,
     

    }
})
</script>

<style>
html {
  height: 100%;
  box-sizing: border-box;
   overflow-x: hidden;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;

}

body{
  position: relative;
  overflow-x: hidden;
  min-height: 100%;
}



</style>
