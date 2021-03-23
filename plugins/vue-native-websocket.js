import Vue from 'vue'
import VueNativeSock from 'vue-native-websocket'

export default ({ store }, inject) => {
  const protocol = window.location.protocol === 'https' ? 'wss' : 'ws'
  const url = `${protocol}://${window.location.host}/`
  Vue.use(VueNativeSock, url, {
    format: 'json',
    reconnection: true,
    reconnectionDelay: Math.floor(Math.random() * 10000) + 5000,
    store,
  })
}
