import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'
const router = Router()

router.get('/', flightsCtrl.index)

router.get('/new', flightsCtrl.new)

router.get('/:id', flightsCtrl.show)

router.post('/', flightsCtrl.create)

router.get('/:id', flightsCtrl.show)

router.post('/:id/ticket', flightsCtrl.createTicket)

router.post('/:id/destination', flightsCtrl.addDestiny)

export {
  router
}
