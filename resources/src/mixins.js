import dayjs from 'dayjs'

export default {
  methods: {
    formatDateTime(date) {
      return dayjs(date).format('MMM DD, YY @ h:ma')
    }
  }
}
