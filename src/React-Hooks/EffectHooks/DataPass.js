import React, { useContext } from 'react';
import Paragraph from '../../Components/Paragraph/Paragraph';
import { FirstContext } from '../UseContextHook/Context';
import { SecondContext } from '../UseContextHook/SecondContext';

function DataPass() {
   let {colorCode,record} = useContext(FirstContext);

  let secondContext = useContext(SecondContext);

  console.log('First Context:', record);
  console.log('Second Context:', secondContext);
  console.log('colorCode:', colorCode);



  return (
    <div className='mx-4'>
      {record.map((item,index )=>{
        return (
        <div key={index}>
          <h6 className='text-success'>{item.id}</h6>
        <Paragraph paragraphClassName="fs-5 text-danger" paragraphText={item.title} />
        </div>
      )})}
{secondContext.map(el=>(
  <>
      <Paragraph paragraphClassName="fs-3 text-info" paragraphText={el.data} />
      <Paragraph paragraphClassName="fs-3 text-info" paragraphText={el.data1} />

</>
))}
   {/* <h1 className="text-info">{secondContext.data}</h1>    */}
   <div className="bg-[#807e80]  w-100 border border-info rounded">
<div className='gap-3 d-flex flex-wrap p-4'>
{colorCode && colorCode.length > 0 ? (
  colorCode.map((item, index) => (
    <div key={index} className='w-[100px] h-[100px] rounded' style={{ backgroundColor: item }}></div>
  ))
) : (
  <div>No color data available</div>
)}

</div>
   </div>
    </div>
    
  );
}

export default DataPass;
