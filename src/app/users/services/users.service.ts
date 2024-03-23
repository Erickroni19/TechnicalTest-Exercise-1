import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { User } from '../interfaces/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string = 'https://jsonplaceholder.typicode.com';

  public user?: User;

  constructor(private http: HttpClient) { }

  getUsers():Observable<User[]> {

    return this.http.get<User[]>(`${this.baseUrl}/users`)
      .pipe(
        catchError( error => of([]))
      );

  }

  saveUserData(userData: User): void {
    this.user = userData;
  }
}
