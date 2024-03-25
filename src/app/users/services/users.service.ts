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

  constructor(private http: HttpClient) {

    this.loadLocalStorage();
    console.log(this.user);

  }

  private saveLocalStorage(): void {

    localStorage.setItem('user', JSON.stringify(this.user));

  }

  private loadLocalStorage(): void {
    if(!localStorage.getItem('user')) return;

    this.user = JSON.parse(localStorage.getItem('user')!);

  }

  deletedLocalStorage(): void {

    localStorage.removeItem('user');

  }

  getUsers():Observable<User[]> {

    return this.http.get<User[]>(`${this.baseUrl}/users`)
      .pipe(
        catchError( error => of([]))
      );

  }

  saveUserData(userData: User): void {
    this.user = userData;
    this.saveLocalStorage();
  }



}
