import React from "react";

const ClearBtn = ({clearHandler}) => {
  return (
    <>
      <button onClick={clearHandler} className="clear_btn">clear</button>
    </>
  );
};

export default ClearBtn;
