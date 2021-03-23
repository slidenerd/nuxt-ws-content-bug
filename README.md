# nuxt-ws-content-bug

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Problem description
- Run this using "npm run dev"
- Open the browser at localhost:3000 and open console
- You will see lots of errors
- Also check the express server console here on VSCode, you ll see that the WS upgrade operation has bascially failed

## Temporary Fix
- Comment this line '@nuxt/content' under modules in nuxt.config.js file
- Everything works perfectly
- Basically the WS server used by us is clashing with the one being used by the nuxt content module
- How to fix this?