import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserItem.module.css';

const UserItem = ({
  title = '',
  description = '',
  authors = '',
  publisher = '',
  publishedDate = '',
}) => (
  <div>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.descr}>{description}</p>
    <p className={styles.descr}>
      <span className={styles.descrSpan}>author:</span>
      {authors}
    </p>
    <p className={styles.descr}>
      <span className={styles.descrSpan}>publisher:</span>
      {publisher}
    </p>
    <p className={styles.descr}>
      <span className={styles.descrSpan}>date:</span>
      {publishedDate}
    </p>
  </div>
);

UserItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  authors: PropTypes.array,
  publisher: PropTypes.string,
  publishedDate: PropTypes.string,
  pageCount: PropTypes.number,
};
export default UserItem;
