import Vue from 'vue'

export const state = () => ({
  socket: {
    isConnected: false,
    message: '',
    reconnectError: false,
  },
})

export const mutations = {
  SOCKET_ONOPEN(state, event) {
    Vue.prototype.$socket = event.currentTarget
    state.socket.isConnected = true
    console.log('connection opened')
  },
  SOCKET_ONCLOSE(state, event) {
    state.socket.isConnected = false
    console.log('connection closed')
  },
  SOCKET_ONERROR(state, event) {
    console.error('connection error', state, event)
  },
  // default handler called for all methods
  SOCKET_ONMESSAGE(state, message) {
    state.socket.message = message
    console.log('connection message received')
  },
  // mutations for reconnect methods
  SOCKET_RECONNECT(state, count) {
    console.log('connection reconnecting...')
  },
  SOCKET_RECONNECT_ERROR(state) {
    state.socket.reconnectError = true
    console.log('connection reconnecting error')
  },
}
export const actions = {
  sendMessage(context, message) {
    Vue.prototype.$socket.send(message)
  },
}
