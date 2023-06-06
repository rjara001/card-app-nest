import { StatusChange } from '../interfaces/Enums'
export interface IGroup {
    Id: string
    Name: string
    Words: string
    LastModified: Date
    Status: StatusChange
}

