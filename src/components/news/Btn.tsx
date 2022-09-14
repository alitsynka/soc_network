import {Button} from "@mui/material";
import React from "react";
import {CategoryType} from "./News";

type BtnsPropsType = {
    onClick: (category: CategoryType) => any
    chosenCategory: null | CategoryType
    category: CategoryType
}
export const Btn = (props: BtnsPropsType) => {
    return (
        <Button
            variant={'contained'}
            onClick={props.onClick(props.category)}
            color={props.chosenCategory === props.category ? 'primary' : 'inherit'}
        >{props.category}</Button>
    )
}