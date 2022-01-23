import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

// pages
import Login from 'pages/login';
import Dashboard from 'pages/dashboard';

// styles
import './index.css';

const App: FC = (): JSX.Element => {
  return (
    <>
        <Routes>
          <Route path ='/' element={<Login />} />
          <Route path ='/dashboard' element={<Dashboard />} />
        </Routes>
    </>
  );
}

export default App;