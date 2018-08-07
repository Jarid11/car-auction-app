import React, { Component } from "react";

import { connect } from "react-redux";
import { getUser } from "../../ducks/userReducer";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    let { user } = this.props;
    console.log(this.props);
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

let mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUser }
)(Login);
