import AWS from 'aws-sdk'
const dotenv = require('dotenv');
dotenv.config();

AWS.config.update({
    region: process.env.DYNAMO_REGION,
    accessKeyId: process.env.DYNAMO_ACCESS_KEY_ID,
    secretAccessKey: process.env.DYNAMO_SECRET_ACCESS_KEY
})

const db = new  AWS.DynamoDB.DocumentClient()

export {
    db
}