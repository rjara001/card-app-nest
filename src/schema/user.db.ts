import { IUser } from '../interfaces/IUser.js';
import { db } from './db.config.js'
import { IResult, IResultCollection, IResultData } from './IResult.db.js';
import { User } from '../model/user.js';

const Table = 'User';
// Create or Update users
const createOrUpdate = async (user:IUser) : Promise<IResult> => {
    const params = {
        TableName: Table,
        Item: user
    }

    try {
        await db.put(params).promise()
        return { success: true }
    } catch (error) {
        console.log(error)
        return { success: false }
    }
}

// Read all users
const readAllUsers = async () : Promise<IResultCollection<IUser>> => {
    const params = {
        TableName: Table
    }

    try {
        const { Items = [] } = await db.scan(params).promise()
        return { success: true, data: Items as IUser[] }


    } catch (error) {
        return { success: false, data: [] }
    }

}

// Read Users by ID
const getUserById = async (value, key = 'IdUser') : Promise<IResultData<IUser>> => {
    const params = {
        TableName: Table,
        Key: {
            [key]: value
        }
    }

    console.log(`v1, parameters it got: ${JSON.stringify(params)}`);

    try {   
        const { Item = {} } = await db.get(params).promise()

        console.log(`v1, we got from dynamodb: ${JSON.stringify(Item)}`);

        return { success: true, data: Item as IUser }

    } catch (error) {

        console.log(`v1, error: ${error}`);

        return { success: false, data: new User() }
    }
}

// Delete User by ID
const deleteUserById = async (value, key = 'IdUser'):Promise<IResult> => {
    const params = {
        TableName: Table,
        Key: {
            [key]: parseInt(value)
        }
    }

    try {
        await db.delete(params).promise()
        return { success: true }

    } catch (error) {
        return { success: false }
    }
}


export {
    createOrUpdate,
    readAllUsers,
    getUserById,
    deleteUserById
}