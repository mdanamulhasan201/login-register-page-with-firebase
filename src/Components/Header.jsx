import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const {user, LogOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        LogOut()
        .then(() =>{})
        .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content  justify-between">
                <a className="btn btn-ghost normal-case text-xl mx-auto">Auth Master</a>
                <div className='mx-auto'>
                    
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
               {user && <Link className="btn btn-ghost normal-case text-xl" to='/profile'>Profile</Link>}
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                </div>
                <div className='mx-10'>
                {
                    user ? <>
                    <span>{user.email}</span>
                    <button onClick={handleLogOut} className="btn btn-sm">SignOut</button>
                    </> : <Link to='/login'>Login</Link>
                }
                </div>
            </div>

        </div>
    );
};

export default Header;