import React from 'react';
import './index.scss';

// eslint-disable-next-line react/prop-types
const AnimationLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {
        // eslint-disable-next-line react/prop-types
        strArray.map((char, i) => (
          <span key={char + i} className={`${letterClass} _${i + idx}`}>
            {char}
          </span>
        ))
      }
    </span>
  );
};

export default AnimationLetters;
