import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {Typography} from "@mui/material";

export const Navbar = () => {
    return(
        <div className={s.Wrapper}>
            <Typography variant="h6" color={"white"} component="div">
                <NavLink to="/main" className={s.Nav}>Profile</NavLink>
            </Typography>
            <Typography variant="h6" color="inherit" component="div">
                <NavLink to="/news" className={s.Nav}>News</NavLink>
            </Typography>
        </div>
    )
}