<template>
  <div class="issue flex border border-gray-500 bg-white rounded mb-4 p-4 cursor-pointer" @click="editIssue">
    <div class="w-1/2">
      <p>Issue # {{ issue.id }}</p>
      <p>{{ issue.title }}</p>
      <p>{{ issue.text }}</p>
    </div>
    <div class="w-1/2">
      <p v-if="issue.user">Created By: {{ issue.user.firstname }} {{ issue.user.lastname }}</p>
      <p>Added: {{ formatDateTime(issue.createdAt) }}</p>
      <p>Updated: {{ formatDateTime(issue.updatedAt) }}</p>
    </div>
  </div>
</template>

<script>
import mixins from '../mixins'

export default {
  name: 'Issue',
  mixins: [
    mixins
  ],
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
    editIssue () {
      let id = this.issue.id
      this.$router.push({ name: 'DashboardEdit', params: { id } })
      this.$root.$emit('editIssue', id)
    }
  }
}
</script>

<style scoped>
.issue {
  transition: all 0.15s ease-in-out;
}
.issue:hover {
  transform: scale(1.025);
}
</style>
