import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
const Filter = ({ value, onChange }) => {
  return (
    <div className={styles.form}>
      <label>
        <p className={styles.title}>Filter</p>
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
