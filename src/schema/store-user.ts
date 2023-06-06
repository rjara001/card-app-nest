

import { IUser } from '../interfaces/IUser';
import AWS, { DynamoDB } from 'aws-sdk';
import { config } from 'aws-sdk/global';
import { createOrUpdate, getUserById } from './user.db.js';

export const saveUser = async (user: IUser): Promise<void> => {

  const { success } = await createOrUpdate({ IdUser: user.IdUser, Groups: user.Groups });
};

export const getUser = async (userId: string): Promise<IUser> => {
  console.log(`trying to get the info of ${userId}`);
  
  let result = await getUserById(userId);

  return result.data;
};




