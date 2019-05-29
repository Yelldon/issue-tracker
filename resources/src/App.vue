<template>
  <div id="app" class="app bg-gray-200">
    <Menu />
    <div class="container mx-auto pt-16">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu'
export default {
  name: 'App',
  components: {
    Menu
  },
  data () {
    return {}
  },
  methods: {

  }
}
</script>


<style>
.app {
  min-height: 100vh;
}
</style>
