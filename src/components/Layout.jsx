import React from "react";

export const Layout = (props) => {
  return (
    <>
      <div className="col-md-4 p-4" >
        <div className="card p-3">
          <h3 className="text-center">{props.head}</h3>
            {props.children}
          <br />
        </div>
      </div>
    </>
  );
};
