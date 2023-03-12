import React from "react";

const RestoreBtn = (props) => {
  const {history, restoredHistory, restoredHandler}  = props;
  return (
    <>
      <button className="restore_btn" onClick={() => restoredHandler(history)} disabled={history.id === restoredHistory}>Restore</button>
    </>
  );
};

export default RestoreBtn;
