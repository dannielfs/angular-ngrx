import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { ConfigService } from 'src/app/services/config.service';


export class ConfigEffects {

  @Effect()

  constructor(
    private _configService: ConfigService,
    private _actions$: Actions
  ){}
}
