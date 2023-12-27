import React from 'react';
import Button from '../../Components/Button/Buton';
import Paragraph from '../../Components/Paragraph/Paragraph';

let initialValue = {
           color: '#FFF',
};

const reducer = (state, action) => {
           if (action.type === 'red') {
                      return {
                                 color: action.payload,
                      };
           } else if (action.type === 'blue') {
                      return {
                                 color: action.payload,
                      };
           } else if (action.type === 'green') {
                      return {
                                 color: action.payload,
                      };
           } else if (action.type === 'yellow') {
                      return {
                                 color: action.payload,
                      };
           }
};

const MultipleStateIntoReducer = () => {
           const [state, dispatch] = React.useReducer(reducer, initialValue);

           const colorChange = (data) => {
                      // console.log("buttonName:",data)

                      if (data === 'red') {
                                 dispatch({ type: 'red', payload: '#E71C23' });
                      } else if (data === 'green') {
                                 dispatch({ type: 'green', payload: '#019031' });
                      } else if (data === 'yellow') {
                                 dispatch({ type: 'yellow', payload: '#F3B431' });
                      } else if (data === 'blue') {
                                 dispatch({ type: 'blue', payload: '#192A56' });
                      }
           };
           return (
                      <div className="flex flex-row justify-center ml-4">
                                 <div className="border-[2px] border-[#002266] w-[700px] h-[700px] mt-12 bg-[#FFF9B8] shadow-2xl shadow-[#D4A006]">
                                            <Paragraph
                                                       paragraphText="Changing Background using Reducer-Hooks"
                                                       paragraphClassName="text-[24px] text-center text-[#613F00] font-bold"
                                            />
                                            <div className="flex flex-row justify-center">
                                                       <div
                                                                  className="border-[2px] border-[#002266] w-[400px] h-[400px] mt-12"
                                                                  style={{ backgroundColor: `${state.color}` }}
                                                       ></div>
                                            </div>
                                            <div className="flex flex-row justify-between mt-24 mx-4">
                                                       <Button
                                                                  buttonName="Red"
                                                                  className="bg-[#8C0015] w-[100px] h-[50px] border-none text-[#FFF] outline-none rounded-[24px] text-[16px]"
                                                                  handleClick={() => colorChange('red')}
                                                       />
                                                       <Button
                                                                  buttonName="Blue"
                                                                  className="bg-[#192A56] w-[100px] h-[50px] border-none outline-none rounded-[24px] text-[16px] text-[#FFF]"
                                                                  handleClick={() => colorChange('blue')}
                                                       />
                                                       <Button
                                                                  buttonName="Green"
                                                                  className="bg-[#019031] w-[100px] h-[50px] border-none outline-none rounded-[24px] text-[16px] text-[#FFF]"
                                                                  handleClick={() => colorChange('green')}
                                                       />
                                                       <Button
                                                                  buttonName="yellow"
                                                                  className="bg-[#FAD02E] w-[100px] h-[50px] border-none outline-none rounded-[24px] text-[16px] text-[#FFF]"
                                                                  handleClick={() => colorChange('yellow')}
                                                       />
                                            </div>
                                 </div>
                      </div>
           );
};

export default MultipleStateIntoReducer;
