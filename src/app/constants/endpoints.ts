/*
Class containing all the Backend API Endpoints
*/
export class Endpoints {
  public static BASE_URL = "http://localhost:8080/api";
  public static LOGIN = this.BASE_URL + "/login";
  public static CREATE_ACCOUNT = this.BASE_URL + "/create-account";

  public static GET_ALL_USERS = this.BASE_URL + "/users/";
  public static GET_USER = this.BASE_URL + "/users/{USER_NAME}";
  public static UPDATE_USER = this.BASE_URL + "/users/{USER_NAME}";
  public static DELETE_USER = this.BASE_URL + "/users/{USER_NAME}";

  public static FILE_UPLOAD = this.BASE_URL + "/contents/upload";
  public static FILE_DOWNLOAD = this.BASE_URL + "/contents/{FILE_UID}/download";
  public static FILE_INFO = this.BASE_URL + "/contents/{FILE_UID}/view";
  public static GET_ALL_FILE_INFO =
    this.BASE_URL + "/contents/user/{USER_NAME}";
}
