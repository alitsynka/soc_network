import React, {ChangeEvent, useState} from "react";
import s from './Post.module.css';

type EditableSpanPropsType = {
    title: string
    onChange: (value: string) => void
    onRemoveHandler: () => void
}

export const Post = (props: EditableSpanPropsType) => {
    let [editMode, setEditMode] = useState<boolean>(false)
    let [title, setTitle] = useState(props.title)

    const activateEditMode = () => {
        setEditMode(true)
        setTitle(props.title)
    }
    const activateViewMode = () => {
        // debugger
        setEditMode(false)
        props.onChange(title)
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
                    // onBlur={activateViewMode}
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
                    <button onClick={props.onRemoveHandler}
                            className={s.RemoveBtn}>delete post</button>
                </div>
            </>


    )
}