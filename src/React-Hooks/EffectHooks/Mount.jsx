import React, { useState, useEffect } from 'react';
import Paragraph from '../../Components/Paragraph/Paragraph.jsx';
import Button from '../../Components/Button/Buton.jsx';

function Mount() {
  const [count, setCount] = useState(0);
console.log('pasupathi')
  useEffect(() => {
    console.log("effect");
  }, [count]);



  
  let counter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div className='border bg-secondary border-primary w-[400px] h-[200px]'>
        <Paragraph paragraphText="Count value Mount" paragraphClassName="text-center fs-4 text-warning" />
        <Paragraph paragraphText={count} paragraphClassName="text-center fs-4 text-warning" />

        <Button
          buttonName='ADD'
          className="btn btn-success"
          handleClick ={()=>counter()}
        />
      </div>
    </div>
  );
}

export default Mount;
