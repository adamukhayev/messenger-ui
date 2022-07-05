import React from 'react';
import './Toolbar.css';

export default function Toolbar(props) {
  const {title, leftItems, rightItems} = props;
  console.log('title ', title, 'leftItem ', leftItems, ' right ', rightItems)
  return (
      <div className='toolbar'>
        <div className='left-items'>{leftItems}</div>
        <h1 className='toolbar-title'>{title}</h1>
        <div className='right-items'>{rightItems}</div>
      </div>
  );
}