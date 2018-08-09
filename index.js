const next = require('next')
const router = require('next-routes')
const express = require('express')

const app = next({
    dev: process.env.NODE_ENV !== 'production'
})

const routes = router()
    .add("", "/", "home")
    .getRequestHandler(app)

app.prepare().then(() => {
    express().use(routes).listen(3000)
})
