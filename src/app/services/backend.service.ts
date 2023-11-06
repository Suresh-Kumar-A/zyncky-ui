import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../model/user.model";
import { Endpoints } from "../constants/endpoints";
import { Observable } from "rxjs";

@Injectable()
export class BackendService {
  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<User> {
    user.createdAt = new Date();
    return this.http.post<User>(Endpoints.CREATE_ACCOUNT, user);
  }

  loginUser(user: User): Observable<User> {
    return this.http.post<User>(Endpoints.LOGIN, user);
  }
}
