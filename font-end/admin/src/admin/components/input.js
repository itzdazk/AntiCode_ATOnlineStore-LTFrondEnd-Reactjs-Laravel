import React from "react";

const Input = (props) => {
  return (
    <div className="row mb-3">
      <div className="col-4 ">
        <label htmlFor={props.id} className={props.labelClass + " w-100"}>
          {props.label}
        </label>
      </div>
      <div className="col-8">
        <input
          type={props.type}
          ref={props.inputRef}
          className="form-control"
          id={props.id}
        />
      </div>
    </div>
  );
};

export default Input;
