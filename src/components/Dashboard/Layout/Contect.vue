<template>
  <div>
   
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
        <vue-progress-bar></vue-progress-bar>
  </div>

</template>
<script>
export default {
  name: 'Contect',
  data () {
    return {
      msg: 'Keybel 2asd'
    }
  }
}
</script>
<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .1s
  }

  .fade-enter,
  .fade-leave-to
    /* .fade-leave-active in <2.1.8 */

  {
    opacity: 0
  }
</style>

