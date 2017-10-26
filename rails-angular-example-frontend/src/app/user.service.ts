import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class UserService {

  constructor(private http: Http) { }

  isValid(): Boolean {
    // return true;
    return false;
  }

  login(email, password): Observable<Response> {
    return this.http.post('/api/login', { email: email, password: password });
  }

}



// import { Injectable } from '@angular/core';

// @Injectable()
// export class UserService {
//   constructor (
//     private http: Http
//   ) {}

//   getUser() {
//     return this.http.get(`https://conduit.productionready.io/api/profiles/eric`)
//     .map((res:Response) => res.json());
//   }

// }