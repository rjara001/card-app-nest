import { IUser } from '../interfaces/IUser';
export declare function updateUser(user: IUser): Promise<void>;
export declare const saveUser: (user: IUser) => Promise<void>;
export declare const getUser: (userId: string) => Promise<IUser>;
