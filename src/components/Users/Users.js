import React, { Component } from 'react';
import UserItem from '../UserItem/UserItem';
import { connect } from 'react-redux';
import styles from './Users.module.css';

class Users extends Component {
  state = {
    currentPage: 1,
    linksPerPage: 3,
  };

  handleClick = event => {
    this.setState({
      currentPage: Number(event.target.id),
    });
  };

  render() {
    const { currentPage, linksPerPage } = this.state;
    const users = this.props.items;

    // Logic for displaying items
    const indexOfLastItem = currentPage * linksPerPage;
    const indexOfFirstItem = indexOfLastItem - linksPerPage;
    const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

    const renderItems = currentItems.map((item, index) => {
      return (
        <div key={item.id} className={styles.card}>
          <img
            alt={item.volumeInfo.title}
            src={item.volumeInfo.imageLinks.thumbnail}
            className={styles.cardImg}
          />
          <UserItem {...item.volumeInfo} />
        </div>
      );
    });
    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(users.length / linksPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      let className = styles.usersListItem;
      if (this.state.currentPage === number) className = styles.active;

      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
          className={className}
        >
          {number}
        </li>
      );
    });

    return (
      <div className={styles.container}>
        {/* <h2 className={styles.mainTitle}>
          Enter a topic and find the book you are interested in
        </h2> */}

        <div className={styles.grid}>{renderItems}</div>
        <ul id="page-numbers" className={styles.usersList}>
          {renderPageNumbers}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.users.items,
});

export default connect(mapStateToProps, null)(Users);
