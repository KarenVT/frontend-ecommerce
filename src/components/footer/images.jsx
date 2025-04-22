import React from 'react'

const images = ({ image }) => {
  return (
    <div className="w-10 h-7 relative bg-white">
      <img className="w-10 h-7 absolute" src={ image } />
    </div>
  );
}

export default images