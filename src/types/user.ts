export interface User {
  _id: string;

  name: string;
  email: string;
  image?: string;

  role: "user" | "admin";

  status: "active" | "blocked";
}

export interface UsersResponse {
  success: boolean;

  message: string;

  users: User[];
}

export interface UpdateUserRoleResponse {
  success: boolean;

  message: string;
}

export interface UpdateUserStatusResponse {
  success: boolean;

  message: string;
}