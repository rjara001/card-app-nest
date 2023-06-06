import { IGroup } from "../interfaces/IGroup.js";
import { IUser } from "../interfaces/IUser";

export class User implements IUser {
    IdUser: string;
    Groups: IGroup[];

    constructor() {
        
    }
}