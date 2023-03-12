import InputField from "../shared/InputField";
import OperationBtn from "../shared/OperationBtn";
import ClearBtn from "../ui/clearBtn";

const Operation = (props) => {
  const {
    inputState,
    onChangeHandler,
    arithMeticHandler,
    clearHandler,
    activeButton,
  } = props;
  return (
    <div>
      <InputField
        type={"number"}
        name={"a"}
        value={inputState.a}
        onchangeHandler={onChangeHandler}
      />
      <InputField
        type={"number"}
        name={"b"}
        value={inputState.b}
        onchangeHandler={onChangeHandler}
      />

      <div className="btn_group">
        <OperationBtn
          arithMeticHandler={arithMeticHandler}
          operation={"+"}
          activeButton={activeButton}
        />
        <OperationBtn
          arithMeticHandler={arithMeticHandler}
          operation={"-"}
          activeButton={activeButton}
        />
        <OperationBtn
          arithMeticHandler={arithMeticHandler}
          operation={"*"}
          activeButton={activeButton}
        />
        <OperationBtn
          arithMeticHandler={arithMeticHandler}
          operation={"/"}
          activeButton={activeButton}
        />

        <ClearBtn clearHandler={clearHandler} />
      </div>
    </div>
  );
};

export default Operation;
