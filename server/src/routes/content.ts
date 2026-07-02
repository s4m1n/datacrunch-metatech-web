import { Router } from 'express'
import { home } from '../data/home.js'
import { features } from '../data/features.js'
import { testimonials } from '../data/testimonials.js'

export const contentRouter = Router()

contentRouter.get('/home', (_req, res) => {
  res.json(home)
})

contentRouter.get('/features', (_req, res) => {
  res.json(features)
})

contentRouter.get('/testimonials', (_req, res) => {
  res.json(testimonials)
})
