import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message} from './message'
@Injectable()
export class WebService {
  BASE_URL = 'http://localhost:4000/messages';

  constructor(
    private http: HttpClient,
  ) {}

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.BASE_URL)
  }

}
