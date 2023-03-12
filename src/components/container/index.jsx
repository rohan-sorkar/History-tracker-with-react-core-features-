import History from "../history";
import Operation from "../operation";
import HistoryHeading from "../ui/historyHeading";
import ResultHeading from "../ui/resultHeading";
import { useApp } from "../../hooks/useApp";

const HistoryContainer = () => {
  const {inputState, result, histories, restoredHistory, activeButton, onChangeHandler, arithMeticHandler, clearHandler, restoredHandler} = useApp();

  return (
    <div className="history_container">
      <ResultHeading result={result}/>

      <Operation inputState={inputState} onChangeHandler={onChangeHandler} arithMeticHandler={arithMeticHandler} clearHandler={clearHandler} activeButton={activeButton} />

      <HistoryHeading totalHistory={histories.length}/>
      <History histories={histories} restoredHistory={restoredHistory} restoredHandler={restoredHandler} />
    </div>
  );
};

export default HistoryContainer;
