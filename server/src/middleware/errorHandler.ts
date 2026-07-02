import type { NextFunction, Request, Response } from 'express'

/** 404 handler for unmatched routes. */
export function notFound(req: Request, res: Response) {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.method} ${req.originalUrl} does not exist.`,
  })
}

/** Central error handler — keeps route handlers free of try/catch noise. */
export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  const message = err instanceof Error ? err.message : 'Unexpected error'
  console.error('[error]', message)
  res.status(500).json({ error: 'Internal Server Error', message })
}
