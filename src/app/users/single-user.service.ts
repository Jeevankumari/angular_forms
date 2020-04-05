import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SingleUser } from './single-user'

@Injectable({
  providedIn: 'root'
})
export class SingleUserService {

  constructor(private http: HttpClient) { }

  getUserDetail(id : number): Observable<SingleUser[]>{
    return this.http.get<SingleUser[]>('https://reqres.in/api/users/'+id);
  }
}
