import { getAccessTokenDecoded, logout } from 'core/utils/auth';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import MenuIcon from 'core/assets/images/menu-icon.svg';
import './styles.scss';

const Navbar = () => {
    const [drawerActive, setDrawerActive] = useState(false);
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
            <button
                className="menu-mobile-btn" type="button"
                onClick={() => setDrawerActive(!drawerActive)}>
                <img src={MenuIcon} alt="menu-mobile" />

            </button>

            <div className={drawerActive ? "menu-mobile-container" : "menu-container"}>
                <ul className="main-menu">
                    <li>
                        <NavLink className="nav-link" to="/"
                            activeClassName="active"
                            exact
                            onClick={() => setDrawerActive(false)}
                        >
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/products"
                            activeClassName="active"
                            exact
                            onClick={() => setDrawerActive(false)}>
                            CATÁLOGO
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/admin"
                            activeClassName="active"
                            exact
                            onClick={() => setDrawerActive(false)}>
                            ADMIN
                        </NavLink>
                    </li>
                    {
                        drawerActive && (
                            <li>
                                {
                                    currentUser && (
                                        <a href="logout" className="nav-link active d-inline" 
                                        onClick={(e) => {
                                            setDrawerActive(false);
                                            handleLogout(e);
                                        }}>
                                            {`LOGOUT - ${currentUser}`}
                                        </a>
                                    )
                                }
                            </li>
                        )}

                    {drawerActive && (
                        <>
                            {!currentUser && (
                                <li>
                                    <Link to="/auth/login" className="nav-link active"
                                    onClick={() => setDrawerActive(false)}>LOGIN</Link>
                                </li>
                            )}
                        </>
                    )}
                </ul>
            </div>
            <div className="user-info-dnone text-right">
                {currentUser && (
                    <>
                        <a href="logout" className="nav-link active d-inline" 
                            onClick={(e) => {
                                setDrawerActive(false);
                                handleLogout(e);
                            }}>
                            LOGOUT
                        </a>
                        <div className="ml-5">{currentUser}</div>
                    </>
                )}
                {!currentUser && (
                    <Link className="nav-link active" to="/auth/login" onClick={() => setDrawerActive(false)}>
                        LOGIN
                    </Link>
                )}
            </div>
        </nav>
    )
};

export default Navbar;