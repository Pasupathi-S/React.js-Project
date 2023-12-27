import React from 'react';
import Card from './Card';
import LeftSide from './LeftSide';
import TodoForm from './TodoForm';
import TodolistData from './TodolistData';

const initialState = false;

const reducer = (state, action) => {
  if (action.type === 'rec') {
    return !state; 
  } else {
    return state;
  }
};

const ReducerPro = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleClick = () => {
    dispatch({ type: 'rec' });
  };

  return (
    <Card className="md:w-[1200px] w-[600px] h-[591px] md:h-[720px] border-[#1AB8DB] border-[2px] mt-2 md:mt-12">
      <div className="flex flex-row">
        <LeftSide redirect={handleClick} state={state} />

        

        <TodoForm />
        <TodolistData state={state}/>
      </div>
    </Card>
  );
};

export default ReducerPro;
