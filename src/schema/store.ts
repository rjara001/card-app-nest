import { IUser } from './../interfaces/IUser';
import { UserModel } from "./user-schema";

export const updateUser = async (user: IUser): Promise<void> => {

        await UserModel.update(user);

        console.log('udapted ok');
};

export const saveUser = async (user: IUser): Promise<void> => {

    await UserModel.create(user);

    console.log('created ok');
  };

export const getUser = async (userId: string): Promise<IUser> => {

    return await UserModel.get({IdUser:userId}) as unknown as IUser
};

  
  
  
  