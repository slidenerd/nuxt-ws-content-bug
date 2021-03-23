import session from '../api/sesson-handler'
import websocketServer from './websocket'

const sessionHandler = session()

export default function () {
  this.nuxt.hook('listen', (server, { host, port }) => {
    server.on('upgrade', (request, socket, head) => {
      sessionHandler(request, {}, () => {
        console.log('successfully parsed ws session data')
        websocketServer.handleUpgrade(request, socket, head, (ws) => {
          websocketServer.emit('connection', ws, request)
        })
      })
    })
  })
}
