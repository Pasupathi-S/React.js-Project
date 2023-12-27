import React from 'react';

const TextFeild = (props) => {
           return (
                      <div>
                                 <input className={props.classOfTextFeild} type={props.type} onChange={props.changeInput} placeholder={props.placeholderText} name={props.name} value={props.value} />
                      </div>
           );
};
export default TextFeild