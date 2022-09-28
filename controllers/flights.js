import { Flight } from "../models/flights.js"

function newFlight (req, res) {
  res.render("flights/new", {
    title: "Add Flight",
  })
}

function create (req, res) {
  console.log("Wassup.Req", req.body);
  Flight.create(req.body)
  .then(flight => {
    console.log("Show me flights", flight);
    res.redirect(`/flights`)
  })
  .catch(err => {
    res.redirect('/flights/new')
  })
}
function index (req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/', {
      flights: flights,
      title: "All Flights",
  })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/movies/new')
  })
}
export {
  newFlight as new,
  create,
  index,
}