import { Router } from 'express'
import { home } from '../data/index.js'
import { asyncHandler } from '../middleware/asyncHandler.js'

export const homeRouter = Router()

homeRouter.get(
  '/home',
  asyncHandler(async (_req, res) => {
    res.json(home)
  }),
)
