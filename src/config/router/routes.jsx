import { Outlet, createBrowserRouter } from 'react-router-dom';
import Dashboard from '../../screens/Dashboard/Dashboard2';
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
import ProtectedRouts from './ProtectedRouts';
import AuthProvider from '../../screens/AuthProvider';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthProvider><Outlet /></AuthProvider>,
        loader: async () => {
            let user = null;
            
            await auth.authStateReady();
            if (!auth.currentUser) return user;
            try {
                const docRef = doc(db, "users", auth.currentUser.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    user = docSnap.data()
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            return user;
        },
        children: [
            { index: true, element: <Login /> },
            {
                path: 'dashboard',
                element: <ProtectedRouts type='Admin' component={<Dashboard />} />,
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
                element: <ProtectedRouts type='Manager' component={<ManagerDashboard />} />,
                children: [
                    { index: true, element: <AllTasks /> },
                    { path: 'managerProfile', element: <ManagerProfile /> },
                    { path: 'addTask', element: <AddTask /> },
                ]
            },
            {
                path: 'employee',
                element: <ProtectedRouts type='Employee' component={<EmployeeDashboard />} />,
                children: [
                    { index: true, element: <EmployeeTasks /> },
                    { path: 'employeeProfile', element: <EmployeeProfile /> },
                ]
            }
        ]
    }
])

export default router;