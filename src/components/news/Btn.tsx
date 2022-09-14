import {Button} from "@mui/material";
import React from "react";
import {CategoryType} from "./News";

type BtnsPropsType = {
    changeFilter: (category: CategoryType) => any
    chosenCategory: null | CategoryType
}
export const Btn = (props: BtnsPropsType) => {
    return (
        <Button
            variant={'contained'}
            onClick={props.changeFilter('Memes')}
            color={props.chosenCategory === 'Memes' ? 'primary' : 'inherit'}
        >Memes</Button>
    )
}