import { useAtom } from 'jotai';
import { counterAtom } from './atoms';
import RenderCountDisplay from '../common/RenderCountDisplay';

const JotaiCounter = () => {
  const [count, setCount] = useAtom(counterAtom);

  return (
    <div
      style={{
        border: '1px solid black',
        padding: '1rem',
      }}
    >
      <h3>Counter</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <RenderCountDisplay />
    </div>
  );
};

export default JotaiCounter;
