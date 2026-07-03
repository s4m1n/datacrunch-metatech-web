import { Router } from 'express'
import { testimonials } from '../data/index.js'
import { asyncHandler } from '../middleware/asyncHandler.js'

export const testimonialsRouter = Router()

testimonialsRouter.get(
  '/testimonials',
  asyncHandler(async (_req, res) => {
    res.json(testimonials)
  }),
)
