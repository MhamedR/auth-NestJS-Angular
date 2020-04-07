import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private uri: string = '/users/createUser';

  constructor(private http: HttpClient) { }

  // Create user
  createUser(user: any) {
    return this.http.post<any>(`${environment.apiUrl}` + this.uri, user)
  }
}
