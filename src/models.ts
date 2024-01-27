import * as url from "url";

export interface IDeed{
        _id?: string,
        title?: string,
        is_done?: boolean,
        description?: string,
        hashtags?: string[],
        created?: string,
        user?: string,

}

export interface IPosts{
    posts: IDeed[]
}