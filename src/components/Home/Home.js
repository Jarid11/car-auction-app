import React, { Component } from "react";
import Header from "../Header/Header";

import AllCars from "../AllCars/AllCars";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <AllCars />
      </div>
    );
  }
}

export default Home;
