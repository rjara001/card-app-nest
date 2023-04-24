import { IGroup } from "src/interfaces/IGroup";
export declare class Group implements IGroup {
    Id: string;
    Name: string;
    Words: string;
    LastModified: Date;
    Status: StatusChange;
}
