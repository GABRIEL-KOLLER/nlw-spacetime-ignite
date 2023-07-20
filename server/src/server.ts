import 'dotenv/config'
import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import multpart from '@fastify/multipart'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'
import { uploudRoutes } from './routes/uploud'
import { resolve } from 'node:path'


const app = fastify()

app.register(multpart)

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

app.register(cors, {
  origin: true, // todas URLs de front-end poderão acessar nosso back-end
})

app.register(jwt, {
  secret: 'spacetime',
})

app.register(authRoutes)
app.register(uploudRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333')
  })
