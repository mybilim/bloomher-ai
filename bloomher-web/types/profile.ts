export interface UserProfile {
  uid: string;
  name: string;
  email: string;
  age?: number;
  avatar?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
