import React from 'react';
import styles from './select.module.scss';

const Select = ({ label, items, value, name, onChange }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="reason_request">
        {label}
      </label>
      {/* eslint-disable-next-line */}
      <select
        id="reason_request"
        className={styles.list}
        value={value}
        name={name}
        onChange={onChange}
      >
        {items.map((item, index /* eslint-disable-next-line */) => (
          <option className={styles.list__item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

/* <div className={styles.container}>
  <label className={styles.label} htmlFor="reason_request">
    {label}
  </label>
  {/* eslint-disable-next-line */

// <div
//   className={styles.text}
//   onClick={handleDropdown}
//   role="button"
//   tabIndex={0}
// >
//   {currentItem}
// </div>
// {isOpen && (
//   <div id="reason_request" name="reason_request" className={styles.list}>
//     {items.map((item, index /* eslint-disable-next-line */) => (
//       <li
//         className={styles.list__item}
//         key={item + index}
//         style={item === currentItem ? selectedItemStyles : {}}
//         onClick={() => handleChange(item)}
//       >
//         {item}
//       </li>
//     ))}
//   </div>
// )}
// </div> */}
