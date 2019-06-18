import Vue from 'vue'
import toast from 'vue-toasted'

let customOptions = {
  duration: 3000,
  keepOnHover: true,
  containerClass: 'notification-container',
  className: [ 'notification' ]
}
let issueOptions = customOptions

Vue.use(toast)

Vue.toasted.options = customOptions

// Custom toast
Vue.toasted.register('newIssue', (payload) => {
    if (payload.class) {
      issueOptions.className.push(payload.class)
    }

    return payload.message
}, issueOptions)
