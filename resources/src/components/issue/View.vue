<template>
  <div class="issue bg-white mb-3 cursor-pointer shadow hover:shadow-md text-sm" @click="editIssue">
    <div class="issue-container flex flex-col p-4">
      <div class="flex flex-row justify-between">
        <span class="issue-num text-lg font-bold">{{ issue.title }}</span>
        <div class="flex text-xs" v-if="issue.status">
          <div class="status px-1" :class="issue.status.type">
            {{ issue.status.statusName }}
          </div>
        </div>
      </div>
      <div class="text-gray-600">
        <span class="mr-1">Issue #{{ issue.id }},</span>
        <span class="mr-1" v-if="issue.user">created by {{ issue.user.firstname }} {{ issue.user.lastname }}</span>
        <span class="mr-1">{{ dateFromNow(issue.createdAt) }}</span>
      </div>
      <div class="text-blue-600">
        <span class="text-xs" v-if="checkDates(issue.createdAt, issue.updatedAt)">Last updated {{ dateFromNow(issue.updatedAt) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import mixins from '@/mixins'

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
.issue,
.issue-container {
  transition: all 0.15s ease-in-out;
}
.issue-num {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 20px;
}
.status {
  max-height: 20px;
}

.issue:hover {
  transform: scale(1.015);
}
/* .issue-container:hover {
  filter: blur(2px);
} */
</style>
