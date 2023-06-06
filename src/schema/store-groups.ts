

// import { IGroup } from '../interfaces/IGroup';
// import AWS, { DynamoDB } from 'aws-sdk';
// import { config } from 'aws-sdk/global';

// config.update({
//   accessKeyId: process.env.DYNAMO_ACCESS_KEY_ID,
//   secretAccessKey: process.env.DYNAMO_SECRET_ACCESS_KEY,
//   region: process.env.DYNAMO_REGION // specify the region where your DynamoDB table is located
// });

// const docClient = new DynamoDB.DocumentClient();

// export async function updateGroup(group: IGroup): Promise<void> {
//   const params: DynamoDB.DocumentClient.UpdateItemInput = {
//     TableName: 'Groups',
//     Key: {
//       'Groups_PT': group.Name
//     },
//     UpdateExpression: 'set Words = :Words',
//     ExpressionAttributeValues: {
//       ':Words': group.Words
//     }
//   };
//   await docClient.update(params).promise();
// }

// export const saveGroup = async (group: IGroup): Promise<void> => {

//   const params: DynamoDB.DocumentClient.PutItemInput = {
//     TableName: 'Groups',
//     Item: group
//   };
//   await docClient.put(params).promise();

//   console.log('saved ok');
// };

// export const getUser = async (userId: string): Promise<IGroup> => {
//   const params: DynamoDB.DocumentClient.GetItemInput = {
//     TableName: 'Groups',
//     Key: {
//       IdUser: userId,
//     },
//   };

//   try {
//     const result = await docClient.get(params).promise();
//     if (!result.Item) {
//       return null;
//     }
//     return result.Item as IGroup;
//   } catch (error) {
//     console.error('Error retrieving user: ', error);
//     return null;
//   }
// };




