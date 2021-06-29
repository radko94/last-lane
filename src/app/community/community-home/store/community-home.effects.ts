import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as actions from './community-home.actions';

@Injectable()
export class CommunityHomeEffects {
  constructor(
    private readonly _actions$: Actions
  ) {}

  public getLatestPosts$ = createEffect(() => this._actions$.pipe(
    ofType<ReturnType<typeof actions.getLatestPostsAction>>(actions.getLatestPostsAction),
  ))
}
