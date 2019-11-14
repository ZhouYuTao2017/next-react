import next from 'next';
import routes from '../routes/index'
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)
 
// With express
import express from 'express';
app.prepare().then(() => {
  express().use(handler).listen(3002)
})