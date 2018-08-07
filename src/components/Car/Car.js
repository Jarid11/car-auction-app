import React, { Component } from "react";
import axios from "axios";
import "./Car.css";
import "font-awesome/css/font-awesome.min.css";
import { connect } from "react-redux";

class Car extends Component {
  constructor(props) {
    super();
    this.state = {
      bidInput: 0,
      highestBid: 0
    };
  }

  componentDidMount() {
    this.getHighestBid();
  }

  getHighestBid() {
    let { car_id } = this.props.car;
    axios.get(`/api/car/bid/${car_id}`).then(bid =>
      this.setState({
        highestBid: bid.data.max
      })
    );
  }

  handleBid = e => {
    let { user_id } = this.props.user;
    let { car_id } = this.props.car;
    let { bidInput, highestBid } = this.state;
    if (!user_id) {
      window.location.href = process.env.REACT_APP_LOGIN;
    }
    if (parseInt(bidInput) < highestBid) {
      alert("Bid inserted is less than current bid");
    }
    if (parseInt(bidInput) > highestBid) {
      axios
        .post("/api/car", { user_id, car_id, bidInput })
        .then(() => this.getHighestBid());
    }
  };

  handleBidInput = e => {
    this.setState({
      bidInput: e.target.value
    });
  };

  render() {
    console.log(this.props);
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
    let { highestBid } = this.state;
    return (
      <div className="car-container">
        <div className="main-details-container">
          <img src={images} alt="car" className="car-image" />
          <div className="car-details-container">
            <div className="year-make-model-container">
              <i
                onClick={this.props.handleCarFlag}
                className="fa fa-undo position-button"
              />
              <h3 className="title-spacing">{year}</h3>
              <h3 className="title-spacing">{make} </h3>
              <h3>{model}</h3>
            </div>
            <div className="secondary-details-container">
              <h3>Mileage: {odometer}</h3>
              <h3>Condition: {condition}</h3>
            </div>
            <div className="secondary-details-container">
              <h3>Retail Value: {retail_value}</h3>
              <h3>Buyout Price: {buy_out_price}</h3>
            </div>
          </div>
        </div>
        <div>
          <h3>{location}</h3>
          <h3>{highestBid && highestBid}</h3>
        </div>
        <div>
          <div>
            <input required type="number" onChange={this.handleBidInput} />
            <button onClick={this.handleBid}>Bid</button>
            {buy_out_price && <button>Buyout</button>}
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => state;

export default connect(mapStateToProps)(Car);
