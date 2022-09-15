import s from "../Main.module.css";
import image from "../../../images/img.png";
import React from "react";

export function UserInfo() {
    return <div className={s.User}>
        <div>
            <img src={image} className={s.image}/>
        </div>
        <div className={s.Naming}>
            <h1>John</h1>
            <h2>Doe</h2>
            <h3>Freelancer</h3>
        </div>
    </div>;
}