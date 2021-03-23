import express from 'express'
import sessionHandler from './sesson-handler'

const app = express()

// https://stackoverflow.com/questions/10717685/how-to-remove-x-powered-by-in-expressjs
app.disable('x-powered-by')

// https://stackoverflow.com/questions/23413401/what-does-trust-proxy-actually-do-in-express-js-and-do-i-need-to-use-it
app.set('trust proxy', 1)

// https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded
// https://expressjs.com/en/api.html
app.use(express.json({ limit: '100kb' }))
app.use(express.urlencoded({ extended: true, limit: '100kb' }))
app.use(sessionHandler())
app.use('/api', (req, res) => res.json(true))

export default {
  path: '/',
  handler: app,
}
