import { PropsWithChildren } from 'react';
import JotaiExample from './jotai/JotaiExample';
import OptimizedZustandExample from './optimizedZustand/OptimizedZustandExample';
import ReduxExample from './redux/ReduxExample';
import ZustandExample from './zustand/ZustandExample';

const Wrapper = ({ children }: PropsWithChildren) => {
  return <div style={{ margin: 16 }}>{children}</div>;
};

function App() {
  return (
    <div style={{ display: 'flex', padding: '1rem', flexWrap: 'wrap' }}>
      <Wrapper>
        <JotaiExample />
      </Wrapper>
      <Wrapper>
        <ReduxExample />
      </Wrapper>
      <Wrapper>
        <ZustandExample />
      </Wrapper>
      <Wrapper>
        <OptimizedZustandExample />
      </Wrapper>
    </div>
  );
}

export default App;
