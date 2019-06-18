<template>
  <div id="app" class="app">
    <Menu />
    <div class="container mx-auto pt-16">
      <router-view/>
    </div>
  </div>
</template>

<script>
import './assets/app.css'
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
.notification-container {
  right: 15px !important;
}
.notification {
  background: red !important;
}

.notification.yours {
  background: blue !important;
}

.notification.others {
  background: green !important;
}
</style>
