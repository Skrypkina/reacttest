import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../../redux/users/usersAction';
import styles from './SearchForm.module.css';

class SearchForm extends Component {
  state = { query: '' };

  handleChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    /* eslint-disable-next-line */
    //   this.props.onSubmit(this.state.query, this.state.category);
    this.props.setQuery(this.state.query);

    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <div>
        <h2 className={styles.mainTitle}>
          Enter a topic and find the book you are interested in
        </h2>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <input
            type="text"
            value={query}
            onChange={this.handleChange}
            className={styles.input}
            placeholder="Enter search word"
          />
          <button type="submit" className={styles.button}>
            Search
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setQuery: query => dispatch(usersActions.getUserQuery(query)),
});

export default connect(null, mapDispatchToProps)(SearchForm);
