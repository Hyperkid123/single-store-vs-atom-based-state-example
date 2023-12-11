import { atom } from 'jotai';
import { user } from '../common/user';

export const counterAtom = atom(0);
export const userAtom = atom(user);
