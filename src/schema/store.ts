import { IUser } from './../interfaces/IUser';
import { IGroup } from './../interfaces/IGroup';
import { UserModel } from "./user-schema";
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export const saveUser = async (user: IUser): Promise<IUser> => {
    const newUser = new UserModel(user);
    await newUser.save();
    return newUser.toJSON() as IUser;
  };

 
export const getUser = async (userId: string): Promise<IUser> => {
    const dynamodb = new DocumentClient();
  
    const params = {
      TableName: 'User',
      KeyConditionExpression: '#IdUser = :userId',
      ExpressionAttributeNames: {
        '#IdUser': 'IdUser',
      },
      ExpressionAttributeValues: {
        ':userId': userId,
      },
    };
  
    const data = await dynamodb.query(params).promise();
    if (data.Count === 0) {
      throw new Error(`User with ID ${userId} not found`);
    }
  
    return data.Items[0] as IUser;
  };

  
  
  
  