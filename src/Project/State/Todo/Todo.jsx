import React from 'react';
import Paragraph from '../Components/Paragraph/Paragraph';
import TextFeild from '../Components/TextFeild/TextFeild';
import Button from '../Components/Button/Buton';
import Todolist from '../Components/Todolist/Todolist';
const Todo = () => {
  const [input, setInput] = React.useState('');
  const [todo, setTodo] = React.useState([]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() !== '') {

      setTodo((prev) => {
        return [...prev, input];
      });
    }
    setInput('');
  };
  const remove = (data) => {
    let updatedara = todo.filter((item, index) => index !== data);
    //console.log(updatedara);
    setTodo(updatedara);
  };
  return (
    <div className="relative">
      <div className="flex flex-row justify-center">
        <div className="w-[350px] md:w-[700px] shadow-2xl shadow-[#000] h-[300px] border-[4px] border-[#f4c138] mt-12  bg-gradient-to-r from-[#1d1a0c] to-[#06bfcc]">
          <div className="">
            <Paragraph
              paragraphText="Todo-App"
              paragraphClassName="text-[#E21717] text-[24px] md:text-[36px] font-bold text-center underline font-poppins"
            />
            <div className="flex flex-row justify-center mt-6">
              <div>
                <TextFeild
                  placeholderText="Write text to add.."
                  classOfTextFeild="placeholder:text-[16px] w-[250px] md:w-[500px] h-[70px] border-[2px] placeholder:text-center border-[#120E43] outline-none rounded-[50px] placeholder:font-poppins"
                  changeInput={handleChange}
                  value={input}
                />
                <Button
                  buttonName="Add"
                  className="text-[#FFF] text-[24px] font-bold border-[2px] border-[#be26e4] w-[200px] md:w-[400px] h-[50px] mt-6 rounded-[70px] font-poppins ml-4 md:ml-12  bg-gradient-to-r from-[#F4BE2C] to-[#E21717]"
                  handleClick={handleSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-8 absolute p-4">
        <Todolist list={todo} deleteTodo={remove} />
      </div>
    </div>
  );
};
export default Todo;
