import React from 'react';
import Paragraph from '../Components/Paragraph/Paragraph';
import Button from '../Components/Button/Buton';

export const Counter = () => {
  const [count, setCount] = React.useState(0);
  const [inc, setInc] = React.useState(false);

  const increment = () => {
    setCount(count + 1);
    setInc(true);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="flex flex-row justify-center">
      <div className="border-[2px] border-[#C7C11A] p-12 mt-4">
        <Paragraph
          paragraphText={count}
          paragraphClassName="text-[34px] text-[#12B0E8]"
        />
        <Button buttonName="increment" handleClick={increment} />
        <Button buttonName="decrement" handleClick={decrement} />
        {inc ? (
          <Paragraph
            paragraphText="increment"
            paragraphClassName="text-[34px] text-[#12B0E8]"
          />
        ) : (
          'nothing'
        )}
      </div>
    </div>
  );
};
