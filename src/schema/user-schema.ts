import * as dynamoose from 'dynamoose';

const groupSchema = new dynamoose.Schema(  {
    type: Object,
    Id: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Words: {
        type: String,
        required: true
    }
});

const UserSchema = new dynamoose.Schema({
    IdUser: {
        type: String,
        hashKey: true,
        required: true
    },
    Groups: {
        type: Array,
        schema: [groupSchema],
        required: true
    }
});

export const UserModel = dynamoose.model('User', UserSchema);