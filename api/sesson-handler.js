import session from 'express-session'

function sessionHandler() {
  return session({
    secret: 'abcefghijklmnopqrstuvwxyz',
    resave: false,
    rolling: false,
    saveUninitialized: false,
    cookie: {
      // Doesnt work if maxAge is not of type Number
      maxAge: 60 * 1000,
      httpOnly: true,
      secure: false,
    },
  })
}

export default sessionHandler
