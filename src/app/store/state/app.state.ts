import { RouterReducerState } from '@ngrx/router-store';
import { IUsersState, initialUserState } from './user.state';
import { IConfigState, initialConfigState } from './config.state';


export interface IAppState {
  router?: RouterReducerState;
  users: IUsersState;
  config: IConfigState
}

export const initialAppState: IAppState = {
  users: initialUserState,
  config: initialConfigState
}

export function getInitialState(): IAppState {
  return initialAppState;
}
