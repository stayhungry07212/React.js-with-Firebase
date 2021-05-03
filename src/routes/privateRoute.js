import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import Sidebar from '../components/sidebar'
import { UserContext } from '../providers/UserProvider';


function PrivateRoute({path, children, ...rest}) {
    const user = useContext(UserContext);
    return (
        user
            ?
                <Route path={path} {...rest}>
                    <Sidebar />
                    {children}
                </Route>
            :
                <Redirect to="/login" />
    )
}

export default PrivateRoute;
