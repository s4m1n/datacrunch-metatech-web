import { Router } from 'express'
import { features } from '../data/index.js'
import { asyncHandler } from '../middleware/asyncHandler.js'

export const featuresRouter = Router()

featuresRouter.get(
  '/features',
  asyncHandler(async (_req, res) => {
    res.json(features)
  }),
)
