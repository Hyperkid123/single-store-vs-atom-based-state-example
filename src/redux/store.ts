import { Action, createStore } from 'redux';
import { UserType, user } from '../common/user';

export type ReduxState = {
  count: number;
  user: UserType;
};

const initialState: ReduxState = {
  count: 0,
  user,
};

// I realize the createStore is deprecated, but I'm using it for simplicity
const store = createStore<ReduxState, Action<string>>(
  (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: state.count + 1 };
      default:
        return state;
    }
  }
);

export const increment = () => ({ type: 'INCREMENT' });

export default store;
