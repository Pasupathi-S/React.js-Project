import React from 'react';
import Button from '../Components/Button/Buton';
import Form from '../Components/Form/Form';
const HomePage = () => {
  // const handleData2 = () => {
  //   alert('hi ram');
  // };
  // const handleData1 = () => {
  //   alert('hi shyam');

  // };

  return (
    <div className="flex flex-row justify-center">
      {/* <Button buttonName="click me" handleClick={handleData2} />
      <Button buttonName="add me" handleClick={handleData1} /> */}
      <div>
        <Form />
      </div>
    </div>
  );
};

export default HomePage;
