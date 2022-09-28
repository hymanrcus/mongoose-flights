import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

// GET /movies/new
router.get('/new', flightsCtrl.new)
router.get('/', flightsCtrl.index)
router.get('/:id', flightsCtrl.show)
router.post('/', flightsCtrl.create)
router.delete('/:id', flightsCtrl.delete)

export {
  router
}
