import { HttpClient, HttpResponse, HttpStatusCode } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../model/user.model";
import { Endpoints } from "../constants/endpoints";
import { Observable } from "rxjs";
import { ApiError } from "../model/apierror.model";

@Injectable()
export class BackendService {
  constructor(private http: HttpClient) { }

  // { observe: 'response' } - add this to receive Http Response directly
  // parseHttpErrResponseToApiError(response: HttpResponse<User | ApiError>): ApiError {
  //   if (response.status >= HttpStatusCode.BadRequest) {
  //     const defaultApiError = {
  //       path: '',
  //       mesaage: 'Something Went Wrong',
  //       statusCode: response.status
  //     };
  //     const responseBody: ApiError = (response.body != null) ? response.body : defaultApiError;

  //   }
  // }

  createUser(user: User): Observable<User> {
    user.createdAt = new Date();
    return this.http.post<User>(Endpoints.CREATE_ACCOUNT, user);
  }

  loginUser(user: User): Observable<any> {
    return this.http.post<any>(Endpoints.LOGIN, user);
  }
}
