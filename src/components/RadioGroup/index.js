import React, { useState } from 'react'

function Radiogroup({ name, list = [], selected, setSelected }) {

  return (
    <div>
      {list.map(item => (
        <>
          <input
            key={item}
            type="radio"
            name={name}
            value={item}
            checked={selected === item}
            onChange={e => setSelected(e.currentTarget.value)}
          /> {item}
        </>
      ))}
    </div>
  )
}

export default Radiogroup
