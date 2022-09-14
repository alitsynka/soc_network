import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {v1} from "uuid";
import {News} from "./components/news/News";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {addTaskAC, changeTaskTitleAC, removeTaskAC} from "./state/PostsReducer";


export type PostType = {
    id: string
    title: string
}

function App() {

    const posts = useSelector<AppRootStateType, PostType[]>(state => state.posts)
    const dispatch = useDispatch()

    // const [posts, setPosts] = useState<PostType[]>( [
    //     {
    //         id:v1(), title:'Lorem Ipsum is simply dummy text of the' +
    // ' printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
    // 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five' +
    // ' centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with ' +
    // 'the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker' +
    // ' including versions of Lorem Ipsum.'
    //     },
    //     {
    //         id:v1(), title:'Lorem Ipsum is simply dummy text of the' +
    //             ' printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
    //             'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five' +
    //             ' centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with ' +
    //             'the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker' +
    //             ' including versions of Lorem Ipsum.'
    //     }
    // ])

    const removePost = (postId:string) => {
        const action = removeTaskAC(postId)
        dispatch(action)
        // const filteredTask = posts.filter(t => t.id !== postId)
        // setPosts([...filteredTask])
    }
    const addPost = (title:string) => {
        const action = addTaskAC(title)
        dispatch(action)
        // const newTask = {id:v1(), title:title}
        // setPosts([newTask, ...posts])
    }
    const changePostTitle = (postId: string, newTitle: string) => {
        const action = changeTaskTitleAC(postId, newTitle)
        dispatch(action)

        // let task = posts.find(t => t.id === postId)
        // if (task) {
        //     task.title = newTitle
        //     setPosts([...posts])
        // }
    }


    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className={'Wrapper'}>
                    <Routes>
                        <Route path='/main' element={<Main posts={posts}
                                                           removePost={removePost}
                                                           addPost={addPost}
                                                           changePostTitle={changePostTitle}
                        />}/>
                        <Route path='/news' element={<News/>}
                        />
                        <Route index element={<Navigate to={'/news'}/>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
