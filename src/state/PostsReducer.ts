import {PostType} from "../App";
import {v1} from "uuid";

export type RemovePostActionType = {
    type: 'REMOVE-POST',
    postId: string
}
export type AddPostActionType = {
    type: 'ADD-POST',
    title: string
}
export type ChangePostTitleActionType = {
    type: 'CHANGE-POST-TITLE',
    postId: string
    title: string
}
type ActionsType =  RemovePostActionType | AddPostActionType | ChangePostTitleActionType
        const initialState:PostType[] = [
            {
                id:v1(), title:'Lorem Ipsum is simply dummy text of the' +
                    ' printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, '

            },
            {
                id:v1(), title:'Lorem Ipsum is simply dummy text of the' +
                    ' printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
                    'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five' +
                    ' centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with ' +
                    'the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker' +
                    ' including versions of Lorem Ipsum.'
            }
        ]

export const postsReducer = (state:PostType[] = initialState, action:ActionsType) => {
    switch (action.type){
        case "ADD-POST":{
            const newPost = {id:v1(), title:action.title}
            return [newPost, ...state]
        }
        case "REMOVE-POST":{
            const stateCopy = [...state]
            return stateCopy.filter(t => t.id !== action.postId)
        }
        case "CHANGE-POST-TITLE":{
            const stateCopy = [...state]
            let task = stateCopy.find(t => t.id === action.postId)
            if (task) {
                task.title = action.title
            }
            return stateCopy
        }
        default:
            return state
    }
}

export const removeTaskAC = (postId: string): RemovePostActionType => {
    return {type: 'REMOVE-POST', postId: postId}
}
export const addTaskAC = (title: string): AddPostActionType => {
    return {type: 'ADD-POST', title}
}

export const changeTaskTitleAC = (postId: string, title: string): ChangePostTitleActionType => {
    return {type: 'CHANGE-POST-TITLE', title, postId}
}