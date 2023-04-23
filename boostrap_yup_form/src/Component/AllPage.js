import React from 'react'
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import Todolist from './Todolist';

export default function AllPage() {
    let routes = [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/regi',
            element: <Registration />
        },
        {
            path: '/todolist',
            element: <Todolist />
        },
    ]
    return routes;
}
