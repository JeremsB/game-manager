import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Game} from "./game-list/game";

@Injectable({
  providedIn: 'root'
})

export class GameCategoryFakeApiServiceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Game[]> {
    // service, methode, type de retour, url
    return this.http.get<Game[]>('http://localhost:4200');
  }
}
