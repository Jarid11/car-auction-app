import React, { Component } from "react";

class Car extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    let {
      buy_out_price,
      condition,
      current_bid,
      images,
      location,
      make,
      model,
      odometer,
      retail_value,
      year
    } = this.props.car;
    return (
      <div onClick={this.props.handleCarFlag}>
        <div>
          <div>
            <img src={images} alt="car" />
          </div>
          <div>
            <div>
              <h3>{year} -</h3>
              <h3>{make} -</h3>
              <h3>{model}</h3>
            </div>
            <div>
              <h3>{odometer}</h3>
              <h3>{condition}</h3>
            </div>
            <div>
              <h3>{retail_value}</h3>
              <h3>{buy_out_price}</h3>
            </div>
          </div>
        </div>
        <div>
          <h2>{location}</h2>
          <h2>{current_bid}</h2>
        </div>
        <div>
          {current_bid ? (
            <div>
              <button>Bid</button>
              <button>Buyout</button>
            </div>
          ) : (
            <div>
              <button>Bid</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Car;
