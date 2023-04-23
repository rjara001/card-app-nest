import { IGroup } from "src/interfaces/IGroup.js";
import { IUser } from "src/interfaces/IUser";

export class User implements IUser {
    IdUser: string;
    Groups: IGroup[];

    constructor() {
        
    }
}