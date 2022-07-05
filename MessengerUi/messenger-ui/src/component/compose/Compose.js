import React from 'react';
import './Compose.css';

export default function Compose(props) {
  console.log('compose ', props.rightItems)
  return (
      <div className='compose'>
        <input
            type="text"
            className="compose-input"
            placeholder="Type a message, @name"
        />

        {
          props.rightItems
        }
      </div>
  );
}