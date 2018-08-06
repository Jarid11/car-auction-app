module.exports = {
  getCars: (req, res) => {
    const db = req.app.get("db");

    db.car
      .get_cars()
      .then(cars => {
        res.status(200).json(cars);
      })
      .catch(err => console.log(err));
  }
};
