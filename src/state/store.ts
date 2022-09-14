import {combineReducers, createStore} from 'redux';
import {postsReducer} from "./PostsReducer";


const rootReducer = combineReducers({
    posts: postsReducer,
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;