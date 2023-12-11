import { useSelector } from 'react-redux';
import RenderCountDisplay from '../common/RenderCountDisplay';
import { ReduxState } from './store';

const ReduxUserDisplay = () => {
  const user = useSelector((state: ReduxState) => ({
    ...state.user,
    isAdmin: state.user.internal.isAdmin,
  }));
  return (
    <div
      style={{
        border: '1px solid black',
        padding: '1rem',
        marginTop: '1rem',
      }}
    >
      <h3>User</h3>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <RenderCountDisplay />
    </div>
  );
};

export default ReduxUserDisplay;
