<template >
    <div id="app">
      <dashaside></dashaside>
      <dashcontent></dashcontent>
    </div>
</template>

<script>

 export default {
  name: 'App',

  mounted () {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish()
  },
  created () {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start()
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        // parse meta tags
        this.$Progress.parseMeta(meta)
      }
      //  start the progress bar
      this.$Progress.start()
      //  continue to next page
      next()
    })
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish()
    })
  }
 
}
 
</script>
<style lang="scss">

@import '/assets/sass/MaterialVUE.scss';

#app {

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
.router-link-active{
  color: #F76B8A;
}

a {
  transition: all .5s ease;
  color: #42b983;
}
</style>
