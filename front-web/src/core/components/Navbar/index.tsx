import { getAccessTokenDecoded, logout } from 'core/utils/auth';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './styles.scss';

const Navbar = () => { 
    const [currentUser, setCurrentUser] = useState('');
    const location = useLocation();

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        logout();
    }

    useEffect(() => {
        const currentUserData = getAccessTokenDecoded();
        setCurrentUser(currentUserData.user_name);
    }, [location]);
    
    return (
        <nav className="bg-primary main-nav">
         
                <Link to="/" className="nav-logo-text">
                    <h4>DS Catalog</h4>
                </Link>
 
            <div className="menu-container">
                <ul className="main-menu">
                    <li>
                        <NavLink className="nav-link" to="/" activeClassName="active" exact>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/products" activeClassName="active" exact>CATÁLOGO</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/admin" activeClassName="active" exact>ADMIN</NavLink>
                    </li>
                </ul>
            </div>
            <div className="text-right">
               { currentUser && (
                   <>
                    <a href="logout" className="nav-link active d-inline" onClick={handleLogout}>
                        LOGOUT
                    </a>
                    <div className="ml-5">{currentUser}</div>
                   </>
               )}
                { !currentUser && (
                    <Link className="nav-link active" to="/auth/login">
                    LOGIN
                    </Link>
                )}
            </div>
        </nav>
    )
};

export default Navbar;