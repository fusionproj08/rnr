import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './index.css';

const getButtonTypeClass = type => {
  let defaultColor = '';
  switch (type) {
    case 'danger':
      defaultColor = 'danger';
      break;
    case 'success':
      defaultColor = 'success';
      break;
    case 'warning':
      defaultColor = 'warning';
      break;
    default:
      defaultColor = type;
      break;
  }
  return defaultColor;
};

const Btn = props => {
  const { id = 'id', label, customClasses, handleClick, type, isDisabled } = props;
  const buttonTypeClass = getButtonTypeClass(type);
  return (
    <Fragment>
      <button id={id} className={`btn ${customClasses} ${buttonTypeClass}`} onClick={handleClick} disabled={isDisabled}>
        {label}
      </button>
    </Fragment>
  );
};

Btn.propTypes = {
  label: PropTypes.string.isRequired,
  customClasses: PropTypes.string,
  id: PropTypes.string,
  handleClick: PropTypes.func,
  type: PropTypes.string,
  isDisabled: PropTypes.bool
};

Btn.defaultProps = {
  customClasses: '',
  id: 'btn',
  handleClick: () => {},
  type: 'default',
  isDisabled: false
};

export default Btn;
