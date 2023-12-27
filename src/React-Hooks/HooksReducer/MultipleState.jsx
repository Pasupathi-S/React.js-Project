import React from 'react';
import Button from '../../Components/Button/Buton';
import Paragraph from '../../Components/Paragraph/Paragraph';



const MultipleState = () => {
           const [red, setRed] = React.useState();
           const [blue, setBlue] = React.useState();
           const [green, setGreen] = React.useState();
           const [yellow, setYellow] = React.useState();
           const [final, setFinal] = React.useState()


           const colorChange = (data) => {
                      // console.log("buttonName:",data)
                      setFinal(data)
                      if (data === "red") {
                                 setRed("#E71C23")

                      } else if (data === "green") {
                                 setGreen("#019031")
                      }
                      else if (data === "yellow") {
                                 setYellow("#F3B431")
                      }
                      else if (data === "blue") {
                                 setBlue("#192A56")
                      }

           }

           let backGroundColor = final === "red" ? red : final === "green" ? green : final === "blue" ? blue : final === "yellow" ? yellow : "#FFF"
           //console.log("backGroundColor:",backGroundColor)
           return (
                      <div className="flex flex-row justify-center mr-6">
                                 <div className="border-[2px] border-[#002266] w-[700px] h-[700px] mt-12 bg-[#57534E] shadow-2xl shadow-[#660013]">
                                 <Paragraph paragraphText="Changing Background using State" paragraphClassName="text-[24px] text-center text-[#1C1917] font-bold"/>
                                            <div className="flex flex-row justify-center">
                                                       <div className="border-[2px] border-[#002266] w-[400px] h-[400px] mt-12" style={{ backgroundColor: `${backGroundColor}` }}></div>
                                            </div>
                                            <div className="flex flex-row justify-between mt-24 mx-4">
                                                       <Button
                                                                  buttonName="Red"
                                                                  className="bg-[#8C0015] w-[100px] h-[50px] border-none text-[#FFF] outline-none rounded-[24px] text-[16px]"
                                                                  handleClick={(() => colorChange("red"))}
                                                       />
                                                       <Button
                                                                  buttonName="Blue"
                                                                  className="bg-[#192A56] w-[100px] h-[50px] border-none outline-none rounded-[24px] text-[16px] text-[#FFF]"
                                                                  handleClick={(() => colorChange("blue"))}
                                                       />
                                                       <Button
                                                                  buttonName="Green"
                                                                  className="bg-[#019031] w-[100px] h-[50px] border-none outline-none rounded-[24px] text-[16px] text-[#FFF]"
                                                                  handleClick={(() => colorChange("green"))}
                                                       />
                                                       <Button
                                                                  buttonName="yellow"
                                                                  className="bg-[#FAD02E] w-[100px] h-[50px] border-none outline-none rounded-[24px] text-[16px] text-[#FFF]"
                                                                  handleClick={(() => colorChange("yellow"))}
                                                       />
                                            </div>
                                 </div>
                      </div>
           );
};

export default MultipleState;
