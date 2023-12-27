import React from 'react';

import Card from './Card';
import Icon from '../../Components/Icon/Icon';
import Paragraph from '../../Components/Paragraph/Paragraph';
import Button from '../../Components/Button/Buton';
const LeftSide = (props) => {
           return (
                      <Card className={props.state?"hidden":" block md:w-[50%] h-[718px] hidden md:block bg-danger"}>
                                 <div className="flex flex-row justify-center ">
                                            <div className="w-[400px] h-[600px] bg-[#18181B] mt-12">
                                                       <div className="flex fle-row justify-center mt-24">
                                                                  <Icon iconType={'getStarted'} />
                                                       </div>

                                                       <Paragraph
                                                                  paragraphText="Make successful your day"
                                                                  paragraphClassName="text-[26px] text-[#FFF] text-center mt-12"
                                                       />
                                                       <Paragraph
                                                                  paragraphText="Make small somethings to get big gift in your life"
                                                                  paragraphClassName="text-[14px] text-[#0ABDE3] text-center mt-12"
                                                       />
                                                       <Button
                                                                  className="text-[24px] text-[#FFF] font-bold mt-24 bg-gradient-to-r from-[#E50000]  to-[#1593AFA8] w-[200px] rounded-[50px] h-[40px]"
                                                                  buttonName="Todo list"
                                                                  handleClick={props.redirect}
                                                       />
                                            </div>
                                 </div>
                      </Card>
           );
};

export default LeftSide;
