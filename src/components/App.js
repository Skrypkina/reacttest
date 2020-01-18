import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from './Users/Users';
import SearchForm from '../components/SearchForm/SearchForm';
import * as usersOperations from '../redux/users/usersOperations';

class App extends Component {
  componentDidMount() {
    this.props.fetchUsers(this.props.search);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.search !== this.props.search) {
      this.props.fetchUsers(this.props.search);
    }
  }

  render() {
    const query = this.props.search;
    console.log(query);
    return (
      <div>
        <SearchForm />
        {query.length > 0 && <Users />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: state.users.query,
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: query => dispatch(usersOperations.fetchUsers(query)),

  // fetchUsers: usersOperations.fetchUsers,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
