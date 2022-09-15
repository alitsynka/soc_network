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

    return (
        <BrowserRouter basename={'soc_network'}>
            <div className="App">
                <Header/>
                <div className={'Wrapper'}>
                    <Routes>
                        <Route path='/main' element={<Main />}/>
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
