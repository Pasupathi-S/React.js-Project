import React from 'react';
import Paragraph from '../Paragraph/Paragraph';
import { AiTwotoneDelete } from "react-icons/ai";
const Todolist = (props) => {
           return (
                      <div className="grid grid-rows-4 grid-flow-col gap-4 ">
                                 {
                                            props &&
                                            props.list &&
                                            props.list.length > 0 &&
                                            props.list.map((item, index) => {
                                                       return (
                                                                  <div className="shadow-2xl shadow-[#03203C] bg-gradient-to-r from-[#1d1a0c] to-[#06bfcc] w-[300px] h-[150px] border-[2px] border-[#A77B06] rounded-[10px]">
                                                                             <div>
                                                                                        <Paragraph
                                                                                                   paragraphText="Todo-Task"
                                                                                                   paragraphClassName="text-[16px] text-[#BF3312]  font-bold p-2 text-center"
                                                                                        />
                                                                                        <hr className="border-[2px] border-[#F7CD2E] " />

                                                                                        <Paragraph
                                                                                                   paragraphText={item}
                                                                                                   paragraphClassName="text-[16px] text-[#E07C24] font-bold m-4"
                                                                                        />


                                                                             </div>
                                                                             <AiTwotoneDelete className="cursor-pointer text-[26px]  text-[#B4161B] rounded-[50px] bg-[#B4161B] float-right mt-[32px]"   onClick={() => props.deleteTodo(index)}/>
                                                                  </div>
                                                       )

                                            })
                                 }
                      </div>
           );
};

export default Todolist;
