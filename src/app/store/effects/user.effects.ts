import { Effect, Actions } from '@ngrx/effects';
import { IAppState } from '../state/app.state';
import { Store } from '@ngrx/store';

export class UserEffect {
  @Effect()
  getUser$ = this._actions$.pipe()

  constructor(
    private _userService: UserService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
