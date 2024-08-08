
import React, { useEffect } from 'react'
import App from '../App'
import { Home, LogIn, SingnUp } from '../pages/pages'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'




export function Routers() {
    const jwtToken = JSON.parse(localStorage.getItem("jwtToken"))


    // console.log(user);
    const route = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "",
                    element: jwtToken ? <Home /> : <Navigate to={"/login"} />
                },
                {
                    path: "login",
                    element:  <LogIn />
                },
                {
                    path: "signup",
                    element: <SingnUp />
                }

            ]
        }
    ])
    return route
}

