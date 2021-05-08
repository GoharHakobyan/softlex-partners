import React, { useRef } from 'react';
import classnames from 'classnames/bind';
import styles from './input.module.scss';

const cx = classnames.bind(styles);
const Input = ({ onChange, label, name, value, type, isValid }) => {
  const labelRef = useRef(null);
  const inputRef = useRef(null);

  function handleInputFocus(ref) {
    ref.style.transform = 'translateY(-20px)';
  }

  function handleInputBlur(ref) {
    if (!value) {
      ref.style.transform = '';
    }
  }

  function setFocus(ref) {
    ref.focus();
  }

  return (
    <div className={cx('container')}>
      {/* on-interactive elements should not be assigned mouse or keyboard event listeners */}
      {/* eslint-disable-next-line */}{' '}
      <p
        className={cx('label')}
        ref={labelRef}
        onClick={() => setFocus(inputRef.current)}
      >
        {label}
      </p>
      <input
        className={cx('input', isValid ? 'input__novalidate' : '')}
        name={name}
        value={value}
        onFocus={() => handleInputFocus(labelRef.current)}
        onBlur={() => handleInputBlur(labelRef.current)}
        onChange={onChange}
        ref={inputRef}
        type={type || 'text'}
      />
    </div>
  );
};

export default Input;
