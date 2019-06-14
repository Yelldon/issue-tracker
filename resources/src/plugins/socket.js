import Vue from 'vue'
import io from 'socket.io-client'

const socket = io()
let accessToken = window.localStorage.getItem('accessToken')

if (accessToken !== null) {
  socket.emit('authenticate', {
    strategy: 'jwt',
    accessToken
  }, (message, data) => {
    // console.log(message)
    // console.log(data)
  })
}

export default Vue.prototype.$socket = socket
