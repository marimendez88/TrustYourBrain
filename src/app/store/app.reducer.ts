import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';
import { RootState } from '../models/states.model'

export const appReducers: ActionReducerMap<RootState> = {
  // user: UsersState,
  // game: GameState,
  // previousGames: GameState[],
  gameConfig: reducers.gameConfigReducer
};
