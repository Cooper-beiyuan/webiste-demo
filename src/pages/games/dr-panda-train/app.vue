<template>
  <div id="app">
    games page
    <div>{{`Title: ${title}`}}</div>
    <div>{{`Subtitle: ${subtitle}`}}</div>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  },
  data() {
    return {
      title: '',
      subtitle: '',
    };
  },
  created: function() {
    this.title = window.pageData.title;
    this.subtitle = window.pageData.subtitle;
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 36px;
}
</style>
