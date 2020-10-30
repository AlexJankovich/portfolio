import React from "react";
import loader from "../../assets/image/loading.gif"

export const Preloader = () => {
    return <>
        <img src={loader} alt="loading..."/>
    </>
}