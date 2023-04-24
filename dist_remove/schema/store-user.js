"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.saveUser = exports.updateUser = void 0;
const aws_sdk_1 = require("aws-sdk");
const global_1 = require("aws-sdk/global");
global_1.config.update({
    accessKeyId: process.env.DYNAMO_ACCESS_KEY_ID,
    secretAccessKey: process.env.DYNAMO_SECRET_ACCESS_KEY,
    region: process.env.DYNAMO_REGION
});
const docClient = new aws_sdk_1.DynamoDB.DocumentClient();
async function updateUser(user) {
    const params = {
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
exports.updateUser = updateUser;
const saveUser = async (user) => {
    const params = {
        TableName: 'User',
        Item: user
    };
    await docClient.put(params).promise();
    console.log('saved ok');
};
exports.saveUser = saveUser;
const getUser = async (userId) => {
    const params = {
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
        return result.Item;
    }
    catch (error) {
        console.error('Error retrieving user: ', error);
        return null;
    }
};
exports.getUser = getUser;
//# sourceMappingURL=store-user.js.map