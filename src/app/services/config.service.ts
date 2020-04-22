import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IConfig } from '../models/config.interface';

@Injectable(
  { providedIn: 'root' }
)
export class ConfigService {

  url = `{environment.apiUrl}config.json`;

  constructor(private _http: HttpClient) {}

  getConfig(): Observable<IConfig> {
    return this._http.get<IConfig>(this.url);
  }
}
