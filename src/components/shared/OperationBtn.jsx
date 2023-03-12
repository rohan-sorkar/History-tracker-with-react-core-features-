const OperationBtn = (props) => {
  const { operation, arithMeticHandler, activeButton } = props;

  const activeBtn = activeButton === operation ? {backgroundColor: '#414a4c', color: 'white'} : {}
  return (
    <>
      <button onClick={() => arithMeticHandler(operation)} style={activeBtn}>
        {operation}
      </button>
    </>
  );
};

export default OperationBtn;
