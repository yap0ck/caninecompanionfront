export interface LoginForm{
  username: string,
  password: string
}

export interface AuthDTO{
  token: string,
  username: string,
  userRoles: string[]
}
enum UserRole{
  ADMIN,
  HELPER,
  INTERN,
  CUSTOMER
}


