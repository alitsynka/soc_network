import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from './Main.module.css';
import {IconButton} from '@mui/material';
import {AddBox} from "@mui/icons-material";
import {PostType} from "../../App";
import {UserInfo} from "./User/UserInfo";
import {Post} from "./post/Post";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {addTaskAC, changeTaskTitleAC, removeTaskAC} from "../../state/PostsReducer";

type MainTaskType = {
    posts: PostType[]
    removePost: (taskId: string) => void
    addPost: (title: string) => void
    changePostTitle: (taskId: string, newTitle: string) => void
}

export const Main = (props: MainTaskType) => {

    const [title, setTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    const addTask = () => {
        if (title.trim() !== '') {
            props.addPost(title.trim())
            setTitle('')
        } else {
            setError('title is required')
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        setError(null)
        if (e.key === "Enter") {
            addTask()
        }
    }

    return (
        <div className={s.Wrapper}>
            <UserInfo/>
            <div className={s.Posts}>
                <h2>My posts</h2>
                <div>
                    <div className={s.WrapperInput}>
                    <textarea value={title}
                              onChange={onChangeHandler}
                              onKeyPress={onKeyPressHandler}
                              className={error ? s.Error : s.TextAreaS}
                              rows={5}
                    />

                        <IconButton color="primary" onClick={addTask}>
                            <AddBox/>
                        </IconButton>
                    </div>
                    {error && <div className={s.ErrorMessage}>{error}</div>}
                </div>

                <div>
                    {
                        props.posts.map(t => {
                            const onRemoveHandler = () => props.removePost(t.id)
                            const onChangeTitleHandler = (newValue: string) => {
                                return props.changePostTitle(t.id, newValue)
                            }
                            return <div key={t.id} className={s.PostWrapper}>
                                <Post title={t.title} onChange={onChangeTitleHandler}
                                              onRemoveHandler={onRemoveHandler}/>

                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}


