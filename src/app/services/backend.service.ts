import { HttpClient, HttpHeaders, HttpResponse, HttpStatusCode } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../model/user.model";
import { Endpoints } from "../constants/endpoints";
import { Observable } from "rxjs";
import { ApiError } from "../model/apierror.model";
import { StorageService } from "./storage.service";
import { UserService } from "./user.service";
import { FileInfo } from "../model/file-info.model";

@Injectable()
export class BackendService {
  constructor(private http: HttpClient, private storageSvc: StorageService) { }

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

  uploadFile(file: File): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    const authToken = this.storageSvc.getJwtToken();
    headers = headers.append('Authorization', 'Bearer '.concat(authToken));

    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(Endpoints.FILE_UPLOAD, formData, {
      headers: headers
    });
  }

  listFilesInfo(username: string): Observable<FileInfo[]> {
    let headers: HttpHeaders = new HttpHeaders();
    const authToken = this.storageSvc.getJwtToken();
    headers = headers.append('Authorization', 'Bearer '.concat(authToken));

    const url = Endpoints.GET_ALL_FILE_INFO.replace('{USER_NAME}', username)
    return this.http.get<FileInfo[]>(url, {
      headers: headers
    });
  }

  deleteFileInfo() {
    
  }
}
