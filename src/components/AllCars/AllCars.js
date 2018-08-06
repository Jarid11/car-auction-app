import React, { Component } from "react";
import axios from "axios";
import "./AllCars.css";

import Car from "../Car/Car";

class AllCars extends Component {
  constructor() {
    super();
    this.state = {
      cars: [],
      carFlag: false
    };
  }

  componentDidMount() {
    axios.get("/api/car").then(cars => {
      this.setState({
        cars: cars.data
      });
    });
  }

  handleCarFlag = () => {
    this.setState({
      carFlag: !this.state.carFlag
    });
  };

  render() {
    let { cars, carFlag } = this.state;
    let allCars = cars.map(e => {
      if (carFlag) {
        return (
          <Car car={e} key={e.car_id} handleCarFlag={this.handleCarFlag} />
        );
      } else {
        return (
          <div
            key={e.car_id}
            className="allCars-car-container"
            onClick={this.handleCarFlag}
          >
            <img src={e.images} alt="car" className="allCars-car-image" />
            <h5>{e.buy_out_price}</h5>
          </div>
        );
      }
    });
    return <div>{allCars}</div>;
  }
}

export default AllCars;
