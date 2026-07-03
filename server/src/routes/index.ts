import { Router } from 'express'
import { featuresRouter } from './features.route.js'
import { homeRouter } from './home.route.js'
import { testimonialsRouter } from './testimonials.route.js'

export const apiRouter = Router()

apiRouter.use(homeRouter)
apiRouter.use(featuresRouter)
apiRouter.use(testimonialsRouter)
