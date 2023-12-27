import React, { useState, useEffect } from 'react';
import Paragraph from '../../Components/Paragraph/Paragraph.jsx';
import Button from '../../Components/Button/Buton.jsx';

function Update() {
  const [count, setCount] = useState(0);
  const [multiple, setMultiple] = useState('');

console.log('before')
  useEffect(() => {
    console.log("update");
    setMultiple(count*2)
  }, [count]);

  let counter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div className='border bg-[#c2c77d] border-primary w-[400px] h-[200px] ms-10'>
        <Paragraph paragraphText="Count value Update" paragraphClassName="text-center fs-4 text-success" />
        <Paragraph paragraphText={count} paragraphClassName="text-center fs-4 text-danger" />
        <Paragraph paragraphText={multiple} paragraphClassName="text-center fs-4 text-secondary" />

        <Button
          buttonName='ADD'
          className="btn btn-info"
          handleClick ={()=>counter()}
        />
       
      </div>
    </div>
  );
}

export default Update;
