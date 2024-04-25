import { Navigate } from 'react-router-dom';
import { useAuth } from '../../screens/AuthProvider';

const ProtectedRouts = ({ component, type }) => {
    const {user} = useAuth();
    console.log(user);

    if (!user) return <Navigate to="/" />
    else if (user.type === type) return component
    else return (
        <p>You are not authorized.</p>
    )
}

export default ProtectedRouts