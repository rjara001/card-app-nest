

import { IUser } from '../interfaces/IUser';
import AWS, { DynamoDB } from 'aws-sdk';
import { config } from 'aws-sdk/global';


const dotenv = require('dotenv');
dotenv.config();

config.update({
  accessKeyId: process.env.DYNAMO_ACCESS_KEY_ID,
  secretAccessKey: process.env.DYNAMO_SECRET_ACCESS_KEY,
  region: process.env.DYNAMO_REGION // specify the region where your DynamoDB table is located
});

const docClient = new DynamoDB.DocumentClient();

export async function updateUser(user: IUser): Promise<void> {
  const params: DynamoDB.DocumentClient.UpdateItemInput = {
    TableName: 'User',
    Key: {
      'IdUser': user.IdUser
    },
    UpdateExpression: 'set Groups = :groups',
    ExpressionAttributeValues: {
      ':groups': user.Groups
    }
  };
  await docClient.update(params).promise();
}

export const saveUser = async (user: IUser): Promise<void> => {

  const params: DynamoDB.DocumentClient.PutItemInput = {
    TableName: 'User',
    Item: user
  };
  await docClient.put(params).promise();

  console.log('saved ok');
};

export const getUser = async (userId: string): Promise<IUser> => {
  const params: DynamoDB.DocumentClient.GetItemInput = {
    TableName: 'User',
    Key: {
      IdUser: userId,
    },
  };

  try {
    const result = await docClient.get(params).promise();
    if (!result.Item) {
      return null;
    }
    return result.Item as IUser;
  } catch (error) {
    console.error('Error retrieving user: ', error);
    return null;
  }
};




