import React, { Component } from "react";
import { connect } from "react-redux";
import * as usersActions from "../../redux/users/usersAction";
import list from "../../users.json";

console.log(list);

class Users extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchUsers(list);
  }

  render() {
    return (
      <div>
        <p>Hellow world!!!</p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUsers: users => dispatch(usersActions.fetchUsers(users))
});

export default connect(null, mapDispatchToProps)(Users);
