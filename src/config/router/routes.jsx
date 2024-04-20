import { Outlet, createBrowserRouter } from 'react-router-dom';
// import Login from '../../screens/Login/Login';
// import AdminGraph from '../../screens/Dashboard/Graph/AdminGraph';
// import Profile from '../../screens/Dashboard/Profile/Profile';
// import Managers from '../../screens/Dashboard/Managers/Managers';
// import Register from '../../screens/Dashboard/Register/Register';
// import Employee from '../../screens/Dashboard/Employee/Employee';
import Dashboard from '../../screens/Dashboard/Dashboard';
import Employee from '../../screens/Dashboard/Employee/Employee';
import AdminGraph from '../../screens/Dashboard/Graph/AdminGraph';
import Managers from '../../screens/Dashboard/Managers/Managers';
import Profile from '../../screens/Dashboard/Profile/Profile';
import Register from '../../screens/Dashboard/Register/Register';
import Login from '../../screens/Login/Login';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Outlet />,
        children: [
            { index: true, element: <Login /> },
            {
                path: 'dashboard',
                element: <Dashboard />,
                children: [
                    { index: true, element: <AdminGraph /> },
                    { path: 'profile', element: <Profile /> },
                    { path: 'register', element: <Register /> },
                    { path: 'managers', element: <Managers /> },
                    { path: 'employee', element: <Employee /> },
                ]
            }
        ]
    }
])

export default router;