// import { Navigate } from 'react-router-dom';

// layouts
import MainLayout from 'layouts/mainLayout';

// pages
import Login from 'pages/login';
import Dashboard from 'pages/dashboard';
import RecordGame from 'pages/recordGame';
import AddPlayer from 'pages/addPlayer';


export const routes = [
    { path: '/', element: <Login /> },
    {
        path: '/',
        element: <MainLayout />,
        children: [
            // {path: '*', element: <Navigate to='/404' />},
            { path: 'dashboard', element: <Dashboard /> },
            { path: 'recordgame', element: <RecordGame /> },
            { path: 'addplayer', element: <AddPlayer /> },
            // { path: 'games', element: <Games /> },
        ],
    },
];
