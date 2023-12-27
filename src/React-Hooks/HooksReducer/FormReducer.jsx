import React from 'react';
import Paragraph from '../../Components/Paragraph/Paragraph';
import TextFeild from '../../Components/TextFeild/TextFeild';
import Button from '../../Components/Button/Buton';

let initialValue = {
           name: null,
           email: null,
           password: null,
};

const reducer = (state, action) => {
           if (action.type === 'name') {
                      return {
                                 ...state,
                                 name: action.payload,
                      };
           } else if (action.type === 'email') {
                      return {
                                 ...state,
                                 email: action.payload,
                      };
           } else if (action.type === 'password') {
                      return {
                                 ...state,
                                 password: action.payload,
                      };
           } else {
                      return state;
           }
};

export const FormReducer = () => {
           const [state, dispatch] = React.useReducer(reducer, initialValue);

           const handleInput = (e, value) => {
                      if (value === 'name') {
                                 dispatch({ type: 'name', payload: e.target.value });
                      } else if (value === 'email') {
                                 dispatch({ type: 'email', payload: e.target.value });
                      } else if (value === 'password') {
                                 dispatch({ type: 'password', payload: e.target.value });
                      }
           };

           const addData = () => {
                      console.log('Adding data:', state);
           };

           return (
                      <div className="flex flex-row justify-center">
                                 <div className="bg-[#12B0E8] w-[500px] h-[600px] flex flex-row justify-center mt-12">
                                            <div className="mt-12">
                                                       <Paragraph
                                                                  paragraphText="Registration Form"
                                                                  paragraphClassName="text-[24px] text-[#120E43] font-bold"
                                                       />
                                                       <TextFeild
                                                                  placeholderText="write name-here"
                                                                  classOfTextFeild="border-[2px] rounded-[50px] p-4 mt-6 border-[#120E43]"
                                                                  changeInput={(e) => handleInput(e, 'name')}
                                                                  value={state.name}
                                                       />
                                                       <TextFeild
                                                                  placeholderText="write email-here"
                                                                  classOfTextFeild="border-[2px] rounded-[50px] p-4 mt-6 border-[#120E43]"
                                                                  changeInput={(e) => handleInput(e, 'email')}
                                                                  value={state.email}
                                                       />
                                                       <TextFeild
                                                                  placeholderText="write password-here"
                                                                  classOfTextFeild="border-[2px] rounded-[50px] p-4 mt-6 border-[#120E43]"
                                                                  changeInput={(e) => handleInput(e, 'password')}
                                                                  value={state.password}
                                                       />

                                                       <div className="mt-12">
                                                                  <Button
                                                                             className="bg-[#EDC126] text-[16px] w-[200px] rounded-[50px] text-[#FFF] border-[2px] mt-4 border-[#120E43] font-bold p-4"
                                                                             buttonName="Add-Data"
                                                                             handleClick={addData}
                                                                  />
                                                       </div>
                                            </div>
                                 </div>
                      </div>
           );
};
