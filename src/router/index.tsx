import {Navigate} from 'react-router-dom';


export default [
    {
        path:'/',
        element: <Navigate to='/comic'/>
    },
    {
        path: '/comic',
        element: <></>
    },
    {
        path: '/game',
        element: <></>
    }
]
