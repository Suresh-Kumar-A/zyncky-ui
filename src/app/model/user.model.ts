export interface User {
  id: number;
  uid: string;
  userName: string;
  displayName: string;
  password: string;
  locked: boolean;
  roleName: String;
  createdAt: Date;
}
