import { Outlet, createBrowserRouter } from 'react-router-dom';
import Dashboard from '../../screens/Dashboard/Dashboard';
import Employee from '../../screens/Dashboard/Employee/Employee';
import AdminGraph from '../../screens/Dashboard/Graph/AdminGraph';
import Managers from '../../screens/Dashboard/Managers/Managers';
import Profile from '../../screens/Dashboard/Profile/Profile';
import Register from '../../screens/Dashboard/Register/Register';
import Login from '../../screens/Login/Login';
import AllTasks from '../../screens/ManagerDashboard/AllTasks/AllTasks';
import ManagerDashboard from '../../screens/ManagerDashboard/ManagerDashboard';
import ManagerProfile from '../../screens/ManagerDashboard/ManagerProfile/ManagerProfile';
import EmployeeDashboard from '../../screens/EmployeesDashboard/EmployeeDashboard';
import EmployeeTasks from '../../screens/EmployeesDashboard/EmployeeTasks/EmployeeTasks';
import EmployeeProfile from '../../screens/EmployeesDashboard/EmployeeProfile/EmployeeProfile';
import AddTask from '../../screens/ManagerDashboard/AddTask/AddTask';

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
            },
            {
                path: 'manager',
                element: <ManagerDashboard />,
                children: [
                    { index: true, element: < AllTasks /> },
                    { path: 'managerProfile', element: < ManagerProfile /> },
                    { path: 'addTask', element: <AddTask /> },

                ]

            }
            ,
            {
                path: 'employee',
                element: <EmployeeDashboard />,
                children: [
                    { index: true, element: < EmployeeTasks /> },
                    { path: 'employeeProfile', element: < EmployeeProfile /> },

                ]

            }
        ]
    }
])

export default router;