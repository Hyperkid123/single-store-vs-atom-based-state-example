import JotaiExample from './jotai/JotaiExample';
import OptimizedZustandExample from './optimizedZustand/OptimizedZustandExample';
import ReduxExample from './redux/ReduxExample';
import ZustandExample from './zustand/ZustandExample';

function App() {
  return (
    <div style={{ display: 'flex', padding: '1rem' }}>
      <JotaiExample />
      <hr />
      <ReduxExample />
      <hr />
      <ZustandExample />
      <hr />
      <OptimizedZustandExample />
    </div>
  );
}

export default App;
