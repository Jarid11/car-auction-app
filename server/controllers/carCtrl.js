module.exports = {
  getCars: (req, res) => {
    const db = req.app.get("db");

    db.car
      .get_cars()
      .then(cars => {
        res.status(200).json(cars);
      })
      .catch(err => console.log(err));
  },
  makeBid: (req, res) => {
    const db = req.app.get("db");

    db.car
      .make_bid([
        req.body.user_id,
        req.body.car_id,
        parseInt(req.body.bidInput)
      ])
      .then(bid => res.status(200).json(bid))
      .catch(err => res.status(500).send(err));
  },
  getHighestBid: (req, res) => {
    const db = req.app.get("db");

    console.log(req.params);

    db.car
      .get_highest_bid(parseInt(req.params.car_id))
      .then(bid => res.status(200).json(bid[0]))
      .catch(err => res.status(500).send(err));
  }
};
