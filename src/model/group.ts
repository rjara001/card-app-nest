import { IGroup } from "src/interfaces/IGroup";

export class Group implements IGroup {
    Id: string;
    Name: string;
    Words: string;
    LastModified: Date;
    Status: StatusChange;

    // constructor(name:string) {
    //     this.Name = name;
    //     this.Words = btoa('[]');
    // }
}   