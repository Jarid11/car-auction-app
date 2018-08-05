import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    axios.get("/api/user").then(user => {
      this.setState({
        user: user.data
      });
    });
  }

  render() {
    let { user } = this.state;
    console.log(this.state);
    return (
      <div>
        {!user.user_id ? (
          <a href={process.env.REACT_APP_LOGIN}>LOGIN</a>
        ) : (
          <a href={process.env.REACT_APP_LOGOUT}>LOGOUT</a>
        )}
      </div>
    );
  }
}

export default Login;
