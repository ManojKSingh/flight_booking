import React from 'react'
import SuggestionList from '../SuggestionList'

function Autocomplete({
  listName = "list",
  items,
  value,
  handler,
  label,
  register,
  required,
  ...otherProps
}) {
  return (
    <>
      <input type="text" value={value} list={listName} {...register(label, { required })} />
      <SuggestionList listId={listName} items={items} {...otherProps} />
    </>
  )
}

export default Autocomplete;
