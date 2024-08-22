import React from 'react';
import '../App.css';

const SceneButton = ({ onClick, label, style }) => {
  return (
    <button className="button" style={style} onClick={onClick}>
      {label}
    </button>
  );
};

export default SceneButton;
