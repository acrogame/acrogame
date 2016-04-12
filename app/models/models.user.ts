export interface IUser {
  name: string;
  email: string;
}

export class UserModel implements IUser {

  private isAdmin: boolean;
  private isBanned: boolean;
  private id: string;
  
  name: string;
  email: string;
    
  constructor(user: IUser, id?: string, isAdmin?: boolean, isBanned?: boolean) {
    this.name = user.name;
    this.email = user.email;
    this.id = id || null;
    this.isAdmin = isAdmin || false;
    this.isBanned = isBanned || false;
  }
  
  getId() {
    return this.id;
  }
  
  getStatus() {
    return {
      admin: this.isAdmin,
      banned: this.isBanned
    }
  }
}