import React, {ChangeEvent, useState} from "react";
import s from './Post.module.css';
import {useDispatch} from "react-redux";
import {addTaskAC, changeTaskTitleAC, removeTaskAC} from "../../../state/PostsReducer";

type EditableSpanPropsType = {
    id: string
    title: string
}

export const Post = (props: EditableSpanPropsType) => {
    let [editMode, setEditMode] = useState<boolean>(false)
    let [title, setTitle] = useState(props.title)
    const dispatch = useDispatch()

    const removePost = () => {
        const action = removeTaskAC(props.id)
        dispatch(action)
    }

    const activateEditMode = () => {
        setEditMode(true)
        setTitle(props.title)
    }
    const activateViewMode = () => {
        setEditMode(false)
        const action = changeTaskTitleAC(props.id, title)
        dispatch(action)
        console.log(title)
    }
    const onChangeTitleHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (editMode
            ? <>
                <textarea value={title}
                          className={s.Input}
                          onChange={onChangeTitleHandler}

                          rows={8}
                          autoFocus={true}/>
                <button onClick={activateViewMode}>save</button>
            </>
            : <>
                <div className={s.Description}>
                    <p>{props.title}</p>
                </div>
                <div>
                    <button onClick={activateEditMode}
                            className={s.EditBtn}
                    >edit</button>
                    <button onClick={removePost}
                            className={s.RemoveBtn}>delete post</button>
                </div>
            </>


    )
}