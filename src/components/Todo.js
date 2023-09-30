import React, { useState } from 'react'
import { CheckIcon } from './svgs/CheckSvg'
import { CrossIcon } from './svgs/CrossIconSvg';



function Todo({ todo }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const deleteItem = () => {
      
  }

  

  return (
    <div>
      <label className='checkbox'>
        <input type='checkbox' checked={isChecked} onChange={handleCheckboxChange} />
        <span className='checkmark'>
          {isChecked && 
          <div className='check-bg'>
            <CheckIcon />
          </div>}
        </span>
        <div className='todo'>{todo}</div>
        <div className='delete' onClick={deleteItem}><CrossIcon /></div>
      </label>
    </div>
  )
}

export default Todo