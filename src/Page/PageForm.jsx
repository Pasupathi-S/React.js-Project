import React from 'react';
import Paragraph from '../Components/Paragraph/Paragraph';
import TextFeild from '../Components/TextFeild/TextFeild';
import Button from '../Components/Button/Buton';
export const PageForm = () => {
           const [input, setInput] = React.useState()
           
           const [add, setAdd] = React.useState()
           
           const handleInput = (e) => {
                      setInput(e.target.value)

           };

           const addData = () => {
                      setAdd(input)
                      
           }
           return (
                      <div className="flex flex-row justify-center">
                                 <div className="bg-[#12B0E8] w-[500px] h-[400px] flex flex-row justify-center mt-12">
                                            <div className="mt-12">
                                                       <Paragraph
                                                                  paragraphText="To-Do-App"
                                                                  paragraphClassName="text-[24px] text-[#120E43] font-bold"
                                                       />
                                                       <TextFeild
                                                                  placeholderText="write text-here"
                                                                  classOfTextFeild=" border-[2px] rounded-lg p-4 border-[#120E43]"
                                                                  changeInput={handleInput}
                                                       />

                                                       <div className="mt-12">
                                                                  <Button
                                                                             className="bg-[#EDC126] text-[16px] text-[#FFF] border-[2px] mt-4 border-[#120E43] font-bold p-4"
                                                                             buttonName="Add-Data"
                                                                             handleClick={addData}
                                                                  />
                                                       </div>

                                                       <Paragraph
                                                       paragraphText={add}
                                                       paragraphClassName="text-[14px] text-[#120E43] font-bold"
                                                       />
                                            </div>
                                 </div>
                      </div>
           );
};
