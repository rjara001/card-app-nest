export interface IResult {
    success: boolean
}

export interface IResultData<T> {
    success: boolean
    data: T
}

export interface IResultCollection<T> {
    success: boolean
    data: T[]
}