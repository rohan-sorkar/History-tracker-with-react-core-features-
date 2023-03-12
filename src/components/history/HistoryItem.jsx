import React from 'react'
import HistoryText from '../ui/historyText';
import RestoreBtn from '../ui/restoreBtn';

const HistoryItem = (props) => {
  const {history, restoredHistory, restoredHandler}  = props;
  return (
    <div className='history'>
      <HistoryText history={history}/>
      <RestoreBtn history={history} restoredHistory={restoredHistory} restoredHandler={restoredHandler}/>
    </div>
  )
}

export default HistoryItem;