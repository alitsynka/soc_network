import React, {useState} from "react";
import s from './Header.module.css'
import {Navbar} from "../navbar/Navbar";
import {Menu} from "@mui/icons-material";
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";

export const Header = () => {
    let [editMode, setEditMode] = useState<boolean>(false)

    const openMenu = () => { !editMode ? setEditMode(true) : setEditMode(false)}

    return(
<AppBar position="static" >
    <Toolbar >
      <div className={s.header1}>
            <div className={s.Wrapper}>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <Menu onClick={openMenu} className={s.MenuBurger} />
                </IconButton>
            </div>
            {
                editMode && <Navbar/>
            }

        </div>
        <div className={s.SocNetwork}>
            <Typography variant="h6" color={"inherit"} component="div">
                Social network
            </Typography>
        </div>
    </Toolbar>
</AppBar>
    )
}
