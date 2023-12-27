import React from 'react';
import Paragraph from '../Components/Paragraph/Paragraph';
import TextFeild from '../Components/TextFeild/TextFeild';
import Button from '../Components/Button/Buton';

const PageForm2 = () => {
           const [email, setEmail] = React.useState();
           const [password, setPassword] = React.useState();
           const [show, setShow] = React.useState(false)


           const getEmailValue = (e, value) => {
                      if (value === "email") {
                                 setEmail(e.target.value)    
                      } else if (value==="password") {
                                 setPassword(e.target.value)   
                      }
                      

           }

           


           const clickButton = () => {
                      setShow(true)

                      let submitteData = {
                                 "data1": email,
                                 "data2": password
                      }

                      localStorage.setItem("loginData", submitteData)
                      
           }
           return (
                      <div className="flex flex-row justify-center mt-14 ">
                                 <div className="bg-[#758283] w-[500px] h-[700px]">
                                            <div className="flex flex-row justify-center">
                                                       <div>
                                                                  <Paragraph
                                                                             paragraphText=" Login Form "
                                                                             paragraphClassName=" text-[32px] text-[#35BDD0] font-[800] m-12"
                                                                  />
                                                                  <TextFeild
                                                                             placeholderText="Email...."
                                                                             classOfTextFeild=" border-[2px] rounded-lg p-4 border-[#120E43] mt-6"
                                                                             changeInput={(e)=>getEmailValue(e,"email")}
                                                                  />
                                                                  <TextFeild
                                                                             placeholderText="Password...."
                                                                             classOfTextFeild=" border-[2px] rounded-lg p-4 border-[#120E43] mt-4"
                                                                             changeInput={(e)=>getEmailValue(e,"password")}
                                                                  />
                                                                  {
                                                                             show &&

                                                                             (
                                                                                        <Paragraph
                                                                                                   paragraphText=" SuccessFully submitted "
                                                                                                   paragraphClassName=" text-[32px] text-[#120E43] font-[400] "
                                                                                        />
                                                                             )
                                                                  }
                                                                  <Button buttonName="Submit" handleClick={clickButton} />
                                                       </div>

                                            </div>
                                            <Paragraph
                                                       paragraphText={email}
                                                       paragraphClassName=" text-[32px] text-[#35BDD0] font-[800] m-12"
                                            />
                                            <Paragraph
                                                       paragraphText={password}
                                                       paragraphClassName=" text-[32px] text-[#35BDD0] font-[800] m-12"
                                            />
                                 </div>
                      </div>
           );
};

export default PageForm2;
