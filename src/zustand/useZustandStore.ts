import { create } from 'zustand';
import { UserType, user } from '../common/user';

type ZustandState = {
  user: UserType;
  count: number;
};

type ZustandActions = {
  increment: () => void;
};

const useZustandStore = create<ZustandState & ZustandActions>((set) => ({
  count: 0,
  user: user,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

export default useZustandStore;
