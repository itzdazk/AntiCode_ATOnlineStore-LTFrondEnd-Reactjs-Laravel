import React from "react";

const TittleCollection = (props) => {
  return (
    <div className="container">
      <div className="row ">
        <div className={props.tittleClass + " my-5"}>
          <h2 className="text-center">{props.tittle}</h2>
        </div>
      </div>
    </div>
  );
};

export default TittleCollection;
