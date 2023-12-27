import React, { useState, useEffect } from 'react';
import "../Style/style.css"
const Load= (props) => {
  const [load, setLoad] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoad((prevLoad) => (prevLoad >= 100 ? 0 : prevLoad + 1));
    }, 150);

    return () => clearInterval(interval);
  }, []);

  

  return (
    <div className="loading-box">
      <div className="loading-circle">
        <div className="loading-number">Load: {load}%</div>
      </div>
      <div className="loading-title text-center fs-4 pb-3 text-warning">{props.TextName}</div>
    </div>
  );
};

export default Load;
