import React from 'react';
import styles from './SuggestionList.module.css';

function SuggestionList({ listId, items = [], valueKey, labelKey }) {
  return (
    <datalist id={listId}>
      {items.length && items.map(item => {
        const { [valueKey]: value, [labelKey]: label } = item;
        return (<option key={value} value={label} />)
      })}
    </datalist>
    // <ul className={styles.list}>
    //   {items.length && items.map(item => {
    //     const { [valueKey]: value, [labelKey]: label } = item;
    //     return (<li key={value} onClick={() => handler(value)}>
    //       {label}
    //     </li>)
    //   })}
    // </ul>
  )
}

export default SuggestionList
