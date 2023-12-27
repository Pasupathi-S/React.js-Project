import React from 'react';
import Paragraph from '../../Components/Paragraph/Paragraph';
import Button from '../../Components/Button/Buton';

let initialValue = {
  count: 0,
};

const reducer = (state, action) => {
  if (action.type === 'increment-value') {
    return {
      count: action.payload,
    };
  }
};

const HooksReducer = () => {
  const [state, dispatch] = React.useReducer(reducer, initialValue);

  const increment = () => {
    dispatch({ type: 'increment-value', payload: state.count + 1 });
  };
  const decrement = () => {};
  return (
    <div className="flex flex-row justify-center">
      <div className="border-[2px] border-[#F3B431] w-[700px] h-[300px] mt-4 bg-[#F5BCBA]">
        <Paragraph
          paragraphText={state.count}
          paragraphClassName="text-[34px] text-[#12B0E8] text-center"
        />
        <Button buttonName="increment" handleClick={increment} />
        <Button buttonName="decrement" handleClick={decrement} />
      </div>
    </div>
  );
};

export default HooksReducer;
