import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export function ScrollToTop(){
    const {pathname}=useLocation()

    useEffect(()=>{
        window.scroll(0,0)
    },[pathname])
}