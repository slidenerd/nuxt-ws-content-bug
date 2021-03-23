import WebSocket from 'ws'

// https://github.com/websockets/ws/blob/master/examples/express-session-parse/index.js, if you pass a server instance here 'upgrade' handler will crash
const websocketServer = new WebSocket.Server({ noServer: true })

function heartbeat() {
  this.isAlive = true
}

websocketServer.on('connection', (ws, request, client) => {
  ws.isAlive = true
  ws.on('pong', heartbeat)
  ws.on('message', (msg) => {
    console.log(`Received message ${msg} from user ${client}`)
    ws.send(true)
  })
})

export default websocketServer
