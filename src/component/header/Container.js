import React from 'react';

const style = {
  width: '100%',
  margin: '0 auto',
  padding: '0 24px'
};

const styleFlex = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

export const Container = ({children, flex = false}) => {
  const _style = flex
      ? {...style, ...styleFlex}
      : style;
  return (
      <div style={_style}>
        {children}
      </div>
  );
};
