import HistoryItem from "./HistoryItem";

const History = (props) => {
  const {histories, restoredHistory, restoredHandler} = props;
  return (
    <div>
      {
        histories.map((history) => (<HistoryItem key={history.id} history={history} restoredHistory={restoredHistory} restoredHandler={restoredHandler} />))
      }
    </div>
  );
};

export default History;
