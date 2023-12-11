import { useAtomValue } from 'jotai';
import { userAtom } from './atoms';
import RenderCountDisplay from '../common/RenderCountDisplay';

const JotaiUserDisplay = () => {
  const user = useAtomValue(userAtom);
  return (
    <div
      style={{
        border: '1px solid black',
        padding: '1rem',
        marginTop: '1rem',
      }}
    >
      <h3>User</h3>
      <pre>
        {JSON.stringify({ ...user, isAdmin: user.internal.isAdmin }, null, 2)}
      </pre>
      <RenderCountDisplay />
    </div>
  );
};

export default JotaiUserDisplay;
