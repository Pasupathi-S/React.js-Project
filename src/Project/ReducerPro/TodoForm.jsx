// TodoForm.js
import React, { useReducer } from 'react';
import Card from './Card';
import Icon from '../../Components/Icon/Icon';
import Paragraph from '../../Components/Paragraph/Paragraph';
import Button from '../../Components/Button/Buton';
import TextFeild from '../../Components/TextFeild/TextFeild';

let initialValue = {
           title: '',
           description: '',
           date: '',
};

const reducer = (state, action) => {
           switch (action.type) {
                      case 'title':
                                 return {
                                            ...state,
                                            title: action.payload,
                                 };
                      case 'description':
                                 return {
                                            ...state,
                                            description: action.payload,
                                 };
                      case 'date':
                                 return {
                                            ...state,
                                            date: action.payload,
                                 };

                      case 'clear':
                                 return initialValue;
                      default:
                                 return state;
           }
};

const TodoForm = () => {
           const [state, dispatch] = useReducer(reducer, initialValue);

           const handleInput = (e, value) => {
                      dispatch({ type: value, payload: e.target.value });
           };

           const addData = () => {
                      const newTodo = {
                                 title: state.title,
                                 description: state.description,
                                 date: state.date,
                      };

                      const existingData = JSON.parse(localStorage.getItem('todoData')) || [];

                      const updatedData = [...existingData, newTodo];

                      localStorage.setItem('todoData', JSON.stringify(updatedData));

                      dispatch({ type: 'clear' });
           };

           const clear = () => {
                      dispatch({ type: 'clear' });
           };

           return (
                      <Card className="md:w-[50%] h-[591px] md:h-[718px] ">
                                 <Paragraph
                                            paragraphText=" Add Todo"
                                            paragraphClassName="text-[24px] text-[#1AB8DB] font-bold text-center mt-6"
                                 />
                                 <div className="flex fle-row justify-center mt-12">
                                            <Icon iconType={'getStarted'} />
                                 </div>
                                 <div className="flex fle-row justify-center mx-6 md:mx-0 mt-4">
                                            <div>
                                                       <TextFeild
                                                                  placeholderText="Enter task Title"
                                                                  classOfTextFeild="border-[2px] rounded-[30px] w-[300px] md:w-[500px] h-[50px] md:h-[80px] placeholder:text-center placeholder:text-[#000000CC] mt-6 border-[#1AB8DB]"
                                                                  changeInput={(e) => handleInput(e, 'title')}
                                                                  value={state.title}
                                                       />
                                                       <TextFeild
                                                                  placeholderText="Enter task description"
                                                                  classOfTextFeild="border-[2px] rounded-[30px] w-[300px] md:w-[500px] h-[50px] md:h-[80px] placeholder:text-center placeholder:text-[#000000CC] mt-6 border-[#1AB8DB]"
                                                                  changeInput={(e) => handleInput(e, 'description')}
                                                                  value={state.description}
                                                       />
                                                       <TextFeild
                                                                  placeholderText="click choose date"
                                                                  classOfTextFeild="border-[2px] rounded-[30px] w-[300px] md:w-[500px] h-[50px] md:h-[80px] placeholder:text-center placeholder:text-[#000000CC] mt-6 border-[#1AB8DB] "
                                                                  changeInput={(e) => handleInput(e, 'date')}
                                                                  value={state.date}
                                                                  type="date"
                                                       />
                                                       <div className="flex flex-row justify-between mt-12">
                                                                  <Button
                                                                             className="bg-[#1AB8DB] text-[#FFF] text-[16px] w-[106px] md:w-[150px] h-[50px] md:h-[80px] rounded-[50px]"
                                                                             buttonName="Add"
                                                                             handleClick={addData}
                                                                  />
                                                                  <Button
                                                                             className="bg-[#FF362E] text-[#FFF] text-[16px] ml-4 md:ml-0 w-[106px] md:w-[150px] h-[50px] md:h-[80px] rounded-[50px]"
                                                                             buttonName="cancel"
                                                                             handleClick={clear}
                                                                  />
                                                       </div>
                                            </div>
                                 </div>
                      </Card>
           );
};

export default TodoForm;
