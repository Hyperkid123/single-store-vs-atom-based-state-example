import RenderCountDisplay from '../common/RenderCountDisplay';
import useZustandStore from '../zustand/useZustandStore';

const ZustandUserDisplay = () => {
  const userBase = useZustandStore((state) => state.user);
  const isAdmin = useZustandStore((state) => state.user.internal.isAdmin);
  return (
    <div
      style={{
        border: '1px solid black',
        padding: '1rem',
        marginTop: '1rem',
      }}
    >
      <h3>User</h3>
      <pre>{JSON.stringify({ ...userBase, isAdmin }, null, 2)}</pre>
      <RenderCountDisplay />
    </div>
  );
};

export default ZustandUserDisplay;
