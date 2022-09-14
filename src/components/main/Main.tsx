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
}

export const Main = (props: MainTaskType) => {
    const posts = useSelector<AppRootStateType, PostType[]>(state => state.posts)

    const [title, setTitle] = useState('')
    const [error, setError] = useState<string | null>(null)
    const dispatch = useDispatch()

    // const addPost = (title:string) => {
    //     const action = addTaskAC(title)
    //     dispatch(action)
    // }

    const addPost = () => {
        if (title.trim() !== '') {
            // props.addPost(title.trim())
            const action = addTaskAC(title.trim())
            dispatch(action)
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
            addPost()
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

                        <IconButton color="primary" onClick={addPost}>
                            <AddBox/>
                        </IconButton>
                    </div>
                    {error && <div className={s.ErrorMessage}>{error}</div>}
                </div>

                <div>
                    {
                        posts.map(p => {
                            return <div key={p.id} className={s.PostWrapper}>
                                <Post title={p.title} id={p.id} />
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}


