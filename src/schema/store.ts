
import { IUser } from './../interfaces/IUser';
import { UserModel } from "./user-schema";
// import AWS from 'aws-sdk'

// const db = new AWS.DynamoDB.DocumentClient()

export const updateUser = async (user: IUser): Promise<void> => {

    // const result = await UserModel.update(user);
    // console.log('updated ok:' + result);

    await UserModel.update(user);

    console.log('udapted ok');
};

export const saveUser = async (user: IUser): Promise<void> => {

  await UserModel.create(user);

  console.log('created ok');
};

export const getUser = async (userId: string): Promise<IUser> => {

  return await UserModel.get({ IdUser: userId }) as unknown as IUser
};




