import React from 'react';
import Card from './Card';
import Button from './../../Components/Button/Buton';
import Paragraph from '../../Components/Paragraph/Paragraph';
// import { MdDelete } from 'react-icons/md';
// import { MdCheckCircleOutline } from 'react-icons/md';
// import { MdModeEditOutline } from 'react-icons/md';
const TodolistData = (props) => {
           const todoListData = JSON.parse(localStorage.getItem('todoData')) || [];
           //console.log(todoListData);
           
           return (
                      <Card
                                 className={
                                            props.state ? 'block md:w-[50%] h-[591px] md:h-[718px]' : ' hidden '
                                 }
                      >
                                 <div className="flex flex-row  mt-4">
                                            <Button buttonName="Back" className="text-[16px] text-[#1AB8DB] " />
                                            <Paragraph
                                                       paragraphText="Todo List"
                                                       paragraphClassName="text-[16px] text-[#1AB8DB] font-bold text-center ml-[214px] "
                                            />
                                 </div>
                                 <div className="flex flex-row justify-center mt-8">
                                            <Card className="w-[550px] h-[600px] shadow-2xl shadow-[#1AB8DB] p-6 overflow-scroll rounded-[14px]">
                                                       <div>
                                                                  <div className="flex flex-row justify-between">
                                                                             <Paragraph
                                                                                        paragraphText="Title"
                                                                                        paragraphClassName="text-[16px] text-[#1AB8DB] font-bold text-center  "
                                                                             />

                                                                             <Paragraph
                                                                                        paragraphText="Description"
                                                                                        paragraphClassName="text-[16px] text-[#1AB8DB] font-bold text-center  "
                                                                             />
                                                                             <Paragraph
                                                                                        paragraphText="Date"
                                                                                        paragraphClassName="text-[16px] text-[#1AB8DB] font-bold text-center  "
                                                                             />
   <Paragraph
                                                                                        paragraphText="Action Icon"
                                                                                        paragraphClassName="text-[16px] text-[#1AB8DB] font-bold text-center  "
                                                                             />
                                                                  </div>
                                                                  <ul className="list-disc marker:text-sky-400">
                                                                             {todoListData &&
                                                                                        todoListData.length > 0 &&
                                                                                        todoListData.map((item, index) => {
                                                                                                   return (
                                                                                                              <div>
                                                                                                                         <div className=" flex flex-row justify-between m-4 text-[16px] text-[#000]  font-bold">
                                                                                                                                    <li>{item.title}</li>
                                                                                                                                    <div>{item.description}</div>
                                                                                                                                    <div>{item.date}</div>
                                                                                                                                    <div className="flex flex-row ">
                                                                                                                                               {/* <MdModeEditOutline className=" text-[20px] text-[#D4A006] cursor-pointer" />
                                                                                                                                               <MdDelete className="text-[#AE1438] text-[20px] mx-2 cursor-pointer" />
                                                                                                                                               <MdCheckCircleOutline className="text-[20px] text-[#019031] cursor-pointer" /> */}
                                                                                                                                    </div>
                                                                                                                         </div>
                                                                                                                         <hr className="border-[#1AB8DB] text-[#1AB8DB]" />
                                                                                                              </div>
                                                                                                   );
                                                                                        })}
                                                                  </ul>
                                                       </div>
                                            </Card>
                                 </div>
                      </Card>
           );
};

export default TodolistData;
