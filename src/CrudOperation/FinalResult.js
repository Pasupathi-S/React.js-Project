import React from "react";
import FormUsereducer from "./FormUsereducer";
import Userlist from "./Userlist";
import "../Style/style.css";

const initialState = false;

const reducer = (state, action) => {
  if (action.type === "rec") {
    return !state;
  } else {
    return state;
  }
};

function FinalResult() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <>
    <div className="">
      <div className=" row ">
        <div className="col-md-5 ">
          <FormUsereducer />
        </div>
        <div className="col-md-7 ">
          <Userlist state={state} />
        </div>
      </div>
      </div> 
            

    </>
  );
}

export default FinalResult;
