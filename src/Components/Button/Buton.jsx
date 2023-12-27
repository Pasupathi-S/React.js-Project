const Button = (props) => {

           
           return (
                      <div className="flex flex-row justify-center">
                                 <button onClick={props.handleClick} className={props.className}>{props.buttonName}</button>
                      </div>
           );
};

export default Button;
