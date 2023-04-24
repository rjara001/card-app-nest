"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.saveGroup = exports.updateGroup = void 0;
const aws_sdk_1 = require("aws-sdk");
const global_1 = require("aws-sdk/global");
global_1.config.update({
    accessKeyId: process.env.DYNAMO_ACCESS_KEY_ID,
    secretAccessKey: process.env.DYNAMO_SECRET_ACCESS_KEY,
    region: process.env.DYNAMO_REGION
});
const docClient = new aws_sdk_1.DynamoDB.DocumentClient();
async function updateGroup(group) {
    const params = {
        TableName: 'Groups',
        Key: {
            'Groups_PT': group.Name
        },
        UpdateExpression: 'set Words = :Words',
        ExpressionAttributeValues: {
            ':Words': group.Words
        }
    };
    await docClient.update(params).promise();
}
exports.updateGroup = updateGroup;
const saveGroup = async (group) => {
    const params = {
        TableName: 'Groups',
        Item: group
    };
    await docClient.put(params).promise();
    console.log('saved ok');
};
exports.saveGroup = saveGroup;
const getUser = async (userId) => {
    const params = {
        TableName: 'Groups',
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
//# sourceMappingURL=store-groups.js.map