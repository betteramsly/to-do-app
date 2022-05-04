import React from 'react';
import classes from './MyButton.module.css'

const MyBUtton = ({children, ...props}) => {
  return (
    <button {...props} className="classes.myBtn">
      {children}
    </button>
  );
};

export default MyBUtton;