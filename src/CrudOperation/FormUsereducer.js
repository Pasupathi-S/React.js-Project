import React from "react";
import { useReducer } from "react";
let reducer = (state, action) => {

    if (action.type === 'name-input') {
      return {
        ...state,
        name: action.payload
      };
    } else if (action.type === 'email-input') {
      return {
        ...state,
        email: action.payload
      };
    } else if (action.type === 'password-input') {
      return {
        ...state,
        password: action.payload
      };
    } 
    else if (action.type === 'clear') {
      return {
        name: "", email: "", password: "" 
      };
    }
    else {
      return state;
    }
  };
  


function FormUsereducer() {
    let [state, dispatch] = useReducer(reducer, { name: "", email: "", password: "" });
  
    let ChangeFun = (e, val) => {
    if (val === "name") {
      dispatch({ type: "name-input", payload: e.target.value });
    } else if (val === "email") {
      dispatch({ type: "email-input", payload: e.target.value });

    } else if (val === "password") {
      dispatch({ type: "password-input", payload: e.target.value });

    }
    
  };
  let Clickfun = () => {
    // let objectFun={
    //     name:state.name,
    //     email:state.email,
    //     password:state.password

    // }
    const newTodo = {
        name: state.name,
        email: state.email,
        password: state.password,
};
// console.log('ttttt',newTodo)
const existingData = JSON.parse(localStorage.getItem('todoData')) || [];

const updatedData = [...existingData, newTodo];

localStorage.setItem('todoData', JSON.stringify(updatedData));

dispatch({ type: 'clear' });


    // console.log('Data',state)
  };
  const clear = () => {
    dispatch({ type: 'clear' });
};

  
  return (
    <div className="p-5">
      <div className=" bg-secondary  border rounded w-[100%]">
        <form action="#">
          <div className=" mt-4 form-group p-5  ">
            <h4 className="text-white text-center pb-4">Crud Operation Form </h4>
            <input
              className="form-control mb-4"
              placeholder="Please enter the name"
              value={state.name}
              onChange={(e) => ChangeFun(e, "name")}
            />
            <input
              className="form-control mb-4"
              placeholder="Please enter the email"
              value={state.email}

              onChange={(e) => ChangeFun(e, "email")}
            />
            <input
              type="password"
              className="form-control"
              placeholder="Please enter the password"
              value={state.password}

              onChange={(e) => ChangeFun(e, "password")}
            />
            <h5>{state.value}</h5>
            <div className="d-flex justify-content-between">           
             <button className="btn btn-success mt-3" onClick={Clickfun}>
              Add
            </button>
            <button className="btn btn-danger mt-3" onClick={clear}>
              Cancel
            </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default FormUsereducer;
