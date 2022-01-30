import { Outlet } from 'react-router-dom';

// features
import Navbar from 'features/navbar';

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default MainLayout;