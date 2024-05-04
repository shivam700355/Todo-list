import React from "react";

export const Layout = (props) => {
  return (
    <>
      <div className="col-4">
        <div className="card">
          <h3 className="text-center">{props.head}</h3>
            {props.children}
          <br />
        </div>
      </div>
    </>
  );
};
