<template>
  <div class="flex border border-gray-500 bg-white rounded mb-4 p-4">
    <div class="w-1/2">
      <p>Issue # {{ issue.id }}</p>
      <p>{{ issue.title }}</p>
      <p>{{ issue.text }}</p>
    </div>
    <div class="w-1/2">
      <p v-if="issue.user">Created By: {{ issue.user.firstname }} {{ issue.user.lastname }}</p>
      <p>Created By: {{ issue.createdAt }}</p>
      <p>Updated By: {{ issue.updatedAt }}</p>
    </div>
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
