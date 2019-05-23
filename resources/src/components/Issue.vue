<template>
  <div class="border border-gray-500 rounded mb-4 p-4">
    <p>{{ issue.id }}</p>
    <p>{{ issue.title }}</p>
    <p>{{ issue.text }}</p>
    <p v-if="issue.user">Created By: {{ issue.user.firstname }} {{ issue.user.lastname }}</p>
    <p>------------</p>
  </div>
</template>

<script>
export default {
  name: 'Issue',
  // components: {
  //   Menu
  // },
  props: {
    issue: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {

  }
}
</script>
