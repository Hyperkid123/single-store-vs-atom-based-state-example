import { Provider } from 'react-redux';
import ReduxCounter from './ReduxCounter';
import ReduxUserDisplay from './ReduxUserDisplay';
import store from './store';

const ReduxExample = () => {
  return (
    <Provider store={store}>
      <div>
        <h2>Redux example</h2>
        <ReduxCounter />
        <ReduxUserDisplay />
      </div>
    </Provider>
  );
};

export default ReduxExample;
