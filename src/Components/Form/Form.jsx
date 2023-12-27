import Button from "../Button/Buton"
import Paragraph from "../Paragraph/Paragraph"
import TextFeild from "../TextFeild/TextFeild"

const Form = () => {
           const handleInput = () => {
           
}
           return (
                      <div className="bg-[#12B0E8] w-[500px] h-[400px] flex flex-row justify-center mt-12">

                                 <div className="mt-12">
                                            <Paragraph paragraphText="To-Do-App" paragraphClassName="text-[24px] text-[#120E43] font-bold" />
                                            <TextFeild placeholderText="write text-here" classOfTextFeild=" border-[2px] rounded-lg p-4 border-[#120E43]" changeInput={handleInput}/>

                                            <div className="mt-12">

                                                       <Button className="bg-[#EDC126] text-[16px] text-[#FFF] border-[2px] mt-4 border-[#120E43] font-bold p-4" buttonName="Add-Data" />

                                            </div>

                                 </div>

                      </div>
           )

}

export default Form