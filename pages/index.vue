<template>
<div>
  <Header />
  <Content />
  <Footer />
</div>
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
html{
   height: 100%;
}

body{
  height:100%;
  margin:0;
}

</style>
