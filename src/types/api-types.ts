import { AppDispatch, State } from '../store/state';
import { AxiosInstance } from 'axios';
import { AuthData } from './auth-data';
import { UserData } from './user-data';

export type U = undefined;

export type A = AuthData;

export type R = {
  comment: string;
  rating: number;
  offerId: string;
};

export type V = void;

export type I = string;

export type C = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};
