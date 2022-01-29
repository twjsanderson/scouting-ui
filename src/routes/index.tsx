// import { Navigate } from 'react-router-dom';

// pages
import Login from 'pages/login';
import Dashboard from 'pages/dashboard';
import RecordGame from 'pages/recordGame';
import AddPlayer from 'pages/addPlayer';
import Games from 'pages/games';
import Teams from 'pages/teams';

export const routes = [
    { path: '/', element: <Login /> },
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/recordgame', element: <RecordGame /> },
    { path: '/addplayer', element: <AddPlayer /> },
    { path: '/games', element: <Games /> },
    { path: '/teams', element: <Teams /> },
    // { path: '/dashbo2ard', element: <Dashboard /> },
    // { path: '/dash1board', element: <Dashboard /> },
    // {
    //     path: '/',
    //     element: <MainLayout />,
    //     children: [
    //         {path: '*', element: <Navigate to='/404' />},
    //         {path: '/', element: <MainView />},
    //         {path: '404', element: <PageNotFoundView />},
    //         {path: 'account', element: <Navigate to='/account/list' />},
    //     ],
    // },
];
