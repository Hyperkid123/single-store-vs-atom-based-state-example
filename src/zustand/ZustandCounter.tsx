import RenderCountDisplay from '../common/RenderCountDisplay';
import useZustandStore from './useZustandStore';

const ZustandCounter = () => {
  const { count, increment } = useZustandStore();

  return (
    <div
      style={{
        border: '1px solid black',
        padding: '1rem',
      }}
    >
      <h3>Counter</h3>
      <p>Count: {count}</p>
      <button onClick={increment}>+1</button>
      <RenderCountDisplay />
    </div>
  );
};

export default ZustandCounter;
