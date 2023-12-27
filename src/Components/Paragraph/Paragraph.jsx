import React from 'react';

const Paragraph = (props) => {
           return (
                      <div>
                                 <p className={props.paragraphClassName}>{props.paragraphText}</p>
                      </div>
           );
};

export default Paragraph;
