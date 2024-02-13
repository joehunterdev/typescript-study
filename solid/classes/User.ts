import { IUser } from '../interfaces/IUser';

class User implements IUser {
  public userName: string;
  public score: number; 
  public realName?: string; // Change the access modifier to public

  constructor(userName: string, score: number, realName?: string) {
    this.userName = userName;
    this.score = score;
    this.realName = realName;
  }
}
export { User };