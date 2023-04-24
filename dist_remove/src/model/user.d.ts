import { IGroup } from "src/interfaces/IGroup.js";
import { IUser } from "src/interfaces/IUser";
export declare class User implements IUser {
    IdUser: string;
    Groups: IGroup[];
    constructor();
}
