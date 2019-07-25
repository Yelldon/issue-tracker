import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export default {
  methods: {
    formatDateTime(date) {
      return dayjs(date).format('MMM DD, YY @ h:mma')
    },
    dateFromNow(date) {
      return dayjs(date).fromNow()
    },
    checkDates(created, updated) {
      return (created === updated) ? false : true
    }
  }
}
