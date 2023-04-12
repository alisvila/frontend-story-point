interface User {
  email: string;
  password: string;
}

export type Role = 'Admin' | 'User' | 'All';

export default User;
