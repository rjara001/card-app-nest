import { IGroup } from '../interfaces/IGroup';
export declare function updateGroup(group: IGroup): Promise<void>;
export declare const saveGroup: (group: IGroup) => Promise<void>;
export declare const getUser: (userId: string) => Promise<IGroup>;
