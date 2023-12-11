import { useDispatch, useSelector } from 'react-redux';
import RenderCountDisplay from '../common/RenderCountDisplay';
import { ReduxState, increment } from './store';

const ReduxCounter = () => {
  const count = useSelector((state: ReduxState) => state.count);
  const dispatch = useDispatch();
  const dispatchedIncrement = () => dispatch(increment());

  return (
    <div
      style={{
        border: '1px solid black',
        padding: '1rem',
      }}
    >
      <h3>Counter</h3>
      <p>Count: {count}</p>
      <button onClick={dispatchedIncrement}>+1</button>
      <RenderCountDisplay />
    </div>
  );
};

export default ReduxCounter;
